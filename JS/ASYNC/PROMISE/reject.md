# `reject()`

Если вы сразу хотите создать исполненный или отклонённый промис, вызывать `new Promise()` необязательно. Можно обратиться к методам `Promise.resolve` и `Promise.reject`. Эти методы создают промис, переводят его в статус «исполнен» или «отклонён» соответственно, и записывают как результат промиса — то, что мы передали этим методам.

## Синтаксис

```js
Promise.reject(error);
```

### `error`

Значение, которое будет передано в `reject(error)` и записано как результат промиса.

## Возвращает

### `object promise`

`.state` - `rejected`

`.result` - `error`

## Пример

```js
// Без переменной
Promise.reject('Этот промис отклонён').catch(function (value) {
  console.log(value); // 'Этот промис отклонён'
});

// С переменной
const promise = Promise.reject('Этот промис отклонён');
promise.catch(function (value) {
  console.log(value); // 'Этот промис отклонён'
});
```
