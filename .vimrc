" Vundle setup
set nocompatible
filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" Vundle plugins
Plugin 'VundleVim/Vundle.vim' " Vundle manages Vundle
Plugin 'airblade/vim-gitgutter' " GitGutter diff while you diff

call vundle#end()
filetype plugin indent on

set relativenumber
set autoindent
set nu
set ruler
set tabstop=8 softtabstop=0 expandtab shiftwidth=4 smarttab
"set hlsearch

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
    set term=screen-256color
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

" Hilight limits
highlight Over80 ctermbg=blue ctermfg=White guibg=#aa0000
highlight Over120 ctermbg=88 ctermfg=White guibg=#592929
call matchadd("Over80", '\%81v.', -1)
call matchadd("Over120", '\%121v.', -1)

" Test line ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||oOo||
" ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||oOo|||||||||||
