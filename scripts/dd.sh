#!/bin/sh

session="dd"

tmux new -ds $session
tmux send-keys -t $session.1 "clear" enter
tmux send-keys -t $session.1 "cd ~/repos/las/Dybdedata-Webapps" enter
tmux switch -t $session
