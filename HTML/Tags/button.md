# `<button>`

`<button>` создаёт кликабельную кнопку.

С помощью CSS можно настроить внешний вид кнопки `<button>` и текста на ней: шрифт, размер, цвет фона и другие параметры. А если ничего не менять, то `<button>` будет выглядеть, как стандартная браузерная кнопка.

На кнопку можно поместить любой HTML-элемент.

Тег `<input>` с атрибутом `type="button | reset | submit"` тоже создаёт кнопку, но `<button>` проще стилизовать, так как внутрь `<button>` можно добавить любой HTML-контент, например, `<em>`, `<strong>` или `<img>`.

Если создаёте кнопку, которая не отправляет ничего на сервер, убедитесь, что задан атрибут `type`, иначе может вылезти ошибка.

В любой ситуации, где вам нужно выбирать, кнопка это или ссылка, выберите кнопку (`<button>`). Если вы можете дать какой-то адрес для перенаправления — тогда это ссылка (`<a href="">`). Всегда начинайте с кнопки.

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

- [`autofocus`](../../ATTRIBUTES/FORM/autofocus.md) фокус при загрузке страницы
- [`disabled`](../../ATTRIBUTES/FORM/disabled.md) отключает элемент
- [`form`](../../ATTRIBUTES/FORM/form.md) связь с формой
- [`formaction`](../../ATTRIBUTES/FORM/formaction.md) переопределяет обработчик формы
- [`formenctype`](../../ATTRIBUTES/FORM/formenctype.md) переопределяет тип шифрования данных
- [`formmethod`](../../ATTRIBUTES/FORM/formmethod.md) переопределяет метод отправки формы
- [`formnovalidate`](../../ATTRIBUTES/FORM/formnovalidate.md) переопределяет отключение валидации
- [`formtarget`](../../ATTRIBUTES/FORM/formtarget.md) переопределяет отображение после submit
- [`name`](../../ATTRIBUTES/FORM/name.md) имя
- [`type`](<../../ATTRIBUTES/FORM/type (BUTTON).md>) тип button
- [`value`](../../ATTRIBUTES/FORM/value.md) значение поля ввода
