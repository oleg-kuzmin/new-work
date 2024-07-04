# [`document.querySelector()`](../index.md)

Метод определён для объекта `document` и любого HTML-элемента (`element`) страницы.

Позволяет найти элемент по CSS-селектору среди дочерних.

## Синтаксис

```js
document.querySelector(selector);
```

### `selector`

Строка - CSS-селектор. Если передан не CSS-селектор, то система выбросит ошибку.

## Возвращает

### `element` || `null`

Первый DOM-элемент, который соответствует критериям поиска. Если элементов несколько, то вернётся первый подходящий. `null` - если совпадений нет.

## Пример

_Поиск по тегу._

```js
document.querySelector('input');
```

_Поиск первого элемента в DOM._

```js
document.querySelector('*');
```

_Поиск по составному селектору_

```js
document.querySelector('section.bag div.bag .item');
```
