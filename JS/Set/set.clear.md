# `set.clear()`

Вызов метода `clear()` удаляет все значения из коллекции `Set`.

## Синтаксис

```js
set.clear();
```

## Возвращает

### `undefined`

## Пример

```js
const numbers = new Set();
numbers.add(2).add(3).add(5);
console.log(numbers.size); // 3

numbers.clear();
console.log(numbers.size); // 0
```
