# `cancelable`

Свойство `cancelable`, доступное только для чтения, указывает, можно ли отменить событие и, следовательно, предотвратить его, как если бы событие никогда не происходило.

## Синтаксис

```js
event.cancelable;
```

## Возвращает

### `boolean`

- `true` (да, событие можно отменить)
- `false` (нет, событие нельзя отменить)

## Пример

```js
function preventScrollWheel(event) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    // Событие можно отменить, поэтому мы так и делаем.
    event.preventDefault();
  } else {
    // Событие нельзя отменить, поэтому небезопасно вызовать метод preventDefault().
    console.warn(`The following event couldn't be canceled:`);
    console.dir(event);
  }
}

document.addEventListener('wheel', preventScrollWheel);
```
