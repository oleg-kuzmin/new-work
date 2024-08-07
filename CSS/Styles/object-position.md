# [`object-position`](../index.md)

Свойство помогает спозиционировать отрисовку картинки `<img>` или видео `<video>` внутри контейнера, если к нему применили свойство `object-fit`.

Не работает без `object-fit`.

Принимает отрицательные значения.

## Пример

```css
.element {
  object-fit: cover;
  object-position: bottom;
}
```

## Значения

По применению и доступным значениям свойство похоже на `background-position`. Оно может принимать как значения в единицах измерения (пикселях, процентах и т. д.), так и с указанием расположения относительно границы элемента — `bottom`, `top`, `center`, `left` или `right`. Кроме того, как и в `background-position`, мы можем указать значения отдельно по вертикали и по горизонтали — первое значение обозначает `ось x`, второе — `ось y`.

### `object-position: center` (по умолчанию)

По умолчанию свойство позиционирует контент по центру элемента.

### `object-position: [left, right, center, top, bottom]`

Ключевые слова сразу по двум осям (X, Y).

### `object-position: [left, right, center, top, bottom] [left, right, center, top, bottom]`

Ключевые слова отдельно по каждой оси (X, Y).

### `object-position: 50%`

Проценты сразу по двум осям (X, Y).

### `object-position: 50% 50%`

Проценты отдельно по каждой оси (X, Y).

### `object-position: 10px`

Единицы измерения сразу по двум осям (X, Y).

### `object-position: 10px 10px`

Единицы измерения отдельно по каждой оси (X, Y).

### `object-position: right 20px bottom 10px`

Отступ будет отсчитываться не от верхнего левого угла, а от указанной при помощи ключевого слова стороны.
