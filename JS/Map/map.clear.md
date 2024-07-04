# [`map.clear()`](../index.md)

Вызов метода `clear()` удаляет все значения из коллекции `Map`.

## Синтаксис

```js
map.clear();
```

## Возвращает

### `undefined`

## Пример

```js
const map = new Map();

map.set('html', 'HTML');
map.set('css', 'CSS');
map.set('js', 'JavaScript');
console.log(map.size); // 3

map.clear();
console.log(map.size); // 0
```
