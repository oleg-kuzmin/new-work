# [`<form>`](../index.md)

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

- [`accept-charset`](../Attrubutes/accept-charset.md) кодировка формы
- [`action`](../Attrubutes/action.md) обработчик формы
- [`autocomplete`](../Attrubutes/autocomplete.md) автозаполнение
- [`enctype`](../Attrubutes/enctype.md) тип шифрования данных
- [`method`](../Attrubutes/method.md) метод отправки формы
- [`name`](<../Attrubutes/name (input).md>) имя
- [`novalidate`](../Attrubutes/novalidate.md) отключает валидацию
- [`target`](<../Attrubutes/target (form).md>) отображение после submit
