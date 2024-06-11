# `element.insertAdjacentText()`

Добавляет текст в документ и не затрагивает существующие элементы.

## Синтаксис

```js
element.insertAdjacentText(place, text);
```

### `place`

Строка - место добавления.

`beforebegin` `<div>` `afterbegin` `<текущая разметка>` `beforeend` `</div>` `afterend`

### `text`

Строка - текст.

## Возвращает

### `undefined`.

## Пример

```js
element.insertAdjacentText('beforeend', 'новый текст');
```
