# [`offline`](../index.md)

Мы можем отслеживать состояние интернет-соединения и показывать сообщение, если оно пропало. Cобытие срабатывает только на `window`.

## Пример

_Событие для addEventListener_

```js
window.addEventListener('offline', function () {
  alert('Отсутствует подключение к интернету');
});
```

_Свойство элемента_

```js
window.onoffline = function () {
  alert('Отсутствует подключение к интернету');
};
```