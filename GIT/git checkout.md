# [`git checkout`](./index.md)

Сменить ветку/переключиться на коммит

## Синтаксис

```bash
git checkout <name>     # переключить на другую ветку
git checkout main       # переключить на главную ветку (использовать если HEAD detached at)
git checkout -b <name>  # создать ветки и переключение не нее
git checkout .          # откатить назад, отменит изменения в stage
git checkout <file>     # откатить назад конкретный файл, отменит изменения в stage
```
