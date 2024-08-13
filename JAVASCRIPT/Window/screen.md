# [`screen`](../index.md)

Интерфейс `Screen` представляет собой экран, обычно тот, на котором отображается текущее окно, и получается с помощью `window.screen`.

## Синтаксис

```js
window.screen;
```

## Возвращает

Возвращает объект с разными свойствами.

### `window.screen.width`

Содержит число - ширину экрана.

### `window.screen.height`

Содержит число - высоту экрана.

## Пример

```js
window.addEventListener('resize', () => setWidth(window.screen.width));
```
