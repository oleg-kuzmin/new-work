# `grid-column`

- [`grid-column-start`](./grid-column-start.md) начало элемента по колонкам
- [`grid-column-end`](./grid-column-end.md) конец элемента по колонкам

## Пример

```css
.element {
  grid-column: 2 / 3;
}
```

## Значения

### `grid-column: [grid-column-start] / [grid-column-end]`

Значения разделяются слэшем `/`. 

### `grid-column: 2 / span 2`

Можно использовать ключевое слово `span`, буквально говорящее «растянись на столько-то». На сколько, указывает стоящая за ним цифра.

### `grid-column: 2`

Если указать только одно значение, то элемент будет размером в одну ячейку.
