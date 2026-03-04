#!/bin/sh

session="soi"

tmux new -ds $session

tmux send-keys -t $session.1 "clear" enter
tmux send-keys -t $session.1 "cd ~/repo/saas" enter
tmux send-keys -t $session.1 "switch hosting-saas-charlie-k8s10" enter
tmux switch -t $session

