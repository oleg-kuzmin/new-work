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

- [`accept (ТИП ФАЙЛА ДЛЯ INPUT FILE)`](<../ATTRIBUTES FORM/accept (ТИП ФАЙЛА ДЛЯ INPUT FILE).md>)
- [`autocomplete (АВТОЗАПОЛНЕНИЕ)`](<../ATTRIBUTES FORM/autocomplete (АВТОЗАПОЛНЕНИЕ).md>)
- [`autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ)`](<../ATTRIBUTES FORM/autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ).md>)
- [`capture (ВИД КАМЕРЫ ДЛЯ INPUT FILE)`](<../ATTRIBUTES FORM/capture (ВИД КАМЕРЫ ДЛЯ INPUT FILE).md>)
- [`defaultchecked (АВТОВЫБОР CHECKBOX, RADIO)`](<../ATTRIBUTES FORM/defaultchecked (АВТОВЫБОР CHECKBOX, RADIO).md>)
- [`disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES FORM/disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ).md>)
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form (СВЯЗЬ С ФОРМОЙ).md>)
- [`formenctype (ТИП ШИФРОВАНИЯ ДАННЫХ)`](<../ATTRIBUTES FORM/formenctype (ТИП ШИФРОВАНИЯ ДАННЫХ).md>)
- [`inputmode (КЛАВИАТУРА ДЛЯ INPUT)`](<../ATTRIBUTES FORM/inputmode (КЛАВИАТУРА ДЛЯ INPUT).md>)
- [`list (ССЫЛКА НА ID DATALIST)`](<../ATTRIBUTES FORM/list (ССЫЛКА НА ID DATALIST).md>)
- [`min (МИНИМАЛЬНОЕ ЗНАЧЕНИЕ)`](<../ATTRIBUTES FORM/min (МИНИМАЛЬНОЕ ЗНАЧЕНИЕ).md>)
- [`max (МАКСИМАЛЬНОЕ ЗНАЧЕНИЕ)`](<../ATTRIBUTES FORM/max (МАКСИМАЛЬНОЕ ЗНАЧЕНИЕ).md>)
- [`minlength, maxlength (ОГРАНИЧЕНИЕ СИМВОЛОВ)`](<../ATTRIBUTES FORM/minlength, maxlength (ОГРАНИЧЕНИЕ СИМВОЛОВ).md>)
- [`multiple (ВЫБОР НЕСКОЛЬКИХ ЗНАЧЕНИЙ)`](<../ATTRIBUTES FORM/multiple (ВЫБОР НЕСКОЛЬКИХ ЗНАЧЕНИЙ).md>)
- [`pattern (РЕГУЛЯРНОЕ ВЫРАЖЕНИЕ)`](<../ATTRIBUTES FORM/pattern (РЕГУЛЯРНОЕ ВЫРАЖЕНИЕ).md>)
- [`placeholder (ПОДСКАЗКА ВВОДА)`](<../ATTRIBUTES FORM/placeholder (ПОДСКАЗКА ВВОДА).md>)
- [`readonly (ТОЛЬКО ДЛЯ ЧТЕНИЯ)`](<../ATTRIBUTES FORM/readonly (ТОЛЬКО ДЛЯ ЧТЕНИЯ).md>)
- [`required (ОБЯЗАТЕЛЬНОЕ ПОЛЕ)`](<../ATTRIBUTES FORM/required (ОБЯЗАТЕЛЬНОЕ ПОЛЕ).md>)
- [`size (ШИРИНА ПОЛЯ ИЛИ ЧИСЛО ОПЦИЙ)`](<../ATTRIBUTES FORM/size (ШИРИНА ПОЛЯ ИЛИ ЧИСЛО ОПЦИЙ).md>)
- [`step (ШАГ ИЗМЕНЕНИЯ INPUT)`](<../ATTRIBUTES FORM/step (ШАГ ИЗМЕНЕНИЯ INPUT).md>)
- [`type (ТИП INPUT)`](<../ATTRIBUTES FORM/type (ТИП INPUT).md>)
- [`value (ЗНАЧЕНИЕ ПОЛЯ)`](<../ATTRIBUTES FORM/value (ЗНАЧЕНИЕ ПОЛЯ).md>)

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
