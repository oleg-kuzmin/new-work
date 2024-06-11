# `list`

Перед использованием списка подсказок элемент `<datalist>` нужно связать с элементом `<input>` через атрибут `list`.

Элемент `<input>` не будут работать с элементом `<datalist>`, если у `<input>` одно из следующих значений атрибута `type`:

- `type="hidden"`
- `type="password"`
- `type="checkbox"`
- `type="radio"`
- `type="file"`
- `type="submit"`
- `type="image"`
- `type="reset"`
- `type="button"`

## Применяется к тегам

- [`<input>`](../../TAGS/FORM/input.md) поле ввода

## Пример

```html
<input list="fruits" />
<datalist id="fruits">
  <option value="Банан">Банан</option>
  <option value="Арбуз">Арбуз</option>
  <option value="Киви">Киви</option>
</datalist>
```
