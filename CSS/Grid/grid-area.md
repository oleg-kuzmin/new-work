# [`grid-area`](../index.md)

Задаётся грид-элементу и указывает на область, в которой он должен поместиться.

Также может быть шорткатом для одновременного указания значений области.

- [`grid-row-start`](./grid-row-start.md) начало элемента по вертикали
- [`grid-column-start`](./grid-column-start.md) начало элемента по горизонтали
- [`grid-row-end`](./grid-row-end.md) конец элемента по вертикали
- [`grid-column-end`](./grid-column-end.md) конец элемента по горизонтали

## Синтаксис

### `grid-area: header`

Название области.

```css
.element {
  grid-area: header;
}
```

### `grid-area: [grid-row-start] / [grid-column-start] / [grid-row-end] / [grid-column-end]`

```css
.element {
  grid-area: 1 / col4-start / last-line / 6;
}
```
