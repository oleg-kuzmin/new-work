# Webpack

- [`Импорт в html`](<./Импорт в html.md>)
- [`Импорт в js`](<./Импорт в js.md>)

## Установка

### `webpack`

Перед началом установки нужно проверить наличие `node.js` и `npm`.

- `npm init -y` инициализация npm
- `npm i webpack -D` webpack
- `npm i webpack-cli -D` интерфейс командной строки
- `npm i webpack-dev-server -D` установка локального сервера

### `plugins and loaders`

- `npm i html-webpack-plugin -D` плагин для обработки html
- `npm i @babel/core -D` ядро babel
- `npm i @babel/preset-env -D` набор правил для babel
- `npm i babel-loader -D` лоадер для обработки js
- `npm i css-loader -D` лоадер для обработки css
- `npm i mini-css-extract-plugin -D` лоадер для объединения css в один файл
- `npm i sass -D` ядро sass
- `npm i sass-loader -D` лоадер для обработки scss
- `npm i postcss -D` ядро postcss
- `npm i postcss-loader -D` лоадер для обработки
- `npm i postcss-preset-env -D` набор правил для postcss

## Настройка

- [`babel.config.json`](./babel.config.json.md) файл конфигурации babel
- [`gh-pages`](./gh-pages.md) размещение сайта на gh-pages
- [`package.json`](./package.json.md) файл конфигурации npm
- [`postcssrc.json`](./postcssrc.json.md) файл конфигурации postcss
- [`webpack.config.mjs`](./webpack.config.mjs.md) файл конфигурации webpack
