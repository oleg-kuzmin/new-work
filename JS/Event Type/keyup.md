# `keyup`

Клавиша отпущена. Сработает на любой клавише, но только когда её отпустят.

## Пример

_Событие для addEventListener_

```js
element.addEventListener('keyup', function () {
  console.log('Отпустили клавишу');
});
```

_Свойство элемента_

```js
element.onkeyup = function () {
  console.log('Отпустили клавишу');
};
```
