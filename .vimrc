set relativenumber
set autoindent
set nu
set ruler
set tabstop=8 softtabstop=0 expandtab shiftwidth=4 smarttab

syntax on

" 1 or 0 -> blinking block
" 2 -> solid block
" 3 -> blinking underscore
" Recent versions of xterm (282 or above) also support
" 5 -> blinking vertical bar
" 6 -> solid vertical bar

if &term == 'rxvt-unicode-256color'
    let &t_SI = "\<Esc>[5 q"
    let &t_EI = "\<Esc>[1 q"
endif

if exists('$TMUX')
    let &t_SI = "\<Esc>Ptmux;\<Esc>\e[5 q\<Esc>\\"
    let &t_EI = "\<Esc>Ptmux;\<Esc>\e[1 q\<Esc>\\"
endif

set undofile
set undodir=~/.vim/undo
set undolevels=1000
set undoreload=10000

set backupdir=~/.vim/backup,~/.vim,.
set directory=~/.vim/backup,~/.vim,.

" Allow saving of files as sudo when I forgot to start vim using sudo.
cmap w!! w !sudo tee > /dev/null %
