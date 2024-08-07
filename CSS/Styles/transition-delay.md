# [`transition-delay`](../index.md)

Если нужно плавно изменить какое-то CSS-свойство, но запустить изменение не сразу, а с задержкой, то используем `transition-delay`.

## Пример

```css
.element {
  transition-property: color, padding;
  transition-delay: 0.5s, 0;
}
```

## Значения

### `transition-delay: 3s`

Значение может задаваться в секундах или в миллисекундах. Ноль перед точкой можно не писать (.3s).

### `transition-delay: 2s, 4ms`

Несколько значений в секундах и миллисекундах. Каждой значение соотносится к соответствующему свойству `transition-property`.
