# `contextmenu`

Возникает при щелчке правой кнопкой, когда она в нижнем положении. Как `mousedown`, но для одной правой кнопки.

## Пример

_Событие для addEventListener_

```js
button.addEventListener('contextmenu', function () {
  console.log('Клик!');
});
```

_Свойство элемента_

```js
button.oncontextmenu = function () {
  console.log('Клик!');
};
```
