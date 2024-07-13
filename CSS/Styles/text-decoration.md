# [`text-decoration`](../index.md)

- [`text-decoration-line`](./text-decoration-line.md) расположение линии
- [`text-decoration-style`](./text-decoration-style.md) стиль линии
- [`text-decoration-color`](./text-decoration-color.md) цвет линии

Свойство `text-decoration` позволяет добавить декоративные линии тексту. Текст можно подчеркнуть, перечеркнуть или добавить линию над текстом.

Свойство не наследуется.

Значение по умолчанию для обычного текста — none. Но для ссылок (<a>) значение по умолчанию — underline.

Свойство text-decoration целиком нельзя анимировать при помощи свойства transition. Но можно анимировать цвет линии!

Нельзя управлять толщиной и точным положением линии, заданной при помощи text-decoration.

Если по дизайну требуется задать тексту или ссылке подчёркивание, отличающееся от стандартного по толщине или положению, а также если нужно анимировать появление / пропадание линии, то используй псевдоэлементы ::before или ::after.

## Пример

```css
.element {
  text-decoration: none;
}
```

## Синтаксис

### `text-decoration: [text-decoration-line] [text-decoration-style] [text-decoration-color]`

## Значения

### `text-decoration: none` (по умолчанию)

Ничего не меняется.

### `text-decoration: underline`

Нижнее подчёркивание.

### `text-decoration: line-through`

Перечёркнутый текст.

### `text-decoration: overline`

Линия над текстом.
