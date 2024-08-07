# [`flex-wrap`](../index.md)

Флекс-элементы по умолчанию стараются уместиться в один ряд, даже если размер им не позволяет.

Чтобы изменить это поведение, свойству `flex-wrap` нужно задать значение, отличное от `nowrap`.

Если вы позволяете элементам переноситься на новый ряд, изменив значение свойства `flex-wrap`, то для каждой строки будут созданы дополнительные основные оси. Каждый ряд будет вести себя как отдельный флекс-контейнер, но с общим управлением.

## Пример

```css
.container {
  display: flex;
  flex-wrap: nowrap;
}
```

## Значения

### `flex-wrap: nowrap` (по умолчанию)

Запрет переноса. При этом флекс-элементы помещаются (или пытаются уместиться) в один ряд и не переносятся на новую строку, даже если не влезают в размеры родителя.

### `flex-wrap: wrap`

Флекс-элементы будут иметь возможность перенестись в новый ряд, если не влезают в одну линию в рамках родителя.

### `flex-wrap: wrap-reverse`

Тоже, что и `wrap`, но элементы будут располагаться снизу вверх, заполнив собой сперва нижний ряд, а те, что не влезли, перепрыгнут в ряд выше.
