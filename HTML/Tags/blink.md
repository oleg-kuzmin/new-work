# [`<blink>`](../index.md)

_(blink: мигание, мерцание)_

Использовалось для визуального выделения текста, который в результате буквально будет мигать.

## Пример

```html
<blink>Зачем кому-либо так делать? Выглядит не гуманно.</blink>
```

## Чем заменить

Стилизация через CSS

```css
blink {
  animation: condemned_blink_effect 2s linear infinite;
}

@keyframes condemned_blink_effect {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
```
