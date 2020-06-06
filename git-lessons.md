# Random Lessons

1. [ Mirror Repos to GitHub ](#mirror-repos-to-github)
2. [ Adding Git Alias ](#adding-git-alias)

<a name="mirror-repos-to-github"></a>

### **_Mirror Repos to GitHub_**

`git push --no-verify --mirror https://github.com/lizkovalchuk/whatever-your-github repo-is.git`

- The command above would be excuted on the repo that you want copied to another repo.

<a name="adding-git-alias"></a>

### **_Adding Git Alias_**

https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases


```
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
```

- The characters after `alias` is what your alias will be. So in the first example, `co` is for checkout.
- When you run your alias, the `git` keyword is implied.
- If you want to add an alias that is comprised on multiple words, you just need to add the full command in quotations.

```
$ git config --global alias.unstage 'reset HEAD --'
```

- Lastly, you can always use vim to see your alias with command:

```
vim ~/.gitconfig
```