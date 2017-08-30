#!/bin/sh
charm &

if ! [ -n "$TMUX" ] ; then
    tmux new -ds 'ow4'
else
    tmux_session=$(tmux display-message -p '#S')
    tmux rename-session ow4
    echo "renamed session from $tmux_session to ow4"
fi

ow4dir="/share/onlineweb4"

tmux split-window -h
tmux split-window -v
tmux select-pane -t 0
tmux send-keys "cd $ow4dir && clear && docker-compose up" enter
tmux select-pane -t 2
tmux send-keys "cd $ow4dir  && clear && sleep 7 && docker exec -i -t \
onlineweb4_django_1 bash" enter

if ! [ -n "$TMUX" ] ; then
    tmux a -t ow4
else
    echo "You are already in a tmux sesion"
fi
