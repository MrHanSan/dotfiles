#!/bin/sh

session="inat"

tmux new -ds $session

tmux send-keys -t $session.1 "clear" enter
tmux send-keys -t $session.1 "cd ~/repos/inat" enter
tmux switch -t $session

