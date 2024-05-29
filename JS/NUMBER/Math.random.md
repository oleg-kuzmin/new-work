# `Math.random()`

Если ваша задача не подразумевает работу с криптографией (например, вычисление кодов аутентичности) — вам будет достаточно псевдослучайных чисел. Но если такая потребность всё же есть — используйте `crypto.getRandomValues()` вместо `Math.random()`.

# Синтаксис

```js
Math.random();
```

## Возвращает

### `number`

Число в диапазоне от `0` до `0.9999999999999999`.

## Пример

_Случайное число между 0 и 9.9999999999999999_

```js
randomNumber = Math.random() * 10;
```

_Случайное число между 0 и 9_

```js
randomNumber = Math.floor(Math.random() * 10);
```

_Случайный элемент массива_

```js
Math.floor(Math.random() * array.length);
```

_Случайное целое число в диапазоне, не включая минимальное и максимальное_

```js
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(10, 20); // 12
```

_Случайное целое число в диапазоне, включая минимальное и максимальное_

```js
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInRange(1, 10); // 7
```
