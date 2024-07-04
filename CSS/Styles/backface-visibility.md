# [`backface-visibility`](../index.md)

Свойство `backface-visibility` управляет видимостью задней части элемента, если он поворачивается относительно пользователя с помощью свойства `transform`. Это нужно только для 3D-трансформаций, для 2D-трансформаций свойство не имеет эффекта.

## Пример

```css
.element {
  backface-visibility: visible;
}
```

## Значения

### `backface-visibility: visible` (по умолчанию)

Задняя сторона элемента видна.

### `backface-visibility: hidden`

Задняя сторона элемента не видна.
