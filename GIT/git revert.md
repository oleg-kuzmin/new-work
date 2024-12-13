# [`git revert`](./index.md)

Команда `git revert` не только отменяет коммиты слияния — она может откатить изменения, внесённые любым коммитом.

## Синтаксис

```bash
git revert 3f0d8da       # отменить изменения, внесенные коммитом
git revert -m 1 3f0d8da  # отменить изменения, внесенные коммитом в `main`
```

## Без опции `-m`

Опция `-m` чаще не нужна, потому что у обычных коммитов один родитель: не нужно указывать, какая из веток основная.

## С опцией `-m`

Указав для опции `-m` значение `1`, вы сохраните всё содержимое в `main` и отмените изменения, внесённые коммитом слияния ошибочной ветки с `main`.
