# [`.response`](../../index.md)

Объект ответа от сервера. Будет уже преобразован в объект JS, если указан `request.responseType = 'json'`.

## Синтаксис

```js
request.response;
```

## Пример

```js
request.onload = function () {
  const data = request.response;
  console.log(data);
};
```
