# `grep`

Поиск по содержимому.

## Синтаксис

```bash
# Синтаксис.
grep ключ(опционально) значение(опционально) шаблон директория
```

## Поиск в конкретном файле

```bash
# Ищет и выводит количество строчек после найденного (after).
grep -A 2 'schema.org' '../Documents/www/index.html'

# Ищет и выводит количество строчек до найденного (before).
grep -B 2 'schema.org' '../Documents/www/index.html'

# Ищет и выводит количество строчек и до и после найденного (center).
grep -C 2 'schema.org' '../Documents/www/index.html'

# Ищет и выводит количество строчек после найденного (after). Дополнительно нумерует строчки.
grep -A 2 -n 'schema.org' '../Documents/www/index.html'
```

## Поиск неизвестно где

```bash
# Рекурсивный поиск, начиная с родительской директории.
grep -R 'schema.org'

# Рекурсивный поиск, начиная с указанной директории.
grep -R 'schema.org' 'Documents'

# Рекурсивный поиск, начиная с указанной директории. Дополнительно нумерует строчки.
grep -Rn 'schema.org' 'Documents'

# Рекурсивный поиск аналогичено поиску по файлу.
grep -Rn -A 5 'schema.org' 'Documents'
grep -Rn -B 5 'schema.org' 'Documents'
grep -Rn -C 5 'schema.org' 'Documents'
```
