# `outline-offset`

Свойство `outline-offset` устанавливает расстояние между фактическим краем элемента и внутренним краем обводки, заданной при помощи outline.

Расстояние между границей элемента или его рамкой и обводкой прозрачное. Нет возможности его закрасить.

## Пример

```css
.element {
  outline-offset: 10px;
}
```

## Значения

### `outline-offset: 10px`

В качестве значения можно указать положительное или отрицательное число в любых доступных единицах измерения. Если значение отрицательное, то обводка будет отображаться внутри элемента.

### `outline-offset: 0`

Если свойство `outline-offset` не прописано или ему задано значение `0`, то обводка будет располагаться вплотную к `border` или границе элемента.