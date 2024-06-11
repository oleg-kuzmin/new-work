# `map.entries()`

Возвращает итератор пар `[ключ, значение]`.

## Синтаксис

```js
map.entries();
```

## Возвращает

### `object`

## Пример

```js
const map = new Map();

map.set('0', 'foo');
map.set(1, 'bar');

const iterator = map.entries();

console.log(iterator.next().value); // [ "0", "foo" ]
console.log(iterator.next().value); // [ 1, "bar" ]
```
