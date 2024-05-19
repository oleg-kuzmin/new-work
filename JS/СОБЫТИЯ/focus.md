# `focus`

Событие возникает при установлении фокуса на элементе.

## Пример

_Событие для addEventListener_

```js
// Установление фокуса
element.addEventListener('focus', function () {
  console.log('Фокус установлен');
});

// Переключение на вкладку браузера
window.addEventListener('focus', function () {
  console.log('пользователь переключился обратно на сайт');
});
```

_Свойство элемента_

```js
element.onfocus = function () {
  console.log('Фокус установлен');
};
```
