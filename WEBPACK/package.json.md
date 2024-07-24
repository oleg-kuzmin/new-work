# [`package.json`](./index.md)

```json
{
  "name": "projectName", // название проекта
  "version": "1.0.0", // версия
  "main": "index.js", // точка входа

  // скрипты
  "scripts": {
    "build": "rm -rf build && webpack --mode=production",
    "dev": "webpack serve --mode=development"
  },

  "keywords": [], // ключевые слова
  "author": "Oleg Kuzmin", // автор
  "license": "ISC", // лицензия
  "description": "", // описание

  // "1.26.3" конкретная версия
  // "^1.26.3" разрешены только минорные и патч обновления
  // "~1.26.3" разрешены только патч обновления
  // "*" любая версия

  // пакеты prodaction
  "dependencies": {},

  // пакеты development
  "devDependencies": {
    "@babel/core": "^7.24.7",
    "@babel/preset-env": "^7.24.7",
    "babel-loader": "^9.1.3",
    "css-loader": "^7.1.2",
    "html-webpack-plugin": "^5.6.0",
    "mini-css-extract-plugin": "^2.9.0",
    "postcss": "^8.4.38",
    "postcss-loader": "^8.1.1",
    "postcss-preset-env": "^9.5.14",
    "sass": "^1.77.6",
    "sass-loader": "^14.2.1",
    "webpack": "^5.92.1",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.4"
  },

  // список поддерживаемых браузеров
  "browserslist": ["last 2 versions", "> 1%"]
}
```
