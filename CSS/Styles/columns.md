# [`columns`](../index.md)

- [`column-count`](./column-count.md) количество колонок
- [`column-width`](./column-width.md) ширина колонок

## Пример

```css
.element {
  columns: 2 500px;
}
```

## Значения

### `columns: 2 500px`

Можно указать количество колонок, ширину колонок или оба значения одновременно. Значение, которое не указано явно, устанавливается как `auto`. Порядок значений может быть любой. Браузер поймёт, что целое число без единиц измерения — это количество колонок, а число с единицами измерения — ширина колонки.
