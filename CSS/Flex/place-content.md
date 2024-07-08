# [`place-content`](../index.md)

- [`align-content`](./align-content.md) расположение строк поперечная ось
- [`justify-content`](./justify-content.md) расположение элементов основная ось

Удобство `place-content` в краткости записи и универсальности: при его использовании не нужно выравнивать элементы отдельными свойствами для разных осей.

Не любой флекс-контейнер подружится с `place-content`, для этого он обязательно должен быть многострочным! С этим поможет свойство `flex-wrap` в значении `wrap` или `wrap-reverse`.

## Пример

```css
.flex-container {
  place-content: center;
}
```

## Синтаксис

### `place-content: [align-content, justify-content]`

### `place-content: [align-content] [justify-content]`

## Значения

### `place-content: center`

1 значение: align-content, justify-content.

## `place-content: space-around end`

2 значения: align-content, justify-content.
