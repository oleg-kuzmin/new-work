# `<form>`

Тег `<form>` добавляет на страницу форму, которую пользователь может заполнить. Например, ввести своё имя, фамилию или почту. Данные формы отправляются на сервер.

Стилизовать `<form>` можно с помощью CSS.

На странице можно сделать сколько угодно форм. Но одновременно пользователь сможет отправить только одну заполненную форму.

Внутрь формы можно вкладывать другие теги, в том числе `<div>`.

## Пример

```html
<form action="" method="get">
  <p>
    <label for="name">Введите имя:</label>
    <input type="text" name="name" id="name" required />
  </p>
  <p>
    <label for="email">Введите email:</label>
    <input type="email" name="email" id="email" required />
  </p>
  <button type="submit">Отправить</button>
</form>
```

## Атрибуты

- [`accept-charset`](../../ATTRIBUTES/FORM/accept-charset.md) кодировка формы
- [`action`](../../ATTRIBUTES/FORM/action.md) обработчик формы
- [`autocomplete`](../../ATTRIBUTES/FORM/autocomplete.md) автозаполнение
- [`enctype`](../../ATTRIBUTES/FORM/enctype.md) тип шифрования данных
- [`method`](../../ATTRIBUTES/FORM/method.md) метод отправки формы
- [`name`](../../ATTRIBUTES/FORM/name.md) имя
- [`novalidate`](../../ATTRIBUTES/FORM/novalidate.md) отключает валидацию
- [`target`](../../ATTRIBUTES/FORM/target.md) отображение после submit
