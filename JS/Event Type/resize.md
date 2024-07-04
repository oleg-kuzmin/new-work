# [`resize`](../index.md)

Событие сработает только на объекте `window`. Поскольку среди элементов html нету тега, отождествленного с окном браузера, то обработать в javascript событие `onresize` можно при помощи присваивания функции свойству объекта `window`.

## Пример

_Событие для addEventListener_

```js
window.addEventListener('resize', function () {
  console.log('Размер окна изменен');
});
```

_Свойство элемента_

```js
window.onresize = function () {
  console.log('Размер окна изменен');
};
```
