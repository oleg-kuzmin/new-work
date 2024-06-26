<link rel="stylesheet" href="../../VSCODE/markdown.css">

# `:default`

Псевдокласс `:default` применяется к элементам, которые используются по умолчанию в группе аналогичных элементов.

Этот псевдокласс можно применить к следующим элементам:

- теги `<option>` с атрибутом `selected`;
- радиокнопки и чекбоксы `<input>` с атрибутом `selected`;
- первая кнопка отправки формы. Такой кнопкой может быть первый тег `<button>` или первый тег `<input>` с типом `image` или `submit`.

## Пример

```css
option:default {
  background-color: #f498ad;
}

input:default {
  border-color: #f498ad;
}

button:default {
  background-color: #f498ad;
}
```
