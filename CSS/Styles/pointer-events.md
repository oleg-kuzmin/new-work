# `pointer-events`

Свойство `pointer-events` управляет тем, как элемент будет реагировать на указатель (`pointer`): наведение или клик курсора мыши, тап на сенсорном экране, соответствующие события из JavaScript.

## Пример

```css
.element {
  pointer-events: auto;
}
```

## Значения

### `pointer-events: auto` (по умолчанию)

Элемент реагирует на указатель как обычно.

### `pointer-events: none`

Запрещает элементу реагировать на указатель. Но если на ней сфокусироваться с клавиатуры и нажать пробел, то она нажмётся.