" Vundle setup
set nocompatible
filetype off

set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" Vundle plugins
Plugin 'VundleVim/Vundle.vim' " Vundle manages Vundle
Plugin 'airblade/vim-gitgutter' " GitGutter diff while you diff
Plugin 'scrooloose/nerdtree' " File Tree in vim
Plugin 'Xuyuanp/nerdtree-git-plugin' " Git flag for file tree
Plugin 'ervandew/supertab' " Tab complete all the things
Plugin 'bling/vim-bufferline' " Buffer interface
Plugin 'Raimondi/delimitMate' " Auto-close
Plugin 'alvan/vim-closetag' " Close HTML tags
Plugin 'w0rp/ale' " Async Lint Engine
Plugin 'Yggdroot/indentLine' " Indentation level display

call vundle#end()
filetype plugin indent on

" Plugin Configs
" nerdtree
" Start nerdtree
autocmd vimenter * NERDTree
" show hidden
let NERDTreeShowHidden=1
" close if nerdtree is last
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
" select editor window
autocmd VimEnter * wincmd w

" ale
let g:ale_sign_column_always = 1
let g:airline#extensions#ale#enabled = 1

" ale linters
"let g:ale_fixers = {
"\   'javascript': ['eslint'],
"\   'python': ['flake8'],
"\}
"let g:ale_fix_on_save = 0

set list
set listchars=tab:┊\

set relativenumber
set autoindent
set nu
set ruler
set tabstop=8 softtabstop=0 expandtab shiftwidth=4 smarttab
set hidden
"set hlsearch
autocmd FileType python set omnifunc=pythoncomplete#Complete
autocmd FileType javascript set omnifunc=javascriptcomplete#CompleteJS
autocmd FileType html set omnifunc=htmlcomplete#CompleteTags
autocmd FileType css set omnifunc=csscomplete#CompleteCSS

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
highlight Over100 ctermbg=208 ctermfg=White guibg=#aa0000
highlight Over120 ctermbg=88 ctermfg=White guibg=#592929
call matchadd("Over80", '\%80v.', -1)
call matchadd("Over100", '\%100v.', -1)
call matchadd("Over120", '\%120v.', -1)

" Test line ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||oOo||
" ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||oOo|||||||||||
" ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||oOo|||||||||||


" Hilight wrong indentation
highlight TrailingWhitespace ctermbg=88 ctermfg=White guibg=red
highlight ExtraWhitespace ctermbg=226 ctermfg=White guibg=red
highlight Tabs ctermbg=235 ctermfg=White guibg=red
" Trailing whitespace and spaces before a tab
call matchadd("TrailingWhitespace", '\s\+$', -1)
call matchadd("ExtraWhitespace", ' \+\ze\t', -1)
" Highlight tab
call matchadd("Tabs", '\t', -1)

" Test line             ||||| 
 	" 	nnq  
    " as
        " a

