#!/bin/sh

session="saas"

tmux new -ds $session

tmux send-keys -t $session.1 "clear" enter
tmux send-keys -t $session.1 "cd ~/repo/saas" enter
tmux send-keys -t $session.1 "switch hosting-saas-alfa-k8s10" enter
tmux switch -t $session

