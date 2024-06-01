# `disabled`

С помощью атрибута `disabled` можно отключать интерактивные элементы форм. Пока этот атрибут есть, с элементом нельзя будет взаимодействовать.

Это булевый атрибут. Само его наличие говорит браузеру, что элемент нужно отключить.

Атрибут `disabled` делает элемент неактивным: с ним нельзя взаимодействовать, кликнуть на него, на нём нельзя сфокусироваться, отключённое поле не будет отправлено вместе с остальными полями формы.

Атрибут срабатывает не только на самом элементе, но и на всех его потомках.

Наличие атрибута `disabled` отключает влияние атрибутов `required` и `pattern`. Потому что значение неактивного поля не может быть изменено, браузер экономит время на их проверке.

Элемент с атрибутом `disabled` можно стилизовать при помощи псевдокласса `:disabled`. По умолчанию браузер делает их серыми и менее контрастными.

Атрибут `disabled` не дает пользователю изменять поле (вводить новый текст, модифицировать существующий). Нельзя поставить фокус в это поле, введенное значение нельзя выделять и копировать. Данные из этого поля НЕ отправляются на сервер.

## Применяется к тегам

- [`<button>`](<../TAGS FORM/button.md>) кнопка
- [`<input>`](<../TAGS FORM/input.md>) поле ввода
- [`<fieldset>`](<../TAGS FORM/fieldset.md>) группировка элементов
- [`<optgroup>`](<../TAGS FORM/optgroup.md>) группирует option
- [`<option>`](<../TAGS FORM/option.md>) пункт списка
- [`<select>`](<../TAGS FORM/select.md>) выпадающий список
- [`<textarea>`](<../TAGS FORM/textarea.md>) многострочное поле ввода

## Пример

### `<button>`

```html
<button disabled>Отправить</button>
```

### `<input>`

```html
<input type="text" disabled />
```

### `<fieldset>`

```html
<fieldset disabled>
  <label>
    Имя:
    <input type="text" />
  </label>
  <label>
    Телефон:
    <input type="tel" />
  </label>
</fieldset>
```

### `<optgroup>`

```html
<optgroup label="Группа вариантов 1" disabled>
  <option value="1">Вариант 1</option>
  <option value="2">Вариант 2</option>
  <option value="3">Вариант 3</option>
</optgroup>
```

### `<option>`

```html
<optgroup label="Группа вариантов 1">
  <option value="1" disabled>Вариант 1</option>
  <option value="2">Вариант 2</option>
  <option value="3">Вариант 3</option>
</optgroup>
```

### `<select>`

```html
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

### `<textarea>`

```html
<textarea disabled></textarea>
```
