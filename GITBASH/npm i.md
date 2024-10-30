# [`npm i`](./index.md)

Для добавления пакетов можно не вводить команды в терминале, а напрямую добавить строки в файл package.json и запустить `npm i` или `npm install`. Пакеты также будут добавлены.

```bash
# Установит все зависимости в соответствии с package.json.
npm i
npm install

# Установит пакет 'sass' локально как dev-зависимость.
npm i sass --save-dev
npm i sass -D

# Установит пакет 'sass' локально как prod-зависимость.
npm i sass

# Установит пакет 'sass' глобально.
npm i sass --global
npm i sass -g
```
