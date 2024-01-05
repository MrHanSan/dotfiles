#!/bin/sh

session="nve"

tmux new -ds $session

tmux send-keys -t $session.1 "clear" enter
tmux send-keys -t $session.1 "cd ~/repos/nve" enter
tmux send-keys -t $session.1 "switch hosting-nve-dev-k8s11" enter
tmux switch -t $session

