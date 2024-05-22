# `pointermove `

Возникает при движении мышки в любом месте.

## Пример

_Событие для addEventListener_

```js
button.addEventListener('pointermove', function () {
  console.log('Мышь двигается');
});
```

_Свойство элемента_

```js
button.onpointermove = function () {
  console.log('Мышь двигается');
};
```
