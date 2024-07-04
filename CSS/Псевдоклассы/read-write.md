# [`:read-write`](../index.md)

Псевдокласс `:read-write` показывает что элемент, например, `<input>` или `<textarea>`, изменяется.

Элементы, к которым применяется псевдокласс `:read-write`:

- `<input>`, `<textarea>` — элементы доступны для изменения (без атрибутов `:read-only` или `disabled`).
- любой другой элемент, у которого установлен атрибут `contenteditable`.

Псевдокласс `:read-write` поддерживается в Chrome, Safari и Opera. Firefox поддерживает псевдокласс со специальным префиксом -moz-.

## Пример

```css
input:read-write,
input:-moz-read-write {
  border: 1px solid red;
}
```
