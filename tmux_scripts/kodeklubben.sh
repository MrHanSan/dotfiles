#!/bin/sh
subl
cd ~/kodeklubben/codeclub-viewer 
tmux new -ds 'kodeklubben'
tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
tmux send-keys "clear && yarn start" enter
tmux select-pane -t 2
tmux send-keys "cd ../.. && clear" enter
tmux a -t kodeklubben
