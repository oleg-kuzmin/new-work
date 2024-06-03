# `grid-template`

- [`grid-template-rows`](./grid-template-rows.md) явные строки
- [`grid-template-columns`](./grid-template-columns.md) явные колонки
- [`grid-template-areas`](./grid-template-areas.md) название грид-области элемента

Можно прописать все колонки и ряды сразу, разделяя их слэшем `/`. Сперва идут ряды, а затем колонки, не перепутайте!

Используйте все доступные значения свойств `grid-template-rows` и `grid-template-columns`, разделяя их слэшем.

В этом же свойстве можно задавать значение и для `grid-template-areas`. Но тогда код превращается в кашу и становится совершенно нечитабельным. Лучше всё же использовать это свойство отдельно.

## Пример

```css
.container {
  display: grid;
  grid-template: repeat(4, 150px) / 1fr 200px 1fr;
}
```

## Синтаксис

### `grid-template: [grid-template-rows] / [grid-template-columns]`
