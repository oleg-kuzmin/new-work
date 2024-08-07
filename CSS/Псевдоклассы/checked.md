# [`:checked`](../index.md)

Псевдокласс, который активируется, когда пользователь отмечает чекбокс или выбирает одну из радиокнопок.

С его помощью удобно стилизовать эти элементы в их активном состоянии.

Браузер присваивает чекбоксу или радиокнопке псевдокласс `:checked`, когда они отмечены. Мы можем использовать это для стилизации элемента.

Этот псевдокласс есть только у тех элементов, которые можно отметить: `<input type="checkbox">`, `<input type="radio">`.

По задумке должен работать и с `<option>`, но поскольку выпадающий список сильно отличается от системы к системе и от браузера к браузеру, то пока работает только в браузере Chrome на Windows.

## Пример

### `checkbox`

```css
.checkbox:checked + .checkbox-title::after {
  content: '';
  position: absolute;
  left: 6px;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  rotate: 45deg;
  border-radius: 3px;
  background-color: #2e9aff;
}
```

### `radio`

```css
.radio:checked + .radio-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 12px);
  width: 25px;
  height: 25px;
  background: radial-gradient(circle, #2e9aff 0%, #2e9aff 40%, transparent 50%, transparent 100%);
}
```
