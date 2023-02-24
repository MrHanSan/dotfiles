# login art
cat << "EOF"
██╗  ██╗███████╗██╗     ██╗      ██████╗        ███████╗███████╗██╗  ██╗   
██║  ██║██╔════╝██║     ██║     ██╔═══██╗       ╚══███╔╝██╔════╝██║  ██║██╗
███████║█████╗  ██║     ██║     ██║   ██║         ███╔╝ ███████╗███████║╚═╝
██╔══██║██╔══╝  ██║     ██║     ██║   ██║        ███╔╝  ╚════██║██╔══██║▄█╗
██║  ██║███████╗███████╗███████╗╚██████╔╝▄█╗    ███████╗███████║██║  ██║▀═╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ ╚═╝    ╚══════╝╚══════╝╚═╝  ╚═╝   
EOF

session="startup-term"
if tty | grep pts ; then
    if ! [ -n "$TMUX" ]; then
        tmux has-session -t $session 2>/dev/null
        if [ $? != 0 ] ; then
            tmux new -d -s $session;
        fi
        tmux a -t $session
    fi
else
    echo "not in PTS";
fi

fpath=($fpath /usr/share/zsh/vendor-completions)
autoload bashcompinit
bashcompinit
source ~/.local/share/bash-completion/completions/_switch.bash

export EDITOR=vim
export LESS='-R'
alias python="python3"
alias cal="ncal -b"

alias drizzle="$HOME/scripts/weather.sh"
alias yr="$HOME/scripts/weather.sh"
alias explorer="explorer.exe"
alias ge="git.exe"
alias vstudio="/mnt/c/Program\ Files/Microsoft\ Visual\ Studio/2022/Community/Common7/IDE/devenv.exe"
alias s3="/mnt/c/Program\ Files/CloudBerryLab/CloudBerry\ Explorer/CloudBerry\ Explorer.exe &"

alias grepex="grep -rnI --exclude-dir={node_modules,bin,obj,.git,Content,Dok,fonts,help_en,help_no,Images,Logs,Scripts,.data,resources-build,lib,help,dist}"
function ffind { find -type f -name "*$1*"; }
alias kgags="kubectl get ags"
alias kgagsoy="kubectl get ags -o yaml"
function kdagsw() { watch "kubectl describe ags $1 | tail"; }
function kdpw() { watch "kubectl describe pod $1 | tail"; }

alias glb="git for-each-ref --sort=-committerdate refs/heads/ --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(color:red)%(objectname:short)%(color:reset) - %(contents:subject) - %(color:blue)%(authorname)%(color:reset) (%(color:green)%(committerdate:relative)%(color:reset))'"
alias glbr="git for-each-ref --sort=-committerdate refs/remotes/ --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(color:red)%(objectname:short)%(color:reset) - %(contents:subject) - %(color:blue)%(authorname)%(color:reset) (%(color:green)%(committerdate:relative)%(color:reset))'"

alias inat="~/scripts/inat.sh"
alias nve="~/scripts/nve.sh"
alias las="~/scripts/las.sh"
alias dd="~/scripts/dd.sh"
alias nib="~/scripts/nib.sh"

alias arcpy='powershell.exe "C:\Users\hanss\AppData\Local\ESRI\conda\envs\arcgispro-py3-clone\python.exe"'

source ${HOME}/.kube/export-kubeconfig
source /usr/local/bin/switch.sh
switch .

# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=~/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="powerlevel10k/powerlevel10k"
#ZSH_THEME="gnzh"
#ZSH_THEME="agnoster"

# Uncomment the following line to display red dots whilst waiting for completion.
COMPLETION_WAITING_DOTS="true"

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.

plugins=(git
    aws
    kubectl
    docker
    docker-compose
)

source $ZSH/oh-my-zsh.sh

# User configuration

# ssh
export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# for setting history length see HISTSIZE and HISTFILESIZE in zsh
HISTSIZE=1000000
HISTFILESIZE=2000000

eval "$(direnv hook zsh)"

PATH="${PATH}:${HOME}/.local/bin/"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
