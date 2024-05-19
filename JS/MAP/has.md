# `has()`

Узнать, есть ли в коллекции значение с конкретным ключом, можно с помощью метода `has()`.

## Синтаксис

```js
collection.has(key);
```

### `key`

Значение с конкретным ключом, который нужно проверить.

## Возвращает

### `boolean`

- `true` (если коллекция содержит ключ)
- `false` (если ключа в коллекции нет)

## Пример

```js
const map = new Map();
map.set('js', 'JavaScript');

console.log(map.has('js')); // true
console.log(map.has('css')); // false
```
