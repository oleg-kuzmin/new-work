# Описание файла `package.json`

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
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development",
    "deploy": "gh-pages -d dist",
    "predeploy": "npm run build"
  },
  // автор
  "author": "Oleg Kuzmin",

  // лицензия
  "license": "",

  // ключевые слова
  "keywords": [],

  // пакеты dev
  "devDependencies": {},

  // пакеты prod
  "dependencies": {}
}
```