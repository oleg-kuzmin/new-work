# `.reset()`

Сбрасываем (очищаем) все поля формы.

# Синтаксис

```js
form.reset();
```

## Возвращает

### `undefined`

## Пример

```js
const form = document.forms.myForm;
form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  form.reset();
});
```
