# [`string.match()`](../index.md)

Метод `match()` используется для поиска всех совпадений регулярного выражения в заданной строке.

## Синтаксис

```js
string.match(regexp);
```

### `string`

Строка - в которой будет произведен поиск совпадения.

### `regexp`

Регулярное выражение - для поиска совпадения.

## Возвращает

### `array`

Метод возвращает массив, содержащий все найденные совпадения.

## Пример

```js
const string = 'The quick brown fox jumps over the lazy dog.';
const regexp = /the/gi;
string.match(regexp); // ["the", "the"]
```
