# `size`

Свойство `size` содержит количество значений, находящихся в коллекции `Set`. Доступно только для чтения.

## Синтаксис

```js
collection.size;
```

## Возвращает

### `number`

## Пример

```js
const watchList = new Set();
console.log(watchList.size); // 0

watchList.add('Бойцовский клуб');
console.log(watchList.size); // 1
```
