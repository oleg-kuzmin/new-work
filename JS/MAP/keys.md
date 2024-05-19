# `keys()`

Возвращает итератор всех ключей коллекции.

## Синтаксис

```js
collection.keys();
```

## Возвращает

### `object`

## Пример

```js
const map = new Map();

map.set('0', 'foo');
map.set(1, 'bar');

const iterator = map.keys();

console.log(iterator.next().value); // Expected output: "0"
console.log(iterator.next().value); // Expected output: 1
```
