import os
from dataclasses import dataclass, field, fields
import tempfile
import kubernetes.client as k8sclient
import kubernetes.config as k8sconfig
import base64
import yaml
import subprocess
import typer
from typing import NamedTuple


app = typer.Typer()


class CommonK8s(NamedTuple):
    namespace: str
    context: str | None
    secret_name: str


@dataclass
class AWSAccess:
    aws_access_key_id: str
    aws_secret_access_key: str = field(repr=False)  # Hide secret from print

    def profile_string(self, profile_name: str) -> str:
        return f"""
[{profile_name}]
aws_access_key_id = {self.aws_access_key_id}
aws_secret_access_key = {self.aws_secret_access_key}
"""

    def envvar(self, delimiter: str = ",") -> str:
        """Returns a commaseperated list of env variable names with values"""
        return f"{delimiter}".join(
            [f"{f.name.upper()}={getattr(self, f.name)}" for f in fields(self)]
        )


def get_k8s_client(namespace: str, context: str | None = None) -> k8sclient.CoreV1Api:
    """Get a k8s client given a context"""
    k8sconfig.load_config()
    contexts, _ = k8sconfig.list_kube_config_contexts()
    context_names: list[str] = [con["name"] for con in contexts]
    print(context)
    if context is None:
        try:
            context = [c for c in context_names if namespace in c][0]
        except IndexError:
            raise ValueError(f"Context not found for namespace {namespace}")

    return k8sclient.CoreV1Api(
        api_client=k8sconfig.new_client_from_config(context=context)
    )


def get_aws_access_from_k8s_secret(
    client: k8sclient.CoreV1Api,
    namespace: str,
    secret_key: str,
    secret_name: str | None = None,
):
    """
    Retrieve the decoded secret from k8s
    """
    secret_name = "project-access-keys" if secret_name is None else secret_name
    secret = client.read_namespaced_secret(name=secret_name, namespace=namespace)
    return yaml.safe_load(base64.b64decode(secret.data[secret_key]))["AccessKey"]


def get_role_assumer_aws_creds(
    client: k8sclient.CoreV1Api, namespace: str, secret_name: str | None = None
) -> AWSAccess:
    """Retrieve aws credentials for role assumer"""
    role_assumer_secret = get_aws_access_from_k8s_secret(
        client, namespace, "RoleAssumer", secret_name
    )
    return AWSAccess(
        aws_access_key_id=role_assumer_secret["AccessKeyId"],
        aws_secret_access_key=role_assumer_secret["SecretAccessKey"],
    )


def get_s3_manager_aws_creds(
    client: k8sclient.CoreV1Api, namespace: str, secret_name: str | None = None
) -> AWSAccess:
    """Retrieve aws credentials for role assumer"""
    role_assumer_secret = get_aws_access_from_k8s_secret(
        client, namespace, "S3Manager", secret_name
    )
    return AWSAccess(
        aws_access_key_id=role_assumer_secret["AccessKeyId"],
        aws_secret_access_key=role_assumer_secret["SecretAccessKey"],
    )


def get_aws_pod_role_cred_config_string(
    aws_access: AWSAccess,
    namespace: str,
    account_id: str,
    cluster_name: str,
    aws_region,
) -> tuple[str, str]:
    """
    Generate the pod role account
    """
    credentials_text = f"""
[RoleAssumer]
aws_access_key_id = {aws_access.aws_access_key_id}
aws_secret_access_key = {aws_access.aws_secret_access_key}

[PodRole]
role_arn = arn:aws:iam::{account_id}:role/{namespace}-{cluster_name}-PodRole
source_profile = RoleAssumer
"""
    config_text = f"""
[default]
region = {aws_region}
output = json
"""
    return credentials_text, config_text


