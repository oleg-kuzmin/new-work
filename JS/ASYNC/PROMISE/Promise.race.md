# `Promise.race()`

Метод очень похож на `all()`, но ждёт только первый выполненный промис, из которого берёт результат (или ошибку). Остальные промисы игнорируются.

## Синтаксис

```js
Promise.race(arrayPromises);
```

### `arrayPromises`

Массив с промисами.

## Возвращает

### `object promise`

`.state` - `fulfilled` || `rejected`

`.result` - `value` || `error`

## Пример

Быстрее всех выполнился первый промис, он и дал результат. После этого остальные промисы игнорируются.

```js
const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3]).then(alert); // 1
```
