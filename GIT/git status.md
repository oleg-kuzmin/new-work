# [`git status`](./index.md)

Выводит информацию обо всех изменениях, внесенных в дерево директорий проекта по сравнению с последним коммитом рабочей ветки.

Отдельно выводятся внесенные в индекс и неиндексированные файлы, файлы с неразрешенными конфликтами, файлы, игнорируемые git.

`Untracked files` - неотслеживаемые (неиндексированные) файлы, Git их видит, но не сохраняет.

## Синтаксис

```bash
git status      # Выводит полную информацию
git status -sb  # Выводит краткую версию информации
```