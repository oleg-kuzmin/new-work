# [`git stash`](../index.md)

```bash
# Спрятать незакоммиченные изменения.
git stash

# Назвать спрятанные незакоммиченные изменения.
git stash save "Changed title in index.html"

# Показать все спрятанные изменения и в каких ветках они сделаны.
git stash list

# Очистить список всех спрятанных изменений.
git stash clear

# Вернуть только нужные изменения, n - номер в stash list.
git stash apply stash @{n}

# Вернуть последние спрятанные изменения в любой ветке.
git stash pop
```
