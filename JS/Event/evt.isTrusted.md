# [`evt.isTrusted`](../index.md)

Указывает на происхождение события.

## Синтаксис

```js
evt.isTrusted;
```

## Возвращает

### `boolean`

- `true` (да, событие инициировано действиями пользователя)
- `false` (нет, событие инициировано из кода с помощью `dispatchEvent()`)

## Пример

```js
if (evt.isTrusted) {
  /* The event is trusted */
} else {
  /* The event is not trusted */
}
```
