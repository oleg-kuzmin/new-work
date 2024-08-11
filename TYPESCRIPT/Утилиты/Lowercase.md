# [`Lowercase`](../index.md)

Принимает в качестве дженерика строку с литералом и превращает в Lowercase (все буквы маленькие).

## Синтаксис

```ts
Lowercase<S>;
```

### `S`

Строка литерала.

## Пример

```ts
type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin${Lowercase<Side>}`; // 'margintop' | 'marginright' | 'marginbottom' | 'marginleft'
type Padding = `padding${Lowercase<Side>}`; // 'paddingtop' | 'paddingright' | 'paddingbottom' | 'paddingleft'
```
