#!/bin/sh

session="nib"

tmux new -ds $session

tmux send-keys -t $session.1 "clear" enter
if [ -n $1 ] && [ "$1" = "i" ]; then
    tmux send-keys -t $session.1 "cd ~/repos/nib/NIB-Infrastruktur" enter
    tmux send-keys -t $session.1 "switch nib-services-dev-k8s2" enter
else
    tmux send-keys -t $session.1 "cd ~/repos/nib/NIB-Webapps" enter
    tmux send-keys -t $session.1 "switch nib-klienter-dev-k8s2" enter
fi
tmux switch -t $session

