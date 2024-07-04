# [`evt.stopPropagation()`](../index.md)

Метод, с помощью которого можно остановить всплытие события.

## Синтаксис

```js
evt.stopPropagation();
```

## Пример

```js
element.onclick = function (evt) {
  evt.stopPropagation();
};
```
