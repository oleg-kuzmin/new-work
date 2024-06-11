# `<datalist>`

_(data list: список данных)_

Элемент `<datalist>` — это источник предложений, то есть такой элемент, который содержит предопределённые варианты выбора для пользователя. В основном за варианты выбора опций выступают элементы `<option>`.

Перед использованием элемент `<datalist>` нужно связать с элементом `<input>` через атрибут `list`.

Элемент `<datalist>` не сработает, если между элементами `<input>` и `<datalist>` будет любой другой элемент c id. Даже если это сам `<input>` со значением, которое равно значению атрибута `list` элемента `<input>`.

Элемент `<datalist>` не отображается браузерами, его значение display по умолчанию none. `<datalist>` просто содержит набор каких-то предопределённых вами вариантов выбора — опций. Их можно будет выбрать из выпадающего списка после того, как свяжите их с `<input>`. Эти значения будут по-разному отображаться в зависимости от значения атрибута type у `<input>`.

Элемент `<datalist>` можно связать с элементом `<input>` только через атрибут list, но этот атрибут поддерживается не всеми интерактивными элементами.

Элемент `<input>` НЕ БУДЕТ работать с элементом `<datalist>`, если у `<input>` одно из следующих значений атрибута type:

- `type="hidden"`
- `type="password"`
- `type="checkbox"`
- `type="radio"`
- `type="file"`
- `type="submit"`
- `type="image"`
- `type="reset"`
- `type="button"`

## Пример

```html
<form>
  <label for="my-browser">Выберите браузер из списка:</label>
  <input type="text" list="browsers" id="my-browser" name="my-browser" />
  <datalist id="browsers">
    <option value="Chrome"></option>
    <option value="Firefox"></option>
    <option value="Yandex Browser"></option>
    <option value="Opera"></option>
    <option value="Safari"></option>
    <option value="Microsoft Edge"></option>
  </datalist>
</form>
```
