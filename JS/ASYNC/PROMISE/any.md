# `any()`

Метод очень похож на `race()`, но ждёт только первый успешно выполненный промис, из которого берёт результат.

Если ни один из переданных промисов не завершится успешно, тогда возвращённый объект `Promise` будет отклонён с помощью `AggregateError` – специального объекта ошибок, который хранит все ошибки промисов в своём свойстве `errors`.

## Синтаксис

```js
Promise.any(arrayPromises);
```

### `arrayPromises`

Массив с промисами.

## Возвращает

### `object promise`

`.state` - `fulfilled`
`.result` - `value`

## Пример

Первый промис в этом примере был самым быстрым, но он был отклонён, поэтому результатом стал второй. После того, как первый успешно выполненный промис «выиграет гонку», все дальнейшие результаты будут проигнорированы.

```js
const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 2000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000));

Promise.any([promise1, promise2, promise3]).then(alert); // 1
```
