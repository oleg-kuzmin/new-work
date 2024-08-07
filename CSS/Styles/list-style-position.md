# [`list-style-position`](../index.md)

Свойство `list-style-position` задаёт положение маркера списка относительно элемента списка.

Это свойство применяется к элементам, у которых свойство `display` имеет значение `list-item`. Как правило, это элементы списка `<li>`. Но так как это свойство наследуется, то обычно его задают самому списку `<ul>`, чтобы оно применилось ко всем элементам списка сразу.

В реальных проектах свойство используется очень редко, потому что работает только с «родными» маркерами списков. Дизайнеры в макетах повсеместно рисуют стилизованные маркеры, которые сверстать можно только с использованием псевдоэлементов `::before`.

## Пример

```css
.element {
  list-style-position: outside;
}
```

## Значения

### `list-style-position: outside` (по умолчанию)

Маркер будет находиться вне элемента списка.

### `list-style-position: inside`

Маркер будет являться частью содержимого в элементе списка.
