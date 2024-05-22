# `isTrusted`

Указывает на происхождение события.

## Синтаксис

```js
event.isTrusted;
```

## Возвращает

### `boolean`

- `true` (да, событие инициировано действиями пользователя)
- `false` (нет, событие инициировано из кода с помощью `dispatchEvent()`)

## Пример

```js
if (e.isTrusted) {
  /* The event is trusted */
} else {
  /* The event is not trusted */
}
```
