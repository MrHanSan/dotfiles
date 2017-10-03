#!/bin/sh

if ! [ -n "$TMUX" ] ; then
    tmux new -ds 'ranger'
else
    tmux_session=$(tmux display-message -p '#S')
    tmux rename-session ranger
    echo "renamed session from $tmux_session to ranger"
fi

tmux send-keys "cd ~" enter
tmux send-keys "clear && ranger" enter

if ! [ -n "$TMUX" ] ; then
    tmux a -t ranger
else
    echo "You are already in a tmux sesion"
fi
