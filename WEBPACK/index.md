# [`Webpack`](../index.md)

- [`Импорт картинок в html`](<./Импорт в html.md>)
- [`Импорт картинок в js`](<./Импорт в js.md>)
- [`gh-pages`](./gh-pages.md)

## [Установка](#webpack)

```bash
npm init -y
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
npm i -D @babel/core @babel/preset-env babel-loader css-loader mini-css-extract-plugin
npm i -D sass sass-loader postcss postcss-loader postcss-preset-env
```

## [Установка webpack](#webpack)

Перед началом установки нужно проверить наличие `node.js` и `npm`.

- `npm init -y` инициализация npm
- `npm i webpack -D` webpack
- `npm i webpack-cli -D` интерфейс командной строки
- `npm i webpack-dev-server -D` установка локального сервера

## [Установка plugins and loaders](#webpack)

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

## [Настройка](#webpack)

- [`babel.config.json`](./babel.config.json.md) файл конфигурации babel
- [`package.json`](./package.json.md) файл конфигурации npm
- [`postcssrc.json`](./postcssrc.json.md) файл конфигурации postcss
- [`webpack.config.mjs`](./webpack.config.mjs.md) файл конфигурации webpack
