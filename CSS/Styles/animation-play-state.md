# [`animation-play-state`](../index.md)

Свойство, позволяющее ставить CSS-анимацию на паузу и запускать снова.

## Пример

```css
.element:hover {
  animation-play-state: running;
}
```

## Значения

### `animation-play-state: running` (по умолчанию)

Aнимация проигрывается.

### `animation-play-state: paused`

Анимация ставится на паузу. При повторном запуске анимации она продолжается с того места, где была остановлена.
