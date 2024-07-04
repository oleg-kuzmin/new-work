# [`element.submit()`](../index.md)

Программная отправка формы с помощью метода.

## Синтаксис

```js
form.submit();
```

## Возвращает

### `undefined`

## Пример

```js
input.addEventListener('input', function () {
  // если введено четыре символа сгенерируем событие submit
  if (input.length === 4) {
    form.submit();
  }
});

form.addEventListener('submit', function () {
  // обработка события submit
});
```
