# `<form>` (Форма)

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

- [`accept-charset (КОДИРОВКА ФОРМЫ)`](<../ATTRIBUTES FORM/accept-charset.md>)
- [`action (ОБРАБОТЧИК ФОРМЫ)`](<../ATTRIBUTES FORM/action.md>)
- [`autocomplete (АВТОЗАПОЛНЕНИЕ)`](<../ATTRIBUTES FORM/autocomplete.md>)
- [`enctype (ТИП ШИФРОВАНИЯ ДАННЫХ)`](<../ATTRIBUTES FORM/enctype.md>)
- [`method (МЕТОД ОТПРАВКИ ФОРМЫ)`](<../ATTRIBUTES FORM/method.md>)
- [`name (ИМЯ)`](<../ATTRIBUTES FORM/name.md>)
- [`novalidate (ОТКЛЮЧАЕТ ВАЛИДАЦИЮ)`](<../ATTRIBUTES FORM/novalidate.md>)
- [`target (ОТОБРАЖЕНИЕ ПОСЛЕ SUBMIT)`](<../ATTRIBUTES FORM/target.md>)
