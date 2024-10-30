# [`gulp (Использование)`](./index.md)

## Настройка

```js
// gulpfile.js
const { src, dest, series } = require('gulp'); // импорт методов gulp
const pug = require('gulp-pug'); // импорт библиотеки gulp-pug

function compilePug(cb) {
  // src() - исходный файл
  // src('./src/index.pug') - обработает файл
  // src('./src/**/*.pug') - обработает файлы симметрично исходной структуре.
  // src(['./src/**/*.pug', '!./src/includes/**/*.pug'])
  // используем массив и второй аргумент со знаком ! для исключения

  // .pipe() - следующее действие

  // pug() - вызов библиотеки, { pretty: true } - объект опций
  // pretty: true - выводит в читаемом виде, а не в одну строку

  // dest() - куда положить итоговый файл

  // 1 Вариант
  src('./src/index.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('./dist'));
  cb(); // вызов callback, окончание задачи

  // 2 Вариант
  return src('./src/index.pug')
    .pipe(pug({ pretty: true }))
    .pipe(dest('./dist'));
}

function defaultTask(cb) {
  console.log('defaultTask is run'); // какая-то задача
  cb();
}

exports.default = defaultTask; // экспорт по умолчанию, запуск npm run gulp
exports.build = defaultTask; // экспорт по умолчанию, запуск npm run gulp build
```

```json
// package.json
{
  "scripts": {
    "gulp": "gulp"
  }
}
```

## Отслеживание изменений

```js
// gulpfile.js
const { watch } = require('gulp'); // импорт метода gulp

// Пример функции
exports.pug = function () {
  // './src/**/*.pug' - что отслеживать
  // { ignoreInitial: false } - запуск callback перед отслеживание
  // compilePug - callback функция
  watch('./src/**/*.pug', { ignoreInitial: false }, compilePug);
};
```
