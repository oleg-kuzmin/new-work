# [`mousemove`](../index.md)

Возникает при каждом движении мыши над элементом.

## Пример

_Событие для addEventListener_

```js
button.addEventListener('mousemove', function () {
  console.log('Двигаемся');
});
```

_Свойство элемента_

```js
button.onmousemove = function () {
  console.log('Двигаемся');
};
```
