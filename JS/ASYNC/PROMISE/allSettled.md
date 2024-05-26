# `.allSettled()`

Метод `allSettled()` всегда ждёт завершения всех промисов, не важно выполненных успешно или нет, главное выполненных. Например, мы хотели бы загрузить информацию о множестве пользователей. Даже если каком-то промис вернет ошибку, нас всё равно интересуют остальные.

## Синтаксис

```js
Promise.allSettled(arrayPromises);
```

### `arrayPromises`

Массив с промисами.

## Возвращает

### `object promise`

`.state` - `fulfilled`

`.result` - массив объектов, при этом сохраняется порядок оригинального (переданного) массива, но не порядок выполнения.

```js
// fulfilled
{
  status: "fulfilled",
  value: {объект responce}
}

// rejected
{
  status: "rejected",
  reason: {объект error}
}
```

## Пример

```js
// Создаём первый промис
const promise1 = new Promise((resolve, reject) => {
  resolve('Первый промис');
});

// Создаём второй промис
const promise2 = new Promise((resolve, reject) => {
  reject('Ошибка');
});

// Передаём массив с промисами методу allSettled()
Promise.allSettled([promise1, promise2]).then(([response1, response2]) => {
  console.log(response1); // { status:"fulfilled", value: 'Первый промис' }
  console.log(response2); // { status:"rejected", reason: 'Ошибка' }
});
```
