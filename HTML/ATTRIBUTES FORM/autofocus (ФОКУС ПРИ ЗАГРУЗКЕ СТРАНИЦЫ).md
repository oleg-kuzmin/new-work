# `autofocus` (Фокус при загрузке страницы)

Атрибут булевого типа (без значения, либо атрибут есть в теге, либо его нет совсем). Если он указан, то при загрузке страницы фокус будет автоматически помещён в данное поле ввода.

Пользователю не нужно специально нажимать на этот элемент, чтобы начать в нём что-то писать.

В фокусе может быть только один элемент на странице, но это не может быть элемент типа hidden.

## Применяется к тегам

- [`<button>`](<../TAGS FORM/button (КНОПКА).md>)
- [`<input>`](<../TAGS FORM/input (ПОЛЕ ВВОДА).md>)
- [`<select>`](<../TAGS FORM/select (ВЫПАДАЮЩИЙ СПИСОК).md>)

## Пример

### `<button>`

```html
<button autofocus>Отправить форму</button>
```

### `<input>`

```html
<input type="submit" autofocus />
```

### `<select>`

```html
<form>
  <label for="city-select">Ваш город</label>
  <select name="city" id="city-select" autofocus>
    <option value="">-- Выберите город --</option>
    <option value="petersburg">Санкт-Петербург</option>
    <option value="samara">Самара</option>
    <option value="perm">Пермь</option>
    <option value="novosibirsk">Новосибирск</option>
  </select>
</form>
```
