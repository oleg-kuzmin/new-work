# `Promise.resolve()`

Если вы сразу хотите создать исполненный или отклонённый промис, вызывать `new Promise()` необязательно. Можно обратиться к методам `Promise.resolve` и `Promise.reject`. Эти методы создают промис, переводят его в статус «исполнен» или «отклонён» соответственно, и записывают как результат промиса — то, что мы передали этим методам.

## Синтаксис

```js
Promise.resolve(value);
```

### `value`

Значение, которое будет передано в `resolve(value)` и записано как результат промиса.

## Возвращает

### `object promise`

`.state` - `fulfilled`

`.result` - `value`

## Пример

```js
// Без переменной
Promise.resolve('Этот промис исполнен').catch(function (value) {
  console.log(value); // 'Этот промис исполнен'
});

// С переменной
const promise = Promise.resolve('Этот промис исполнен');
promise.catch(function (value) {
  console.log(value); // 'Этот промис исполнен'
});
```
