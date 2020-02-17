#!/bin/sh

session="dev"

if ! [ -n "$TMUX" ] ; then
    tmux new -ds $session
else
    tmux_session=$(tmux display-message -p '#S')
    tmux rename-session $session
    echo "renamed session from $tmux_session to $session"
fi

window=${session}:0
pane=${window}.0

tmux send-keys -t "$pane" "clear" enter

#if ! [ -n "$TMUX" ] ; then
#    tmux a -t dev
#else
#    echo "You are already in a tmux sesion"
#fi

