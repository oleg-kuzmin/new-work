# `key`

Хранит название нажатой клавиши.

## Синтаксис

```js
event.key;
```

## Возвращает

### `string`

Строку, содержащую название нажатой клавиши.

## Пример

```js
function keyDown(evt) {
  if (event.key === 'Enter') {
    console.log('Нажали Enter');
  }
}
```
