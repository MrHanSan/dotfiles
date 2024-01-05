#!/bin/sh

session="hre"

tmux new -ds $session

tmux send-keys -t $session.1 "clear" enter
tmux send-keys -t $session.1 "cd ~/repos/haere" enter
tmux send-keys -t $session.1 "switch hosting-haehre-dev-k8s10" enter
tmux switch -t $session

