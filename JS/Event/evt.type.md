# [`evt.type`](../index.md)

В свойстве хранится тип события.

## Синтаксис

```js
evt.type;
```

## Возвращает

### `string`

Строку, содержащую тип события.

## Пример

```js
function getEventType(evt) {
  const log = document.getElementById('log');
  log.innerText = `${evt.type}\n${log.innerText}`;
}

// Keyboard events
document.addEventListener('keydown', getEventType, false); // first
document.addEventListener('keypress', getEventType, false); // second
document.addEventListener('keyup', getEventType, false); // third

// Mouse events
document.addEventListener('mousedown', getEventType, false); // first
document.addEventListener('mouseup', getEventType, false); // second
document.addEventListener('click', getEventType, false); // third
```
