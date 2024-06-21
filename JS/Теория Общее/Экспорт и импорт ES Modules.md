# Экспорт и импорт ES Modules

- `from 'sass'` ищет установленную библиотеку в node_modules.
- `from './sass'` ищет установленную библиотеку в наших файлах.

## По умолчанию

```js
// Экспорт по умолчанию
export default function renderItems() {}

// Импорт по умолчанию
import renderItems from './render-items.js';
```

## Именованный

```js
// Экспорт одного файла (пишем export рядом с названием)
export function renderItems() {}

// Экспорт одного файла (пишем export внизу файла)
export { renderItems };

// Импорт одного файла
import { str } from './lib.js';

// Импорт нескольких файлов
import { str, myFunc } from './script-01.js';
```

## С переименованием

```js
// Экспорт с переименованием
export { arrSquared as sq };

// Импорт с переименованием
import { array as arr, arrSquared as sq } from './data.js';
```

## Все файлы

```js
// Импорт всех файлов
import * as data from './data.js';
```
