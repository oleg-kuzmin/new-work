# [`animation-duration`](../index.md)

При помощи свойства `animation-duration` прописывается длительность одного цикла анимации.

Браузер понимает, за какой промежуток времени нужно проиграть все ключевые кадры анимации.

## Пример

```css
.element {
  animation-duration: 2s;
}
```

## Значения

Значения указываются в секундах `s` или милисекундах `ms`.

### `animation-duration: 1s`

Длительность одного цикла - 1 секунда.

### `animation-duration: 0`

Ключевые кадры будут пропущены, анимация применится мгновенно
