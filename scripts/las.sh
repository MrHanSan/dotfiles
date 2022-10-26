#!/bin/sh

session="las"

tmux new -ds $session
tmux send-keys -t $session.1 "clear" enter
tmux send-keys -t $session.1 "cd ~/repos/las/laser-webapps-react" enter
tmux new-window -d -t $session
tmux send-keys -t $session:2 "cd ~/repos/win/las/Laser-Webapps" enter
tmux switch -t $session

