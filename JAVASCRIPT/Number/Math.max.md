# [`Math.max()`](../index.md)

Возвращает наибольшее из переданных чисел.

## Синтаксис

```js
Math.max(number, number, number);
```

### `number | string`

Числа через запятую. Строка будет преобразована в число.

## Возвращает

### `number`

Число - наибольшее из переданных.

## Пример

```js
const array = [1, 2, 3, 4, 5];
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.max(...array)); // 5
```
