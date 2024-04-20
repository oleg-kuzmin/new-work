# `<input>` (Поле ввода)

_(input: ввод)_

`<input>` — это контейнер для интерактивных элементов, с помощью которых пользователь может ввести данные, что-то выбрать, поставить галочку или нажать кнопку.

## Пример

### `<input>` внутри `<form>`

```html
<form class="form">
  <input type="text" placeholder="Введите логин" />
</form>
```

### `<input form='______'>` и `<form id ='______'>`

```html
<input type="button" placeholder="Введите логин" form="my-form" />
<form class="form" id="my-form"></form>
```

## Атрибуты

- [`accept`](<../ATTRIBUTES FORM/accept (ТИП ФАЙЛА ДЛЯ INPUT).md>)
- [`autocomplete`](<../ATTRIBUTES FORM/autocomplete (АВТОЗАПОЛНЕНИЕ).md>)
- [`autofocus`](<../ATTRIBUTES FORM/autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ).md>)
- [`value`](<../ATTRIBUTES FORM/value (ЗНАЧЕНИЕ ПОЛЯ).md>)
