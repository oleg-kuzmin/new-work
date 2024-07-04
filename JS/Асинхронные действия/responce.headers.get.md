# [`response.headers.get()`](../index.md)

Для работы с заголовками есть специальные методы. Чтобы получить значение заголовка, есть метод `get()`. Заголовки ответа можно только читать, но нельзя редактировать.

## Пример

```js
fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if (res.headers.get('Content-Type').contains('application/json')) {
      return res.json();
    }
  })
  .then(data => data);
```
