#login art
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

alias python="python3"
alias yt="$BROWSER --new-window youtube.com &"
alias br="$BROWSER"
alias drizzle="$HOME/.config/i3/weather.sh"
alias covid="$HOME/.config/i3/covid.sh"
alias explorer="explorer.exe"
alias vstudio="/mnt/c/Program\ Files\ \(x86\)/Microsoft\ Visual\ Studio/2019/Community/Common7/IDE/devenv.exe"

source ${HOME}/.kube/export-kubeconfig

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

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

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

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"


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


export LESS='-R'
#export BROWSER='vivaldi'
export BROWSER='/mnt/c/Users/hanss/AppData/Local/Vivaldi/Application/vivaldi.exe'

eval "$(direnv hook zsh)"

export DISPLAY="$(/sbin/ip route | awk '/default/ { print $3 }'):0"

PATH="${PATH}:${HOME}/.local/bin/"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export EDITOR=vim

#THIS MUST BE AT THE END OF THE FILE FOR SDKMAN TO WORK!!!
#export SDKMAN_DIR="/home/hans/.sdkman"
#[[ -s "/home/hans/.sdkman/bin/sdkman-init.sh" ]] && source "/home/hans/.sdkman/bin/sdkman-init.sh"

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
