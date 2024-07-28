# [`Number.isInteger()`](../index.md)

Метод `Number.isInteger` принимает число как аргумент и проверяет, целое оно или дробное.

## Синтаксис

```js
Number.isInteger(number);
```

### `number`

Число.

## Возвращает

### `boolean`

- `true` - если аргумент целое число
- `false` - если Нет

## Пример

```js
const eightAndAHalf = 8.5;
Number.isInteger(eightAndAHalf); // false
Number.isInteger(Math.floor(eightAndAHalf)); // true
```
