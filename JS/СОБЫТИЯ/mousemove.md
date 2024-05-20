# `mouseMove`

Возникает при каждом движении мыши над элементом.

## Пример

_Событие для addEventListener_

```js
button.addEventListener('mousemove', function () {
  console.log('Двигаемся');
});
```

_Свойство элемента onmousedown_

```js
button.onmousedown = function () {
  console.log('Двигаемся');
};
```
