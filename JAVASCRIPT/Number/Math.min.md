# [`Math.min()`](../index.md)

Возвращает наименьшее из переданных чисел.

## Синтаксис

```js
Math.min(number, number, number);
```

### `number | string`

Числа через запятую. Строка будет преобразована в число.

## Возвращает

### `number`

Число - наименьшее из переданных.

```js
const array = [1, 2, 3, 4, 5];
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.min(...array)); // 1
```
