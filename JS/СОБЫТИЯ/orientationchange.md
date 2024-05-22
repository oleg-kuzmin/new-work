# `orientationchange`

Срабатывает при изменении ориентации с альбомной на книжную и наоборот.

## Пример

_Событие для addEventListener_

```js
window.addEventListener('orientationchange', function () {
  window.location.reload();
});
```

_Свойство элемента_

```js
window.onorientationchange = function () {
  window.location.reload();
};
```
