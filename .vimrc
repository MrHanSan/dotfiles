" Vundle setup
set nocompatible
filetype off

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
let g:vim_json_conceal=0

" 1 or 0 -> blinking block
" 2 -> solid block
" 3 -> blinking underscore
" Recent versions of xterm (282 or above) also support
" 5 -> blinking vertical bar
" 6 -> solid vertical bar

" change the cursor between Normal and Insert modes in Vim
let &t_SI = "\e[6 q"
let &t_EI = "\e[2 q"

" reset the cursor on start (for older versions of vim, usually not required)
augroup myCmds
au!
autocmd VimEnter * silent !echo -ne "\e[2 q"
augroup END

set ttimeout
set ttimeoutlen=1
set ttyfast

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
 	" 	test  
    "tst
        "tst

