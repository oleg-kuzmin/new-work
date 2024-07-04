# [`<select>`](../index.md)

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

- [`autocomplete`](../Attrubutes/autocomplete.md) автозаполнение
- [`autofocus`](../Attrubutes/autofocus.md) фокус при загрузке страницы
- [`disabled`](../Attrubutes/disabled.md) отключает элемент
- [`form`](../Attrubutes/form.md) связь с формой
- [`required`](../Attrubutes/required.md) обязательное поле
- [`size`](../Attrubutes/size.md) ширина поля или число опций
