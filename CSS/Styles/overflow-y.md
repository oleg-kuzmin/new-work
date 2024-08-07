# [`overflow-y`](../index.md)

Свойство `overflow` позволяет буквально определить, что делать с содержимым блочного (у которого `display` определяется как `block`, `inline-block`, `flex` или `grid`) элемента, если оно не влезает в размеры — отобразить или обрезать (с полосами прокрутки или без).

Синтаксис свойства позволяет задать два значения — для оси x и оси y. Если указано одно значение, оно равнозначно применяется для обеих осей. Аналогичного результата можно добиться, используя самостоятельные CSS-свойства `overflow-x` и `overflow-y`.

Чтобы контент внутри блока можно было скроллить, его содержимое должно явно превышать высоту родительского блока. Этого можно добиться или явно задав ему height, или ограничив высоту родительского блока.

Задавая родительскому блоку фиксированную высоту, учитывайте, что, если не указан `box-sizing: border-box`, то это значение не учитывает внутренние отступы, заданные с помощью `padding`, что может спровоцировать появление нежелательной прокрутки.

## Пример

```css
.element {
  overflow-y: visible;
}
```

## Значения

### `overflow-y: visible` (по умолчанию)

Cодержимое отображается снаружи родительского блока, если его размеры больше размеров родительского» блока.

### `overflow-y: hidden`

Cодержимое, выходящее за пределы «родительского» блока, обрезается по его границам без прокрутки.

### `overflow-y: scroll`

Контент обрезается по границам родительского» блока, но внутри этой области содержимое доступно с помощью прокрутки.

### `overflow-y: auto`

Ecли содержимое переполняет блок, контент будет доступен для прокрутки.

### `overflow-y: clip`

Новое значение, похожее по результату на `hidden`, но границы родительского блока рассчитываются с учётом внутренних отступов.
