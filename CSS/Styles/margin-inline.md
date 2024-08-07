# [`margin-inline`](../index.md)

- [`margin-inline-start`](./margin-inline-start.md) внешний отступ начало строчной оси
- [`margin-inline-end`](./margin-inline-end.md) внешний отступ конец строчной оси

`margin` задаёт расстояние от края элемента до родительского элемента, а если такого нет, то до края окна браузера.

Верхний и нижний отступы не работают для строчных элементов.

Если у одного блока задан `margin-bottom`, а у следующего за ним `margin-top`, то они схлопнутся. Итоговый отступ будет равен бо́льшему отступу из двух. По горизонтали `margin` не схлопываются.

`margin` может быть отрицательным.

## Пример

```css
.element {
  margin: 10px;
}
```

## Синтаксис

### `margin-inline: [margin-inline-start margin-inline-end]`

## Значения

Значение margin может выражаться в пикселях (`px`), процентах (`%`) от ширины блока или словом `auto`, а также в любых других доступных в вебе единицах измерения. Также можно использовать функцию `calc()`.

### `margin-inline: 10px`

Отступы со всех сторон.

### `margin-inline: auto`

Браузер сам выбирает подходящий размер отступа. Например, можно использовать в некоторых случаях, чтобы центровать элемент.

### `margin-inline: -10px`

Отрицательное значение margin тоже возможно: вместо отступа, оно, наоборот, ставит элемент ближе к соседнему.
