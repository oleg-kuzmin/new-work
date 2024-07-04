# [`blur`](../index.md)

Событие возникает при снятии фокуса с элемента.

## Пример

_Событие для addEventListener_

```js
// Снятие фокуса
element.addEventListener('blur', function () {
  console.log('Фокус снят');
});

// Переключение вкладки браузера
window.addEventListener('blur', function () {
  console.log('пользователь переключил вкладку');
});
```

_Свойство элемента_

```js
element.onblur = function () {
  console.log('Фокус снят');
};
```
