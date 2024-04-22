# `label` (Подпись optgroup или option)

Обязательный атрибут. Имя группы будет отображено в выпадающем списке. Теоретически мы можем оставить атрибут пустым или не использовать его вообще, но в таком случае над списком будет пустое пространство.

## Применяется к тегам

- [`<optgroup>`](<../TAGS FORM/optgroup (ГРУППИРУЕТ OPTION).md>)
- [`<option>`](<../TAGS FORM/option (ПУНКТ СПИСКА).md>)

## Пример

### `<optgroup>`

```html
<select>
  <optgroup label="Необычные цветы" disabled>
    <option>Ангулоя одноцветковая</option>
    <option>Обезьяний дракула</option>
    <option>Пассифлора инкарнатная</option>
  </optgroup>
</select>
```

### `<option>`

Значение этого атрибута задаёт текст пункта в списке. Если атрибут не задан, то в качестве значения берётся текстовое содержимое тега `<option>`.

Несмотря на то, что задано текстовое содержимое тега `<option>`, в выпадающем списке отображаются значения из атрибутов label.

```HTML
<select name="city">
  <option value="petersburg" selected label="Ленинград">
    Санкт-Петербург
  </option>
  <option value="samara" label="Куйбышев">
    Самара
  </option>
  <option value="volgograd" label="Сталинград">
    Волгоград
  </option>
  <option value="ekaterinburg" label="Свердловск">
    Екатеринбург
  </option>
</select>
```
