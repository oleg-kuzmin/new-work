# [`text-overflow`](../index.md)

Свойство `text-overflow` определяет, как будет обрезаться текст, если он не влезает в доступную область полностью. Работает только если элементу заданы также свойства `white-space` со значением `nowrap` и `overflow` со значением `hidden`, `scroll` или `auto`.

## Пример

```css
.element {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

## Значения

### `text-overflow: clip` (по умолчанию)

Текст обрезается ровно по краю родительского блока.

### `text-overflow: ellipsis`

При обрезке текста в конце строки добавляется многоточие `...`, показывая незавершённость предложения.
