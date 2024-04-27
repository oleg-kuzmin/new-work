# `<select>` (Выпадающий список)

Элемент `<select>` используется, когда нужно показать выпадающий список.

В примере показано типовое использование элемента `<select>`. Это своего рода обёртка над списком опций, которые задаются тегом `<option>`. Чтобы иметь возможность отправить выбранное значение на сервер, необходимо выполнить несколько условий:

1. задать тегу `<select>` атрибут `name`;
2. задать каждому тегу `<option>` атрибут `value`. Если этот атрибут не задан, то его значение будет равно текстовому содержимому тега `<option>`.

Если нужно, чтобы изначально был выбран какой-то элемент из списка, нужно задать соответствующему тегу `<option>` атрибут `selected`.

Внутри тега `<select>` могут использоваться только теги `<option>` и `<optgroup>`.

## Пример

```html
<form>
  <label for="city-select">Ваш город</label>
  <select name="city" id="city-select">
    <option value="">-- Выберите город --</option>
    <option value="petersburg">Санкт-Петербург</option>
    <option value="samara">Самара</option>
    <option value="perm">Пермь</option>
    <option value="novosibirsk">Новосибирск</option>
  </select>
</form>

<form>
  <select>
    <optgroup label="Необычные цветы">
      <option>Ангулоя одноцветковая</option>
      <option>Обезьяний дракула</option>
      <option>Пассифлора инкарнатная</option>
    </optgroup>
  </select>
</form>
```

## Атрибуты

- [`autocomplete (АВТОЗАПОЛНЕНИЕ)`](<../ATTRIBUTES FORM/autocomplete (АВТОЗАПОЛНЕНИЕ).md>)
- [`autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ)`](<../ATTRIBUTES FORM/autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ).md>)
- [`disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES FORM/disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ).md>)
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form (СВЯЗЬ С ФОРМОЙ).md>)
- [`required (ОБЯЗАТЕЛЬНОЕ ПОЛЕ)`](<../ATTRIBUTES FORM/required (ОБЯЗАТЕЛЬНОЕ ПОЛЕ).md>)
- [`size (ШИРИНА ПОЛЯ ИЛИ ЧИСЛО ОПЦИЙ)`](<../ATTRIBUTES FORM/size (ШИРИНА ПОЛЯ ИЛИ ЧИСЛО ОПЦИЙ).md>)

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
