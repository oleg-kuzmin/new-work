# [`yarn add`](../index.md)

Также возможно не вводить команды в терминале, а напрямую добавить строку в файл package.json и запустить `yarn` или `yarn install`. Пакеты также будут добавлены.

```bash
# установит пакет 'scss' локально как prod-зависимость
yarn add scss

# установит пакет 'scss' локально как dev-зависимость
yarn add scss -dev

# установит пакет 'scss' глобально
yarn global add scss
```
