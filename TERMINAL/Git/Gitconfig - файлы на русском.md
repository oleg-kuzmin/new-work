# [`Gitconfig - файлы на русском`](../index.md)

Для того, чтобы добавлять файлы на русском языке нужно изменить файл `gitconfig` по адресу: `C:\Program Files\Git\etc`.

Секция `[core]`, `quotepath = false`.

```bash
# gitconfig

[diff "astextplain"]
	textconv = astextplain
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[http]
	sslBackend = openssl
	sslCAInfo = C:/Program Files/Git/mingw64/etc/ssl/certs/ca-bundle.crt
[core]
	autocrlf = true
	fscache = true
	symlinks = false
	quotepath = false
[pull]
	rebase = false
[credential]
	helper = manager
[credential "https://dev.azure.com"]
	useHttpPath = true
[init]
	defaultBranch = main
```
