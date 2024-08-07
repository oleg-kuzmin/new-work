# [`outline-color`](../index.md)

Свойство `outline-color` задаёт цвет обводки элемента. Аналог свойства `border-color` для цвета рамки.

Не наследуется. Часто используется в шорткате `outline`, где цвет обводки указывается наряду с толщиной и стилем.

В отличие от `border-color`, нельзя прописать сразу несколько значений. Цвет обводки у элемента единый по всем четырём сторонам.

## Пример

```css
.element {
  outline-color: currentColor;
}
```

## Значения

### `outline-color: currentColor` (по умолчанию)

Текущий цвет текста родителя.

### `outline-color: black`

Цвет обводки можно задать в любом доступном формате, включая transparent.

### `outline-color: transparent`

Прозрачная рамка.

### `outline-color: initial` || `inherit` , `unset`, `revert`

Любые глобальные ключевые слова.

### `outline-color: invert`

Противоположный цвету фона элемента.
