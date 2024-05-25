# `all()`

Возвращает объект `promise` со статусом `fulfilled`, когда все промисы-аргументы вернулись со статусом `fulfilled`.

`all()` позволяет запустить запросы параллельно, в большинстве случаев мы получим результат быстрее, при этом дожидаться результата мы можем как и раньше при помощи `await`.

## Синтаксис

```js
Promise.all(arrayPromises);
```

### `arrayPromises`

Массив с промисами.

## Возвращает

### `object promise`

`.state` - `fulfilled`

`.result` - массив значений всех переданных промисов, при этом сохраняется порядок оригинального (переданного) массива, но не порядок выполнения.

## Пример

```js
// Создаём первый промис
const promise1 = new Promise((resolve, reject) => {
  resolve('Первый промис');
});

// Создаём второй промис
const promise2 = new Promise((resolve, reject) => {
  resolve('Второй промис');
});

// Передаём массив с промисами методу all()
Promise.all([promise1, promise2]).then(([response1, response2]) => {
  console.log(response1); // "Первый промис"
  console.log(response2); // "Второй промис"
});
```
