# [`dblclick`](../index.md)

Возникает при двойном щелчке левой кнопкой. Обработчик отслеживает два срабатывания `click` подряд на одном элементе.

## Пример

_Событие для addEventListener_

```js
button.addEventListener('dblclick', function () {
  console.log('Клик!');
});
```

_Свойство элемента_

```js
button.ondblclick = function () {
  console.log('Клик!');
};
```
