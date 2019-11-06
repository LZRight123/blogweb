# blogweb 一个使用vue的webApp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# git plugin

The git plugin provides many [aliases](#aliases) and a few useful [functions](#functions).

To use it, add `git` to the plugins array in your zshrc file:

```zsh
plugins=(... git)
```

## Aliases

| Alias                | Command                                                                                                                       |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------|
| g                    | git                                                                                                                           |
| ga                   | git add                                                                                                                       |
| gaa                  | git add --all                                                                                                                 |
| gapa                 | git add --patch                                                                                                               |
| gau                  | git add --update                                                                                                              |
| gav                  | git add --verbose                                                                                                             |
| gap                  | git apply                                                                                                                     |
| gb                   | git branch                                                                                                                    |
| gba                  | git branch -a                                                                                                                 |
| gbd                  | git branch -d                                                                                                                 |
| gbda                 | git branch --no-color --merged \| command grep -vE "^(\+|\*\|\s*(master\|develop\|dev)\s*$)" \| command xargs -n 1 git branch -d |
| gbD                  | git branch -D                                                                                                                 |
| gbl                  | git blame -b -w                                                                                                               |
| gbnm                 | git branch --no-merged                                                                                                        |
| gbr                  | git branch --remote                                                                                                           |
| gbs                  | git bisect                                                                                                                    |
| gbsb                 | git bisect bad                                                                                                                |
| gbsg                 | git bisect good                                                                                                               |
| gbsr                 | git bisect reset                                                                                                              |
| gbss                 | git bisect start                                                                                                              |
| gc                   | git commit -v                                                                                                                 |
| gc!                  | git commit -v --amend                                                                                                         |
| gcn!                 | git commit -v --no-edit --amend                                                                                               |
| gca                  | git commit -v -a                                                                                                              |
| gca!                 | git commit -v -a --amend                                                                                                      |
| gcan!                | git commit -v -a --no-edit --amend                                                                                            |
| gcans!               | git commit -v -a -s --no-edit --amend                                                                                         |
| gcam                 | git commit -a -m                                                                                                              |
| gcsm                 | git commit -s -m                                                                                                              |
| gcb                  | git checkout -b                                                                                                               |
| gcf                  | git config --list                                                                                                             |
| gcl                  | git clone --recurse-submodules                                                                                                |
| gclean               | git clean -id                                                                                                                 |
| gpristine            | git reset --hard && git clean -dfx                                                                                            |
| gcm                  | git checkout master                                                                                                           |
| gcd                  | git checkout develop                                                                                                          |
| gcmsg                | git commit -m                                                                                                                 |
| gco                  | git checkout                                                                                                                  |
| gcount               | git shortlog -sn                                                                                                              |
| gcp                  | git cherry-pick                                                                                                               |
| gcpa                 | git cherry-pick --abort                                                                                                       |
| gcpc                 | git cherry-pick --continue                                                                                                    |
| gcs                  | git commit -S                                                                                                                 |
| gd                   | git diff                                                                                                                      |
| gdca                 | git diff --cached                                                                                                             |
| gdcw                 | git diff --cached --word-diff                                                                                                 |
| gdct                 | git describe --tags $(git rev-list --tags --max-count=1)                                                                      |
| gds                  | git diff --staged                                                                                                             |
| gdt                  | git diff-tree --no-commit-id --name-only -r                                                                                   |
| gdv                  | git diff -w $@ \| view -                                                                                                      |
| gdw                  | git diff --word-diff                                                                                                          |
| gf                   | git fetch                                                                                                                     |
| gfa                  | git fetch --all --prune                                                                                                       |
| gfg                  | git ls-files \| grep                                                                                                          |
| gfo                  | git fetch origin                                                                                                              |
| gg                   | git gui citool                                                                                                                |
| gga                  | git gui citool --amend                                                                                                        |
| ggf                  | git push --force origin $(current_branch)                                                                                     |
| ggfl                 | git push --force-with-lease origin $(current_branch)                                                                          |
| ggl                  | git pull origin $(current_branch)                                                                                             |
| ggp                  | git push origin $(current_branch)                                                                                             |
| ggpnp                | ggl && ggp                                                                                                                    |
| ggpull               | git pull origin "$(git_current_branch)"                                                                                       |
| ggpur                | ggu                                                                                                                           |
| ggpush               | git push origin "$(git_current_branch)"                                                                                       |
| ggsup                | git branch --set-upstream-to=origin/$(git_current_branch)                                                                     |
| ggu                  | git pull --rebase origin $(current_branch)                                                                                    |
| gpsup                | git push --set-upstream origin $(git_current_branch)                                                                          |
| ghh                  | git help                                                                                                                      |
| gignore              | git update-index --assume-unchanged                                                                                           |
| gignored             | git ls-files -v \| grep "^[[:lower:]]"                                                                                        |
| git-svn-dcommit-push | git svn dcommit && git push github master:svntrunk                                                                            |
| gk                   | gitk --all --branches                                                                                                         |
| gke                  | gitk --all $(git log -g --pretty=%h)                                                                                          |
| gl                   | git pull                                                                                                                      |
| glg                  | git log --stat                                                                                                                |
| glgp                 | git log --stat -p                                                                                                             |
| glgg                 | git log --graph                                                                                                               |
| glgga                | git log --graph --decorate --all                                                                                              |
| glgm                 | git log --graph --max-count=10                                                                                                |
| glo                  | git log --oneline --decorate                                                                                                  |
| glol                 | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'                        |
| glols                | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --stat                 |
| glod                 | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'                        |
| glods                | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' --date=short           |
| glola                | git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --all                  |
| glog                 | git log --oneline --decorate --graph                                                                                          |
| gloga                | git log --oneline --decorate --graph --all                                                                                    |
| glp                  | `_git_log_prettily`                                                                                                           |
| gm                   | git merge                                                                                                                     |
| gmom                 | git merge origin/master                                                                                                       |
| gmt                  | git mergetool --no-prompt                                                                                                     |
| gmtvim               | git mergetool --no-prompt --tool=vimdiff                                                                                      |
| gmum                 | git merge upstream/master                                                                                                     |
| gma                  | git merge --abort                                                                                                             |
| gp                   | git push                                                                                                                      |
| gpd                  | git push --dry-run                                                                                                            |
| gpf                  | git push --force-with-lease                                                                                                   |
| gpf!                 | git push --force                                                                                                              |
| gpoat                | git push origin --all && git push origin --tags                                                                               |
| gpu                  | git push upstream                                                                                                             |
| gpv                  | git push -v                                                                                                                   |
| gr                   | git remote                                                                                                                    |
| gra                  | git remote add                                                                                                                |
| grb                  | git rebase                                                                                                                    |
| grba                 | git rebase --abort                                                                                                            |
| grbc                 | git rebase --continue                                                                                                         |
| grbd                 | git rebase develop                                                                                                            |
| grbi                 | git rebase -i                                                                                                                 |
| grbm                 | git rebase master                                                                                                             |
| grbs                 | git rebase --skip                                                                                                             |
| grev                 | git revert                                                                                                                   |
| grh                  | git reset                                                                                                                     |
| grhh                 | git reset --hard                                                                                                              |
| groh                 | git reset origin/$(git_current_branch) --hard                                                                                 |
| grm                  | git rm                                                                                                                        |
| grmc                 | git rm --cached                                                                                                               |
| grmv                 | git remote rename                                                                                                             |
| grrm                 | git remote remove                                                                                                             |
| grs                  | git restore                                                                                                                   |
| grset                | git remote set-url                                                                                                            |
| grss                 | git restore --source                                                                                                          |
| grt                  | cd "$(git rev-parse --show-toplevel \|\| echo .)"                                                                             |
| gru                  | git reset --                                                                                                                  |
| grup                 | git remote update                                                                                                             |
| grv                  | git remote -v                                                                                                                 |
| gsb                  | git status -sb                                                                                                                |
| gsd                  | git svn dcommit                                                                                                               |
| gsh                  | git show                                                                                                                      |
| gsi                  | git submodule init                                                                                                            |
| gsps                 | git show --pretty=short --show-signature                                                                                      |
| gsr                  | git svn rebase                                                                                                                |
| gss                  | git status -s                                                                                                                 |
| gst                  | git status                                                                                                                    |
| gsta                 | git stash push                                                                                                                |
| gsta                 | git stash save                                                                                                                |
| gstaa                | git stash apply                                                                                                               |
| gstc                 | git stash clear                                                                                                               |
| gstd                 | git stash drop                                                                                                                |
| gstl                 | git stash list                                                                                                                |
| gstp                 | git stash pop                                                                                                                 |
| gsts                 | git stash show --text                                                                                                         |
| gstall               | git stash --all                                                                                                               |
| gsu                  | git submodule update                                                                                                          |
| gsw                  | git switch                                                                                                                    |
| gswc                 | git switch -c                                                                                                                 |
| gts                  | git tag -s                                                                                                                    |
| gtv                  | git tag \| sort -V                                                                                                            |
| gtl                  | gtl(){ git tag --sort=-v:refname -n -l ${1}* }; noglob gtl                                                                    |
| gunignore            | git update-index --no-assume-unchanged                                                                                        |
| gunwip               | git log -n 1 \| grep -q -c "\-\-wip\-\-" && git reset HEAD~1                                                                  |
| gup                  | git pull --rebase                                                                                                             |
| gupv                 | git pull --rebase -v                                                                                                          |
| gupa                 | git pull --rebase --autostash                                                                                                 |
| gupav                | git pull --rebase --autostash -v                                                                                              |
| glum                 | git pull upstream master                                                                                                      |
| gwch                 | git whatchanged -p --abbrev-commit --pretty=medium                                                                            |
| gwip                 | git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign -m "--wip-- [skip ci]"        |

### Deprecated

These are aliases that have been removed, renamed, or otherwise modified in a way that may, or may not, receive further support.

| Alias  |                                Command                                             |                                             Modification                                            |
| :----- | :----------------------------------------------------------------------------------| --------------------------------------------------------------------------------------------------- |
| gap    | git add --patch                                                                    | new alias `gapa`                                                                                    |
| gcl    | git config --list                                                                  | new alias `gcf`                                                                                     |
| gdc    | git diff --cached                                                                  | new alias `gdca`                                                                                    |
| gdt    | git difftool                                                                       | no replacement                                                                                      |
| ggpull | git pull origin $(current_branch)                                                  | new alias `ggl` (`ggpull` still exists for now though)                                              |
| ggpur  | git pull --rebase origin $(current_branch)                                         | new alias `ggu` (`ggpur` still exists for now though)                                               |
| ggpush | git push origin $(current_branch)                                                  | new alias `ggp` (`ggpush` still exists for now though)                                              |
| gk     | gitk --all --branches                                                              | now aliased to `gitk --all --branches`                                                              |
| glg    | git log --stat --max-count = 10                                                    | now aliased to `git log --stat --color`                                                             |
| glgg   | git log --graph --max-count = 10                                                   | now aliased to `git log --graph --color`                                                            |
| gwc    | git whatchanged -p --abbrev-commit --pretty = medium                               | new alias `gwch`                                                                                    |

## Functions

### Current

| Command                | Description                             |
|:-----------------------|:----------------------------------------|
| current_branch         | Return the name of the current branch   |
| git_current_user_name  | Returns the `user.name` config value    |
| git_current_user_email | Returns the `user.email` config value   |

### Work in Progress (WIP)

These features allow to pause a branch development and switch to another one (_"Work in Progress"_,  or wip). When you want to go back to work, just unwip it.

| Command          | Description                                     |
|:-----------------|:------------------------------------------------|
| work_in_progress | Echoes a warning if the current branch is a wip |
| gwip             | Commit wip branch                               |
| gunwip           | Uncommit wip branch                             |

### Deprecated

| Command                | Description                             | Reason                                                          |
|:-----------------------|:----------------------------------------|:----------------------------------------------------------------|
| current_repository     | Return the names of the current remotes | Didn't work properly. Use `git remote -v` instead (`grv` alias) |


```sh
#
# Functions
#

# The name of the current branch
# Back-compatibility wrapper for when this function was defined here in
# the plugin, before being pulled in to core lib/git.zsh as git_current_branch()
# to fix the core -> git plugin dependency.
function current_branch() {
  git_current_branch
}

# Pretty log messages
function _git_log_prettily(){
  if ! [ -z $1 ]; then
    git log --pretty=$1
  fi
}
compdef _git _git_log_prettily=git-log

# Warn if the current branch is a WIP
function work_in_progress() {
  if $(git log -n 1 2>/dev/null | grep -q -c "\-\-wip\-\-"); then
    echo "WIP!!"
  fi
}

#
# Aliases
# (sorted alphabetically)
#

alias g='git'

alias ga='git add'
alias gaa='git add --all'
alias gapa='git add --patch'
alias gau='git add --update'
alias gav='git add --verbose'
alias gap='git apply'

alias gb='git branch'
alias gba='git branch -a'
alias gbd='git branch -d'
alias gbda='git branch --no-color --merged | command grep -vE "^(\+|\*|\s*(master|develop|dev)\s*$)" | command xargs -n 1 git branch -d'
alias gbD='git branch -D'
alias gbl='git blame -b -w'
alias gbnm='git branch --no-merged'
alias gbr='git branch --remote'
alias gbs='git bisect'
alias gbsb='git bisect bad'
alias gbsg='git bisect good'
alias gbsr='git bisect reset'
alias gbss='git bisect start'

alias gc='git commit -v'
alias gc!='git commit -v --amend'
alias gcn!='git commit -v --no-edit --amend'
alias gca='git commit -v -a'
alias gca!='git commit -v -a --amend'
alias gcan!='git commit -v -a --no-edit --amend'
alias gcans!='git commit -v -a -s --no-edit --amend'
alias gcam='git commit -a -m'
alias gcsm='git commit -s -m'
alias gcb='git checkout -b'
alias gcf='git config --list'
alias gcl='git clone --recurse-submodules'
alias gclean='git clean -id'
alias gpristine='git reset --hard && git clean -dfx'
alias gcm='git checkout master'
alias gcd='git checkout develop'
alias gcmsg='git commit -m'
alias gco='git checkout'
alias gcount='git shortlog -sn'
alias gcp='git cherry-pick'
alias gcpa='git cherry-pick --abort'
alias gcpc='git cherry-pick --continue'
alias gcs='git commit -S'

alias gd='git diff'
alias gdca='git diff --cached'
alias gdcw='git diff --cached --word-diff'
alias gdct='git describe --tags $(git rev-list --tags --max-count=1)'
alias gds='git diff --staged'
alias gdt='git diff-tree --no-commit-id --name-only -r'
alias gdw='git diff --word-diff'

function gdv() { git diff -w "$@" | view - }
compdef _git gdv=git-diff

alias gf='git fetch'
alias gfa='git fetch --all --prune'
alias gfo='git fetch origin'

alias gfg='git ls-files | grep'

alias gg='git gui citool'
alias gga='git gui citool --amend'

function ggf() {
  [[ "$#" != 1 ]] && local b="$(git_current_branch)"
  git push --force origin "${b:=$1}"
}
compdef _git ggf=git-checkout
function ggfl() {
  [[ "$#" != 1 ]] && local b="$(git_current_branch)"
  git push --force-with-lease origin "${b:=$1}"
}
compdef _git ggfl=git-checkout

function ggl() {
  if [[ "$#" != 0 ]] && [[ "$#" != 1 ]]; then
    git pull origin "${*}"
  else
    [[ "$#" == 0 ]] && local b="$(git_current_branch)"
    git pull origin "${b:=$1}"
  fi
}
compdef _git ggl=git-checkout

function ggp() {
  if [[ "$#" != 0 ]] && [[ "$#" != 1 ]]; then
    git push origin "${*}"
  else
    [[ "$#" == 0 ]] && local b="$(git_current_branch)"
    git push origin "${b:=$1}"
  fi
}
compdef _git ggp=git-checkout

function ggpnp() {
  if [[ "$#" == 0 ]]; then
    ggl && ggp
  else
    ggl "${*}" && ggp "${*}"
  fi
}
compdef _git ggpnp=git-checkout

function ggu() {
  [[ "$#" != 1 ]] && local b="$(git_current_branch)"
  git pull --rebase origin "${b:=$1}"
}
compdef _git ggu=git-checkout

alias ggpur='ggu'
alias ggpull='git pull origin "$(git_current_branch)"'
alias ggpush='git push origin "$(git_current_branch)"'

alias ggsup='git branch --set-upstream-to=origin/$(git_current_branch)'
alias gpsup='git push --set-upstream origin $(git_current_branch)'

alias ghh='git help'

alias gignore='git update-index --assume-unchanged'
alias gignored='git ls-files -v | grep "^[[:lower:]]"'
alias git-svn-dcommit-push='git svn dcommit && git push github master:svntrunk'

alias gk='\gitk --all --branches'
alias gke='\gitk --all $(git log -g --pretty=%h)'

alias gl='git pull'
alias glg='git log --stat'
alias glgp='git log --stat -p'
alias glgg='git log --graph'
alias glgga='git log --graph --decorate --all'
alias glgm='git log --graph --max-count=10'
alias glo='git log --oneline --decorate'
alias glol="git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'"
alias glols="git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --stat"
alias glod="git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'"
alias glods="git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset' --date=short"
alias glola="git log --graph --pretty='%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --all"
alias glog='git log --oneline --decorate --graph'
alias gloga='git log --oneline --decorate --graph --all'
alias glp="_git_log_prettily"

alias gm='git merge'
alias gmom='git merge origin/master'
alias gmt='git mergetool --no-prompt'
alias gmtvim='git mergetool --no-prompt --tool=vimdiff'
alias gmum='git merge upstream/master'
alias gma='git merge --abort'

alias gp='git push'
alias gpd='git push --dry-run'
alias gpf='git push --force-with-lease'
alias gpf!='git push --force'
alias gpoat='git push origin --all && git push origin --tags'
alias gpu='git push upstream'
alias gpv='git push -v'

alias gr='git remote'
alias gra='git remote add'
alias grb='git rebase'
alias grba='git rebase --abort'
alias grbc='git rebase --continue'
alias grbd='git rebase develop'
alias grbi='git rebase -i'
alias grbm='git rebase master'
alias grbs='git rebase --skip'
alias grev='git revert'
alias grh='git reset'
alias grhh='git reset --hard'
alias groh='git reset origin/$(git_current_branch) --hard'
alias grm='git rm'
alias grmc='git rm --cached'
alias grmv='git remote rename'
alias grrm='git remote remove'
alias grs='git restore'
alias grset='git remote set-url'
alias grss='git restore --source'
alias grt='cd "$(git rev-parse --show-toplevel || echo .)"'
alias gru='git reset --'
alias grup='git remote update'
alias grv='git remote -v'

alias gsb='git status -sb'
alias gsd='git svn dcommit'
alias gsh='git show'
alias gsi='git submodule init'
alias gsps='git show --pretty=short --show-signature'
alias gsr='git svn rebase'
alias gss='git status -s'
alias gst='git status'

# use the default stash push on git 2.13 and newer
autoload -Uz is-at-least
is-at-least 2.13 "$(git --version 2>/dev/null | awk '{print $3}')" \
  && alias gsta='git stash push' \
  || alias gsta='git stash save'

alias gstaa='git stash apply'
alias gstc='git stash clear'
alias gstd='git stash drop'
alias gstl='git stash list'
alias gstp='git stash pop'
alias gsts='git stash show --text'
alias gstall='git stash --all'
alias gsu='git submodule update'
alias gsw='git switch'
alias gswc='git switch -c'

alias gts='git tag -s'
alias gtv='git tag | sort -V'
alias gtl='gtl(){ git tag --sort=-v:refname -n -l ${1}* }; noglob gtl'

alias gunignore='git update-index --no-assume-unchanged'
alias gunwip='git log -n 1 | grep -q -c "\-\-wip\-\-" && git reset HEAD~1'
alias gup='git pull --rebase'
alias gupv='git pull --rebase -v'
alias gupa='git pull --rebase --autostash'
alias gupav='git pull --rebase --autostash -v'
alias glum='git pull upstream master'

alias gwch='git whatchanged -p --abbrev-commit --pretty=medium'
alias gwip='git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign -m "--wip-- [skip ci]"'

```