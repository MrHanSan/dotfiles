#!/bin/sh

session="nve"

tmux new -ds $session

tmux send-keys -t $session.1 "clear" enter
tmux send-keys -t $session.1 "cd ~/repos/nve" enter
tmux switch -t $session

