# [`justify-self`](../index.md)

Свойство, с помощью которого задаётся выравнивание элементов внутри грид-ячейки по горизонтальной оси. Применяется ко всем дочерним элементам внутри грид-контейнера.

Можно управлять выравниванием отдельных грид-элементов при помощи свойства `justify-self`.

## Пример

```css
.element {
  justify-self: start;
}
```

## Значения

### `justify-self: stretch` (по умолчанию)

Растягивает контент внутри грид-элементов на всю ширину.

### `justify-self: start`

Выравнивает элементы внутри грид-ячейки по начальной (левой для LTR) линии.

### `justify-self: end`

Выравнивает элементы внутри грид-ячейки по конечной (правой для LTR) линии.

### `justify-self: center`

Выравнивает элементы внутри грид-ячейки по центру.
