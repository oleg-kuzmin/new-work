# `all()`

Возвращает объект `promise` со статусом `fulfilled`, когда все промисы-аргументы вернулись со статусом `fulfilled`.

`all()` позволяет запустить запросы параллельно, при этом дожидаться результата мы можем как и раньше при помощи `await`.

## Синтаксис

```js
Promise.all(arrayPromises);
```

### `arrayPromises`

Массив с промисами.

## Возвращает

### `object promise`

## Пример

```js
// Создаём первый промис
const firstPromise = new Promise((resolve, reject) => {
  resolve('Первый промис');
});

// Создаём второй промис
const secondPromise = new Promise((resolve, reject) => {
  resolve('Второй промис');
});

// Создаём массив с промисами
const promises = [firstPromise, secondPromise];

// Передаём массив с промисами методу all()
Promise.all(promises).then(results => {
  console.log(results); // ["Первый промис", "Второй промис"]
});
```
