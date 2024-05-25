# `new Promise()`

Создание объекта - экземпляра класса `Promise` происходит через конструктор `new Promise`.

- Вызывайте reject с объектом Error (например new Error("Whoops!").
- Функции resolve/reject ожидают только один аргумент (или ни одного).

## Синтаксис

```js
const promise = new Promise(function (resolve, reject) {
  resolve(value);
  reject(error);
});
```

### `function (resolve, reject)`

Когда `Promise` создаётся, функция-исполнитель запускается автоматически. Она должна содержать код, который когда-нибудь создаст результат.

Функция-исполнитель принимает `resolve` и `reject`. Это callback-функции. Функция должна выполнить работу, а затем вызвать `resolve(value)` или `reject(error)` (что-то одно).

- `resolve(value)` — если работа завершилась успешно, с результатом `value`.
- `reject(error)` — если произошла ошибка, `error` – объект ошибки.

Передавайте в вызов `reject` объект Error - например `new Error("errorText")`.

## Возвращает

### `object promise`

У объекта `promise`, возвращаемого конструктором `new Promise`, есть внутренние свойства: `.state`, `.result`.

#### `.state` (Состояние)

Вначале `pending` (ожидание), потом меняется на `fulfilled` (выполнено успешно) если вызвали `resolve()` или на `rejected` (выполнено с ошибкой) если вызвали `reject()`.

#### `.result` (Результат)

Вначале `undefined`, далее изменяется на `value` при вызове `resolve(value)` или на `error` при вызове `reject(error)`.
