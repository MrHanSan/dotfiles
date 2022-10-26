#!/bin/sh

session="nib"

tmux new -ds $session

tmux send-keys -t $session.1 "clear" enter
if [ $1 == "i" ]; then
    tmux send-keys -t $session.1 "cd ~/repos/nib/NIB-Infrastruktur" enter
else
    tmux send-keys -t $session.1 "cd ~/repos/win/nib/NIB-Webapps" enter
fi
tmux switch -t $session

