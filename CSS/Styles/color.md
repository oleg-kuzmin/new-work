# [`color`](../index.md)

Свойство `color` задаёт цвет для текста, а также для элементов его оформления, например, подчёркивания, линии над текстом, перечёркивания и других.

Чтобы задать фон текста, используйте свойство `background-color`, а рамки элемента можно раскрасить с помощью `border-color`.

Свойство цвета можно анимировать при помощи `transition`.

Если вам нужно задать полупрозрачный текст, используй значение с указанием альфа-канала. Не используй для этих целей `opacity`. Иначе при добавлении в элемент другого контента, например, иконки, он тоже станет полупрозрачным.

## Пример

```css
.element {
  color: red;
}
```

## Значения

### `color: currentColor`

Наследует значение свойства color у ближайшего родителя, у которого оно указано.

### `color: red`

Задаёт значение по названию цвета.

### `color: transparent`

Прозрачный цвет.

### `color: #090`

HEX-код цвета, 3- или 6-символьные для сплошных и 4- и 8-символьные для полупрозрачных.

### `color: rgb(220, 12, 64)`

### `color: rgba(220, 12, 64, 0.6)`

Значение RGB в старом синтаксисе rgb для сплошных и rgba для полупрозрачных

### `color: rgb(220 12 64)`

### `color: rgb(220 12 64 / 0.6)`

### `color: rgb(220 12 64 / 60%)`

Значение RGB в новом синтаксисе rgb для сплошных и для полупрозрачных.

### `color: hsl(30, 100%, 50%)`

### `color: hsla(30, 100%, 50%, 0.6)`

### `color: hsla(30, 100%, 50%, 60%)`

Значение HSL в старом синтаксисе hsl для сплошных и hsla для полупрозрачных.

### `color: hsl(30 100% 50%)`

### `color: hsl(30 100% 50% / 0.6)`

### `color: hsl(30 100% 50% / 60%)`

Значение HSL в новом синтаксисе hsl для сплошных и для полупрозрачных.
