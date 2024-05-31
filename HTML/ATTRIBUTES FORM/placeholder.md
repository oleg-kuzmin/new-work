# `placeholder`

Атрибут, который подсказывает пользователю, что именно нужно ввести в поле ввода (обычно это пример слова или фразы). Выглядит это как будто поле уже заполнено, только гораздо бледнее. А ещё значение атрибута исчезает, как только пользователь начинает вводить текст.

Внешний вид можно стилизовать при помощи псевдоэлемента `::placeholder`.

Атрибут `placeholder` можно задать для `<textarea>` и `<input>`. Атрибут работает со следующими типами:

- `type="text"`
- `type="tel"`
- `type="email"`
- `type="url"`
- `type="password"`
- `type="search"`

## Применяется к тегам

- [`<input>`](<../TAGS FORM/input.md>) поле ввода
- [`<textarea>`](<../TAGS FORM/textarea.md>) многострочное поле ввода

## Пример

### `<input>`

```html
<label for="password">
  <input type="text" id="password" placeholder="Введите пароль" />
</label>
```

### `<textarea>`

```html
<textarea placeholder="Введите текст"></>
```
