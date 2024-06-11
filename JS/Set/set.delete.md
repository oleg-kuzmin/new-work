# `set.delete()`

Метод `delete()` удаляет значение из коллекции `Set`.

## Синтаксис

```js
set.delete(element);
```

### `element`

Элемент - значение, которое нужно удалить.

## Возвращает

### `boolean`

- `true` (если значение было найдено в коллекции и удалено)
- `false` (если значения нет в коллекции)

## Пример

```js
const watchlist = new Set(['Сияние', 'Интерстеллар', 'Казино']);
console.log(watchlist.size); // 3

const firstTry = watchlist.delete('Казино');
console.log(firstTry); // true
console.log(watchlist.size); // 2

const secondTry = watchlist.delete('Казино');
console.log(secondTry); // false
console.log(watchlist.size); // 2
```
