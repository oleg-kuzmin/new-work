# [`keypress`](../index.md)

Нажатие на клавишу. Cработает при нажатии, но проигнорирует клавиши-модификаторы: alt, ctrl, shft и win — на Windows, и control, option, shift и command — на macOS.

## Пример

_Событие для addEventListener_

```js
element.addEventListener('keypress', function () {
  console.log('Нажали клавишу');
});
```

_Свойство элемента_

```js
element.onkeypress = function () {
  console.log('Нажали клавишу');
};
```
