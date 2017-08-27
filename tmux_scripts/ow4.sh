#!/bin/sh
charm &
cd ~/onlineweb4
tmux new -ds 'ow4'
tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
tmux send-keys "clear && docker-compose up" enter
tmux select-pane -t 2
tmux send-keys "clear && sleep 7 && docker exec -i -t onlineweb4_django_1 bash" enter
tmux a -t ow4
