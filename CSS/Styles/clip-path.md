# [`clip-path`](../index.md)

Свойство `clip-path` задаёт видимую область изображения. Всё, что выходит за пределы указанной области скрывается.

Хотя самая частая область применения — это изображения, но свойство `clip-path` может ограничивать и другие HTML-элементы, например заголовок.

Свойство `clip-path` является заменой устаревшему свойству `clip`.

## Пример

```css
.element {
  clip-path: circle(50%);
}
```

## Значения (фигура)

### `clip-path: inset()`

Четырёхугольник

### `clip-path: circle()`

Круг

### `clip-path: ellipse()`

Эллипс

### `clip-path: polygon()`

Многоугольник

### `clip-path: path()`

Сложная фигура по правилам заполнения SVG

### `clip-path: url(clip.svg#c1)`

Можно задать область при помощи SVG-источника.

## Значения (блочная модель)

### `clip-path: margin-box`

Включает отступы

### `clip-path: border-box`

По заданной рамке

### `clip-path: padding-box`

По контенту, включая свойство padding

### `clip-path: content-box`

По содержимому

### `clip-path: fill-box`

По ограничивающей рамке объекта

### `clip-path: stroke-box`

По обводке ограничивающей рамки

### `clip-path: view-box`

По окну просмотра SVG.

## Значения (комбинированные)

### `clip-path: margin-box circle(50%)`

Можно комбинировать все или несколько способов задачи области.
