# [`Uncapitalize`](../index.md)

Принимает в качестве дженерика строку с литералом и превращает в Uncapitalize (первая буква маленькая).

## Синтаксис

```ts
Uncapitalize<S>;
```

### `S`

Строка литерала.

## Пример

```ts
type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin${Uncapitalize<Side>}`; // 'margintop' | 'marginright' | 'marginbottom' | 'marginleft'
type Padding = `padding${Uncapitalize<Side>}`; // 'paddingtop' | 'paddingright' | 'paddingbottom' | 'paddingleft'
```
