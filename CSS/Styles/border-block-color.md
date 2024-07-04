# [`border-block-color`](../index.md)

- [`border-block-start-color`](./border-block-start-color.md) цвет первой границы
- [`border-block-end-color`](./border-block-end-color.md) цвет второй границы

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
