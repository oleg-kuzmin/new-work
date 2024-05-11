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

### `<input>` снаружи `<form>`

```html
<input type="button" placeholder="Введите логин" form="my-form" />
<form class="form" id="my-form"></form>
```

## Атрибуты

- [`accept (ТИП ФАЙЛА ДЛЯ INPUT FILE)`](<../ATTRIBUTES FORM/accept.md>)
- [`autocomplete (АВТОЗАПОЛНЕНИЕ)`](<../ATTRIBUTES FORM/autocomplete.md>)
- [`autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ)`](<../ATTRIBUTES FORM/autofocus.md>)
- [`capture (ВИД КАМЕРЫ ДЛЯ INPUT FILE)`](<../ATTRIBUTES FORM/capture.md>)
- [`defaultchecked (АВТОВЫБОР CHECKBOX, RADIO)`](<../ATTRIBUTES FORM/defaultchecked.md>)
- [`disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES FORM/disabled.md>)
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form.md>)
- [`formenctype (ТИП ШИФРОВАНИЯ ДАННЫХ)`](<../ATTRIBUTES FORM/formenctype.md>)
- [`inputmode (КЛАВИАТУРА ДЛЯ INPUT)`](<../ATTRIBUTES FORM/inputmode.md>)
- [`list (ССЫЛКА НА ID DATALIST)`](<../ATTRIBUTES FORM/list.md>)
- [`min (МИНИМАЛЬНОЕ ЗНАЧЕНИЕ)`](<../ATTRIBUTES FORM/min.md>)
- [`max (МАКСИМАЛЬНОЕ ЗНАЧЕНИЕ)`](<../ATTRIBUTES FORM/max.md>)
- [`minlength, maxlength (ОГРАНИЧЕНИЕ СИМВОЛОВ)`](<../ATTRIBUTES FORM/minlength, maxlength.md>)
- [`multiple (ВЫБОР НЕСКОЛЬКИХ ЗНАЧЕНИЙ)`](<../ATTRIBUTES FORM/multiple.md>)
- [`pattern (РЕГУЛЯРНОЕ ВЫРАЖЕНИЕ)`](<../ATTRIBUTES FORM/pattern.md>)
- [`placeholder (ПОДСКАЗКА ВВОДА)`](<../ATTRIBUTES FORM/placeholder.md>)
- [`readonly (ТОЛЬКО ДЛЯ ЧТЕНИЯ)`](<../ATTRIBUTES FORM/readonly.md>)
- [`required (ОБЯЗАТЕЛЬНОЕ ПОЛЕ)`](<../ATTRIBUTES FORM/required.md>)
- [`size (ШИРИНА ПОЛЯ ИЛИ ЧИСЛО ОПЦИЙ)`](<../ATTRIBUTES FORM/size.md>)
- [`step (ШАГ ИЗМЕНЕНИЯ INPUT)`](<../ATTRIBUTES FORM/step.md>)
- [`type (ТИП INPUT)`](<../ATTRIBUTES FORM/type (INPUT).md>)
- [`value (ЗНАЧЕНИЕ ПОЛЯ)`](<../ATTRIBUTES FORM/value.md>)
