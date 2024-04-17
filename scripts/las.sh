#!/bin/sh

session="las"

tmux new -ds $session
tmux send-keys -t $session.1 "clear" enter
tmux send-keys -t $session.1 "cd ~/repos/win/las/Laser-Forvaltning-React" enter
tmux new-window -d -t $session
tmux send-keys -t $session:2 "cd ~/repos/win/las/Laser-Webapps" enter
tmux switch -t $session

