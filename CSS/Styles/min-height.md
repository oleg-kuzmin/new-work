# [`min-height`](../index.md)

Помимо фиксированной высоты мы можем задать минимальную высоту элемента — `min-height`. В этом случае элемент сможет растягиваться на большую высоту, если того требует контент, размещённый внутри, но никогда не сожмётся по высоте меньше, чем указано в свойстве `min-height`.

## Пример

```css
.element {
  min-height: 100px;
}
```

## Значения

### `min-height: none` (по умолчанию)

Отсутствие значения.

### `min-height: 100px`

В качестве значения пишем число, а за ним без пробела единицу измерения: `px`, `%`, `vh`, `rem`, `em` или любую другую единицу измерения, доступную в вебе.
