# [`new XMLHttpRequest()`](../index.md)

Это некий специальный объект для взаимодействия с сервером. Является legacy, вместо него обычно используется `fetch()`.

## Синтаксис

```js
const request = new XMLHttpRequest();
```

## Возвращает

### `object`

Возвращает объект с методами.

## Пример

```js
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const request = new XMLHttpRequest();

request.open('GET', url);
request.responseType = 'json';

request.send();

request.onload = function () {
  const data = request.response;
  console.log(data);
};
```
