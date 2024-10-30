# [`Структура Git`](./index.md)

`HEAD` - означает что мы находимся на этом коммите.

## Working Directory (Рабочая директория)

- Untracker (Неотслеживаемые файлы)
- Modified (Измененные файлы)

```bash
# Добавит в Staging Area все неотслеживаемые и измененые файлы
git add .

# Удалит каталог из Staging Area
git rm --cached имя_папки
```

## Staging Area (Состояние)

```bash
# Добавит в Local Git Repository
git commit -m "text"
```

## Local Git Repository (Локальный репозиторий)

```bash
# Добавит в Remove Git Repository
git push
```

## Remote Git Repository (Удаленный репозиторий)
