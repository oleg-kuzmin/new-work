# [`Capitalize`](../index.md)

Принимает в качестве дженерика строку с литералом и превращает в Capitalize (первая буква большая).

## Синтаксис

```ts
Capitalize<S>;
```

### `S`

Строка литерала.

## Пример

```ts
type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin${Capitalize<Side>}`; // 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'
type Padding = `padding${Capitalize<Side>}`; // 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft'
```
