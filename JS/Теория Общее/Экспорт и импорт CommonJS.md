# [`Экспорт и импорт CommonJS`](../index.md)

Можно использовать новый синтаксис ES Modules, если файл будет с расширением `.mjs`.

- `from 'sass'` ищет установленную библиотеку в node_modules.
- `from './sass'` ищет установленную библиотеку в наших файлах.

## По умолчанию

```js
// Экспорт по умолчанию
module.exports = {
  y: 1,
};

// Экспорт по умолчанию
exports.default = defaultTask;

// Импорт по умолчанию
const y = require('./example.js');
```

## Именованный

```js
// Именованный импорт
const { y } = require('./example.js');

// Именованный экспорт
exports.y = 12;
```

## Обертка

Каждый модуль автоматически оборачивается функцией:

```js
(function (exports, require, module, __filenam, dirname) {});
```
