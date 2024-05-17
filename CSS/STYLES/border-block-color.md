# `border-block-color` (Цвет границ)

- [`border-block-start-color (ЦВЕТ ПЕРВОЙ ГРАНИЦЫ)`](./border-block-start-color.md)
- [`border-block-end-color (ЦВЕТ ВТОРОЙ ГРАНИЦЫ)`](./border-block-end-color.md)

Можно управлять цветом границы каждой стороны в отдельности.

## Пример

```css
.element {
  border-block-color: currentColor;
}
```

## Значения

### `border-block-color: currentColor` (по умолчанию)

Текущий цвет текста родителя.

### `border-block-color: #2E9AFF`

Одно значение, цвет рамки со всех сторон одинаковый.

### `border-block-color: transparent`

Прозрачная рамка.

### `border-block-color: inherit`

Наследует значение родителя.

### `border-block-color: invert`

Противоположный цвету фона элемента.
