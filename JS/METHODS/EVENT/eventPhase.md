# `eventPhase`

Указывает на фазу срабатывания события.

## Синтаксис

```js
event.eventPhase;
```

## Возвращает

### `number`

- `0` (В настоящее время событие не обрабатывается)
- `1` (фаза `сapture`)
- `2` (фаза `target`)
- `3` (фаза `bubbling`)

## Пример

```js
function onDivClick(e) {
  if (e.eventPhase === 2) {
    e.currentTarget.style.backgroundColor = 'red';
  }
}
```
