# [`element.classList.toggle()`](../index.md)

Метод можно использовать, чтобы включать или выключать класс. Если при вызове `classList.toggle()` переданный класс уже есть на элементе, то он будет убран. Если класса не было — то добавлен.

## Синтаксис

```js
element.classList.toggle(className, booleanOption);
```

### `className`

Строка - имя класса для переключения.

### `booleanOption` / опционально

- `true` метод будет работать как `add()`
- `false` метод будет работать как `remove()`

## Возвращает

### `boolean`

- `true` - если класс был переключен;
- `false` - если ничего не изменилось.

## Пример

```js
// На кнопке есть класс hidden
const button = document.querySelector('button.hidden');

// Так как класс есть, то он будет убран
button.classList.toggle('hidden');

// А при повторном вызове будет снова добавлен
button.classList.toggle('hidden');
```
