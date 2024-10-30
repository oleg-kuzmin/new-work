# [`git checkout`](./index.md)

```bash
# переключение на главную ветку (использовать если HEAD detached at)
git checkout main

# Переключение на другую ветку.
git checkout имя_ветки

# Создание ветки и переключение не нее.
git checkout -b имя_ветки

# Откат назад. Отменит все изменения в stage.
git checkout .

# Откат назад в конкретном файле. Отменит все изменения в stage.
git checkout имя_файла
```
