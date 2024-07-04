# [`grid-row`](../index.md)

- [`grid-row-start`](./grid-row-start.md) начало элемента по вертикали
- [`grid-row-end`](./grid-row-end.md) конец элемента по вертикали

## Пример

```css
.element {
  grid-row: 1 / 4;
}
```

## Синтаксис

### `grid-row: [grid-row-start] / [grid-row-end]`

Значения разделяются слэшем `/`.

```css
.element {
  grid-row: 1 / 4;
  grid-row: aside-start / 4;
}
```

### `grid-row: [grid-row-start]`

Если указать только одно значение этому свойству, второе по умолчанию станет `auto` и будет охватывать одну ячейку.

```css
.element {
  grid-row: 2;
}
```
