# [`yarn remove`](./index.md)

Не важно, где располагается информация о пакете - в секции dependencies или devDependencies, пакет удаляется из любой из этих секций.

Также возможно не вводить команды в терминале, а напрямую удалить строку из файла package.json и запустить `yarn` или `yarn install`. Пакеты также будут удалены.

```bash
# Удаление пакета.
yarn remove express

# Удаление пакета глобально.
yarn global remove express
```
