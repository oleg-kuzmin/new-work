# [`grid-column`](../index.md)

- [`grid-column-start`](./grid-column-start.md) начало элемента по горизонтали
- [`grid-column-end`](./grid-column-end.md) конец элемента по горизонтали

## Пример

```css
.element {
  grid-column: 1 / 4;
}
```

## Синтаксис

### `grid-column: [grid-column-start] / [grid-column-end]`

Значения разделяются слэшем `/`.

```css
.element {
  grid-column: 1 / 4;
  grid-column: aside-start / 4;
}
```

### `grid-column: [grid-column-start]`

Если указать только одно значение этому свойству, второе по умолчанию станет `auto` и будет охватывать одну ячейку.

```css
.element {
  grid-column: 2;
}
```