def write_aws_pod_role_creds(
    aws_access: AWSAccess,
    dest_folder: str,
    namespace: str,
    account_id: str,
    cluster_name: str,
    aws_region: str,
) -> tuple[str, str]:
    """"""
    credentials_file = os.path.join(dest_folder, "credentials")
    config_file = os.path.join(dest_folder, "config")
    credentials_text, config_text = get_aws_pod_role_cred_config_string(
        aws_access, namespace, account_id, cluster_name, aws_region
    )
    with open(config_file, "w") as f:
        f.write(config_text)
    with open(credentials_file, "w") as f:
        f.write(credentials_text)
    return config_file, credentials_file


def get_ecr_login(aws_region: str) -> tuple[str, str]:
    cmd = [
        "aws",
        "ecr",
        "get-login-password",
        "--profile",
        "PodRole",
        "--region",
        aws_region,
    ]
    p = subprocess.run(cmd, capture_output=True)
    return p.stdout.decode("utf-8"), p.stderr


@app.callback()
def common_k8s(
    ctx: typer.Context,
    namespace: str = typer.Option(
        ...,
        "-ns",
        "--namespace",
        help="Namespace for where to retrieve the credentials",
    ),
    context: str = typer.Option(
        None,
        "-c",
        "--context",
        help="Context of namespace, assumes the namespace is included in context name otherwise",
    ),
    secret_name: str = typer.Option(
        "project-access-keys",
        help="The k8s secret name where the credentials are stored",
    ),
):
    ctx.obj = CommonK8s(namespace=namespace, context=context, secret_name=secret_name)


@app.command()
def docker(
    ctx: typer.Context,
    aws_region: str = typer.Option("eu-west-1", help="AWS Region for the aws account"),
    account_id: str = typer.Option("417947229227", help="AWS Account id"),
    cluster_name: str = typer.Option(
        "k8s2", help="The cluster name which the context is in"
    ),
):
    """
    Get docker password to the ecr account connected to a namespace which you can pipe into docker login commands.

    Use case:

    > python gdo-aws-utils.py -ns <namespace> docker <OPTIONS> | docker login --password-stdin

    """
    # ctx.obj is a named tuple
    namespace, context, secret_name = ctx.obj
    k8s_client = get_k8s_client(namespace, context=context)
    aws_access = get_role_assumer_aws_creds(
        k8s_client, namespace, secret_name=secret_name
    )
    with tempfile.TemporaryDirectory() as tmpdir:
        conf_fp, creds_fp = write_aws_pod_role_creds(
            aws_access, tmpdir, namespace, account_id, cluster_name, aws_region
        )
        os.environ["AWS_CONFIG_FILE"] = conf_fp
        os.environ["AWS_SHARED_CREDENTIALS_FILE"] = creds_fp
        pw, err = get_ecr_login(aws_region)
    if err:
        typer.echo(f"Failed to get password!", err=True)
        typer.echo(err, err=True)
        exit()
    typer.echo(pw)


@app.command()
def s3(
    ctx: typer.Context,
    profile: bool = typer.Option(
        is_flag=True,
        default=False,
        help="To generate a profile string to use in credential file",
    ),
    profile_name: str = typer.Option(
        "default",
        help="If profile is set, then this is the name of the generated profile",
    ),
    delimiter: str = typer.Option(",", help="Delimiter for output env variables"),
):
    """
    Get the s3 credentials for a namespace as a comma seperated string (default behaviour):

    AWS_ACCESS_KEY_ID=...,AWS_SECRET_ACCESS_KEY=...

    or

    A profile string which can be added to a credentials file (with --profile tag):

    [profile_name]

    aws_access_key_id=...

    aws_secret_access_key=...

    """
    # ctx.obj is a named tuple
    namespace, context, secret_name = ctx.obj
    k8s_client = get_k8s_client(namespace, context=context)
    s3_access = get_s3_manager_aws_creds(k8s_client, namespace, secret_name=secret_name)

    if profile:
        typer.echo(s3_access.profile_string(profile_name))
    else:
        typer.echo(s3_access.envvar(delimiter))


if __name__ == "__main__":
    app()
