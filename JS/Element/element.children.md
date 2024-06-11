# `element.children`

Свойство `children` содержит псевдомассив всех дочерних элементов указанного элемента.

## Синтаксис

```js
element.children;
```

## Возвращает

### `HTMLCollection`

Динамическая коллекция.

## Пример

```js
const body = document.querySelector('body');
console.log(body.children); // HTMLCollection(3) [p, p, p]
```
