# [`git diff`](./index.md)

Посмотреть изменения коммитов.

## Синтаксис

```bash
git diff
# показывает изменения только в рабочей зоне
# когда файлы ещё не добавлены в stage и не опубликованы

git diff --staged        # посмотреть изменения, когда файлы добавлены в stage.
git diff a9928ab 11bada1 # сравнить изменения двух конкретных коммитов.
git diff index.html      # посмотреть изменения в index.html
```