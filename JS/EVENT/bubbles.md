# `bubbles`

Свойство содержит информацию о том является ли данное событие всплывающим.

## Синтаксис

```js
event.bubbles;
```

## Возвращает

### `boolean`

- `true` (да, событие является всплывающим)
- `false` (нет, событие не является всплывающим)

## Пример

```js
function handleInput(e) {
  // Проверяем всплывает ли событие и ...
  if (!e.bubbles) {
    // ... пропускаем событие сюда если нет
    passItOn(e);
  }

  // Уже всплыло
  doOutput(e);
}
```