# [`element.cloneNode()`](../index.md)

Создает копию элемента без обработчиков. Обработчики событий элемента не скопируются. Их придётся добавить заново.

## Синтаксис

```js
element.cloneNode(inner);
```

### `inner`

Boolean - с содержимым или нет.

- `true` - если хотите скопировать элемент вместе с содержимым
- `false` - если без содержимого

## Возвращает

### `element`

Новый DOM-элемент.

## Пример

```js
const container = document.querySelector('.container');
const element = document.querySelector('.element');
const elementCopy = element.cloneNode(true);
container.append(elementCopy);
```
