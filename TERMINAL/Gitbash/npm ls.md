# `npm ls`

Команда `npm ls` используется для составления списка установленных пакетов. В отличие от `npm list` с простым списком показывает древовидное представление всех установленных пакетов вместе с их зависимостями.

```bash
# Флаг '-g' указывает, что вы хотите отобразить список глобально установленных пакетов.
# Параметр '–depth=0' задает глубину дерева зависимостей для отображения.
# Значение '0' гарантирует, что в списке будут указаны только пакеты верхнего уровня без их зависимостей.
npm ls -g --depth=0

# опция '–depth=1' ограничивает вывод только пакетами верхнего уровня и их прямыми зависимостями.
npm ls -g --depth=1
```