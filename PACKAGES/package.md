# [`Описание файла package.json`](./index.md)

```json
{
  // название проекта
  "name": "my project",

  // версия
  "version": "1.0.0",

  // описание
  "description": "my project",

  // точка входа
  "main": "index.js",

  // скрипты
  "scripts": {
    "start": "node index.js",
    "clear": "rm -rf './build' && mkdir build",
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development",
    "predeploy": "npm run build", // скрипты с pre будут выполнятся перед основным
    "deploy": "gh-pages -d dist"
  },
  // автор
  "author": "Oleg Kuzmin",

  // лицензия
  "license": "",

  // ключевые слова
  "keywords": [],

  // пакеты dev
  "devDependencies": {
    "sass": "1.26.3", // конкретная версия
    "sass": "^1.26.3", // разрешены только минорные и патч обновления
    "sass": "~1.26.3", // разрешены только патч обновления
    "sass": "*" // не важно какая версия
  },

  // пакеты prod
  "dependencies": {},

  // список поддерживаемых браузеров
  // используется в ряде плагинов прямо отсюда
  "browserslist": ["last 15 versions", "> 1%", "ie 8", "ie 7"]
}
```
