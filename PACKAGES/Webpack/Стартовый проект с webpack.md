# Стартовый проект с webpack

### Проверить версии node.js и npm

### +`npm init` (Инициализация npm)

### +`npm i webpack -D` (Установка сборщика)

### +`npm i webpack-cli -D` (Установка интерфейса командной строки)

### +`npm i webpack-dev-server -D` (Установка локального сервера)

### `npm i path -D` (Установка плагина, который превращает относительный путь в абсолютный)

### +`npm i html-webpack-plugin -D` (Установка плагина для работы с html)

### `npm i clean-webpack-plugin -D` (Установка плагина для очистки dist)

### +`npm i mini-css-extract-plugin -D` (Установка плагина для объединения css)

### +`npm i css-loader -D` (Установка плагина для работы с css)

### `npm i postcss-loader -D` (Установка плагина для модификации css)

### +`npm i sass -D` (Установка поддержки sass)

### +`npm i sass-loader -D` (Установка плагина для работы c scss, sass)

### `npm i autoprefixer -D` (Установка плагина научит PostCSS добавлять вендорные префиксы)

### `npm i cssnano -D` (Установка плагина научит PostCSS минификации css-кода)

### Настроить `webpack.config.js`

### Настроить `postcss.config.js`

### +`npm i @babel/core -D` (Установка Babel)

### +`npm i @babel/preset-env -D` (Установка набора правил Babel, по которым переводить код)

### `npm i core-js` (Установка библиотеки полифилов)

### Настроить `babel.config.js`

### `npm i gh-pages -D` (Установка gh-pages)

Если во время скрипта `gh-pages` появилась ошибка ввести `npx gh-pages-clean`.

Возможно необходимо указание `homepage` в `package.json` для корректной работы.

```json
{
  "homepage": "https://oleg-kuzmin.github.io/project",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
