# `<button>` (Кнопка)

- `<button>` создаёт кликабельную кнопку.
- С помощью CSS можно настроить внешний вид кнопки `<button>` и текста на ней: шрифт, размер, цвет фона и другие параметры. А если ничего не менять, то `<button>` будет выглядеть, как стандартная браузерная кнопка.
- На кнопку можно поместить любой HTML-элемент.
- Тег `<input>` с атрибутом `type="button | reset | submit"` тоже создаёт кнопку, но `<button>` проще стилизовать, так как внутрь `<button>` можно добавить любой HTML-контент, например, `<em>`, `<strong>` или `<img>`.
- Если создаёте кнопку, которая не отправляет ничего на сервер, убедитесь, что задан атрибут type, иначе может вылезти ошибка.
- В любой ситуации, где вам нужно выбирать, кнопка это или ссылка, выберите кнопку (`<button>`). Если вы можете дать какой-то адрес для перенаправления — тогда это ссылка (`<a href="">`). Всегда начинайте с кнопки.

## Пример

### Прямая связь с элементом формы

```html
<form class="form">
  <button name="button">Нажми меня</button>
</form>
```

### Связь с элементом формы через атрибут for

```html
<form id="login">
  <label>
    Введите ваш email
    <input type="email" placeholder="Ваш email" />
  </label>
</form>
<button type="submit" form="login">Отправить</button>
```

## Атрибуты

- [`autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ)`](<../ATTRIBUTES FORM/autofocus.md>)
- [`disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES FORM/disabled.md>)
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form.md>)
- [`formaction (ОБРАБОТЧИК ФОРМЫ)`](<../ATTRIBUTES FORM/formaction.md>)
- [`formenctype (ТИП ШИФРОВАНИЯ ДАННЫХ)`](<../ATTRIBUTES FORM/formenctype.md>)
- [`formmethod (МЕТОД ОТПРАВКИ ФОРМЫ)`](<../ATTRIBUTES FORM/formmethod.md>)
- [`formnovalidate (ОТКЛЮЧАЕТ ВАЛИДАЦИЮ)`](<../ATTRIBUTES FORM/formnovalidate.md>)
- [`formtarget (ОТОБРАЖЕНИЕ ПОСЛЕ SUBMIT)`](<../ATTRIBUTES FORM/formtarget.md>)
- [`name (ИМЯ)`](<../ATTRIBUTES FORM/name.md>)
- [`type (ТИП BUTTON)`](<../ATTRIBUTES FORM/type (BUTTON).md>)
- [`value (ЗНАЧЕНИЕ ПОЛЯ)`](<../ATTRIBUTES FORM/value.md>)
