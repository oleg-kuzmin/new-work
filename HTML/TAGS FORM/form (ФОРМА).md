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

- [`accept-charset`](<../ATTRIBUTES FORM/accept-charset (КОДИРОВКА ФОРМЫ).md>)
- [`action`](<../ATTRIBUTES FORM/action (ОБРАБОТЧИК ФОРМЫ).md>)
- [`autocomplete`](<../ATTRIBUTES FORM/autocomplete (АВТОЗАПОЛНЕНИЕ).md>)
- [`enctype`](<../ATTRIBUTES FORM/enctype (ТИП ШИФРОВАНИЯ ДАННЫХ).md>)
- [`name`](<../ATTRIBUTES FORM/name (ИМЯ ПОЛЯ).md>)
- [`novalidate`](<../ATTRIBUTES FORM/novalidate (ОТКЛЮЧАЕТ ВАЛИДАЦИЮ).md>)
- [`target`](<../ATTRIBUTES FORM/target (ОТОБРАЖЕНИЕ ПОСЛЕ SUBMIT).md>)
