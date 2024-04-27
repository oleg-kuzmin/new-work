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

- [`accept-charset (КОДИРОВКА ФОРМЫ)`](<../ATTRIBUTES FORM/accept-charset (КОДИРОВКА ФОРМЫ).md>)
- [`action (ОБРАБОТЧИК ФОРМЫ)`](<../ATTRIBUTES FORM/action (ОБРАБОТЧИК ФОРМЫ).md>)
- [`autocomplete (АВТОЗАПОЛНЕНИЕ)`](<../ATTRIBUTES FORM/autocomplete (АВТОЗАПОЛНЕНИЕ).md>)
- [`enctype (ТИП ШИФРОВАНИЯ ДАННЫХ)`](<../ATTRIBUTES FORM/enctype (ТИП ШИФРОВАНИЯ ДАННЫХ).md>)
- [`name (ИМЯ)`](<../ATTRIBUTES FORM/name (ИМЯ).md>)
- [`novalidate (ОТКЛЮЧАЕТ ВАЛИДАЦИЮ)`](<../ATTRIBUTES FORM/novalidate (ОТКЛЮЧАЕТ ВАЛИДАЦИЮ).md>)
- [`target (ОТОБРАЖЕНИЕ ПОСЛЕ SUBMIT)`](<../ATTRIBUTES FORM/target (ОТОБРАЖЕНИЕ ПОСЛЕ SUBMIT).md>)

## Глобальные атрибуты

- [`class (ЗАДАЕТ КЛАСС ЭЛЕМЕНТУ)`](<../ATTRIBUTES GLOBAL/class (ЗАДАЕТ КЛАСС ЭЛЕМЕНТУ).md>)
- [`contenteditable (ДЕЛАЕТ РЕДАКТИРУЕМЫМ)`](<../ATTRIBUTES GLOBAL/contenteditable (ДЕЛАЕТ РЕДАКТИРУЕМЫМ).md>)
- [`data (ПОЛЬЗОВАТЕЛЬСКИЙ АТРИБУТ)`](<../ATTRIBUTES GLOBAL/data (ПОЛЬЗОВАТЕЛЬСКИЙ АТРИБУТ).md>)
- [`hidden (СКРЫВАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES GLOBAL/hidden (СКРЫВАЕТ ЭЛЕМЕНТ).md>)
- [`id (ИДЕНТИФИКАТОР)`](<../ATTRIBUTES GLOBAL/id (ИДЕНТИФИКАТОР).md>)
- [`lang (ЯЗЫК)`](<../ATTRIBUTES GLOBAL/lang (ЯЗЫК).md>)
- [`spellcheck (ПРОВЕРКА ПРАВОПИСАНИЯ)`](<../ATTRIBUTES GLOBAL/spellcheck (ПРОВЕРКА ПРАВОПИСАНИЯ).md>)
- [`style (СТИЛИ)`](<../ATTRIBUTES GLOBAL/style (СТИЛИ).md>)
- [`tabindex (ПОРЯДОК ТАБУЛЯЦИИ)`](<../ATTRIBUTES GLOBAL/tabindex (ПОРЯДОК ТАБУЛЯЦИИ).md>)
- [`title (ПОДСКАЗКА ПРИ НАВЕДЕНИИ)`](<../ATTRIBUTES GLOBAL/title (ПОДСКАЗКА ПРИ НАВЕДЕНИИ).md>)
