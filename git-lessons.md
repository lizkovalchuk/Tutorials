# Git Lessons

1. [ Mirror Repos to GitHub ](#mirror-repos-to-github)
2. [ Adding Git Alias ](#adding-git-alias)
3. [ Adding Git Alias with a Parameter ](#adding-git-alias-with-a-parameter)

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
- If you want to add an alias that is comprised on multiple words, you just need to add the full command in quotations.

```
$ git config --global alias.unstage 'reset HEAD --'
```

- Lastly, you can always use vim to see your alias with command:

```
vim ~/.gitconfig
```

<a name="adding-git-alias-with-a-parameter"></a>

### **_Adding Git Alias with a Parameter_**

1. The full command of an alias that takes a parameter needs to be in quotations.
2. Writing an executable script requires creating a shell function, which is defined and called within the quotations.
3. The `$` indicates the parameter.
4. Define a default value for the parameter (not necessary)
5. The following example prints `git commit -m "a commit message"` when you enter `git ci 'a commit message`

```
[alias]
    ...
    ci = "!f() { git commit -m \"${1-undefined commit message}\"; }; f"
    ...
```