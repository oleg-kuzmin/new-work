# `size`

Атрибутом `size` можно задать ширину поля `<input>` в символах или количество видимых опций списка в случае `<select>`.

Если шрифт будет не моноширинный, выставить ширину для `<input>` с помощью атрибута `size` окажется затруднительно — внутрь поля ввода может поместиться непредсказуемое число символов.

Если поставить в теге `<select>` атрибут `multiple` и задать `size="1"`, из списка получится обыкновенная «прокрутка».

Хотя атрибут `size` выглядит удобным, использовать его для `<input>` следует с осторожностью. Порой даже с моноширинными шрифтами он может сделать что-то странное, растягивая поле ввода на неожиданное число символов.

В случае `<input>` задать ширину с помощью атрибута `size` можно не для всех типов ввода. Подойдут лишь те, что принимают текстовые данные:

- `type="text"`
- `type="password"`
- `type="email"`
- `type="url"`
- `type="tel"`
- `type="search"`

## Применяется к тегам

- [`<input>`](../../TAGS/FORM/input.md) поле ввода
- [`<select>`](../../TAGS/FORM/select.md) выпадающий список

## Пример

### `<input>`

```html
<label for="input-field">
  <input id="input-field" size="9" placeholder="123456789" />
</label>
```

### `<select>`

```html
<label for="city-select">Ваш город:</label>
<select id="city-select" size="3">
  <option value="novosibirsk">Калининград</option>
  <option value="petrozavodsk">Петрозаводск</option>
  <option value="petrozavodsk">Зеленоград</option>
  <option value="petersburg">Санкт-Петербург</option>
  <option value="samara">Самара</option>
  <option value="perm">Пермь</option>
</select>
```
