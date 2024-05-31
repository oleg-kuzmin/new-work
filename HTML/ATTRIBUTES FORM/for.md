# `for`

Значением может быть один или несколько ID, разделённые пробелом.

Указывает на связь элементов ввода (например, `<input>`) с элементом.

## Применяется к тегам

- [`<output>`](<../TAGS UI/output.md>) результат вычислений, действий
- [`<label>`](<../TAGS FORM/label.md>) ярлык к элементу формы

## Пример

### `<output>`

```html
<form>
  <label for="people-num">Для скольких людей приготовить яичницу:</label>
  <input type="number" id="people-num" name="people" oninput="eggs.value = (parseInt(people.value) * 2)" />
  <p>Необходимое количество яиц:</p>
  <output role="status" name="eggs" for="people-num"></output>
</form>
```

### `<label>`

Значение этого атрибута должно соответствовать значению атрибута id связываемого элемента. Первый же элемент в документе, чей id будет совпадать со значением атрибута for, становится связанным с нашим `<label>`. Единственное условие — элемент должен принадлежать к группе связываемых элементов: `<button>`, `<input>`, `<meter>`, `<output>`, `<progress>`, `<select>` и `<textarea>`.

```html
<label for="username">Click me</label> <input type="text" id="username" />
```
