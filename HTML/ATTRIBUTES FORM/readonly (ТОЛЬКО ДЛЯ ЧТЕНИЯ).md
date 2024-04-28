# `readonly` (Только для чтения)

Атрибут `readonly` добавляется полям формы, которые пользователь не сможет редактировать. Они будут доступны только для чтения.

Атрибут `readonly` булевый, его можно добавить со значением: `readonly="readonly"`, или без него — `<input type="text" readonly>`.

Также для полей с атрибутом `readonly` не сработает атрибут `required`.

Есть разница между `disabled` и `readonly`. Так, поля, доступные только для чтения (`readonly`), по-прежнему могут получать фокус и будут отправляться вместе с формой в отличие от неактивных полей (`disabled`).

Поле с атрибутом `readonly` можно стилизовать при помощи псевдокласса `:read-only`, а поля без этого атрибута - `:read-write`.

Атрибут `readonly` не дает пользователю изменять поле (вводить новый текст, модифицировать существующий). Введенное значение можно выделить и скопировать. Данные из этого поля отправляются на сервер.

Атрибут `readonly` можно использовать для `<textarea>` и `<input>` со следующими типами:

- `type="text"`
- `type="search"`
- `type="url"`
- `type="tel"`
- `type="email"`
- `type="password"`
- `type="date"`
- `type="month"`
- `type="week"`
- `type="time"`
- `type="datetime-local"`
- `type="number"`

Не используется:

- с тегом `<select>`
- c любым типом кнопок (даже если это изображение)
- если у поля есть атрибут `hidden`

## Применяется к тегам

- [`<input> (ПОЛЕ ВВОДА)`](<../TAGS FORM/input (ПОЛЕ ВВОДА).md>)
- [`<textarea> (МНОГОСТРОЧНОЕ ПОЛЕ ВВОДА)`](<../TAGS FORM/textarea (МНОГОСТРОЧНОЕ ПОЛЕ ВВОДА).md>)

## Пример

### `<input>`

```html
<form>
  <div class="group">
    <input type="date" value="1995-04-04" readonly="readonly" id="date" />
    <label for="date">Дата рождения</label>
  </div>
</form>
```

### `<textarea>`

```html
<textarea value="about" readonly="readonly" id="about"></textarea>
```
