# `preserveAspectRatio`

Атрибут, значение которого указывает браузеру нужно ли сохранять пропорции при масштабировании изображения. Если значение отличается от none, то состоит из двух частей: первая отвечает за выравнивания, вторая отвечает за пропорции.

## Применяется к тегам

- [`<svg>`](../Tags/svg.md) векторная графика

## Пример

```html
<svg
  preserveAspectRatio="meet"
  xmlns="http://www.w3.org/2000/svg"
  fill-rule="evenodd"
  clip-rule="evenodd"
  viewBox="0 0 24 24"
>
  <path d="..." />
</svg>
```

## Значения

### `preserveAspectRatio="xMinYMin"`

Выравнивает изображение по левому верхнему углу.

### `preserveAspectRatio="xMidYMid"`

Выравнивает изображение по центру по обеим осям.

### `preserveAspectRatio="xMaxYMax"`

Выравнивает изображение по правому нижнему углу.

### `preserveAspectRatio="meet"`

Изображение стремится уместиться целиком с сохранением пропорций. Чем-то похоже на поведение `background-size: contain`.

### `preserveAspectRatio="slice"`

Изображение пытается заполнить собой всё доступное пространство. Похоже на `background-size: cover`.
