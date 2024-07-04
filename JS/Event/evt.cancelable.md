# [`evt.cancelable`](../index.md)

Свойство `cancelable`, доступное только для чтения, указывает, можно ли отменить событие и, следовательно, предотвратить его, как если бы событие никогда не происходило.

## Синтаксис

```js
evt.cancelable;
```

## Возвращает

### `boolean`

- `true` (да, событие можно отменить)
- `false` (нет, событие нельзя отменить)

## Пример

```js
function preventScrollWheel(evt) {
  if (typeof evt.cancelable !== 'boolean' || evt.cancelable) {
    // Событие можно отменить, поэтому мы так и делаем.
    evt.preventDefault();
  } else {
    // Событие нельзя отменить, поэтому небезопасно вызовать метод preventDefault().
    console.warn(`The following event couldn't be canceled:`);
    console.dir(evt);
  }
}

document.addEventListener('wheel', preventScrollWheel);
```
