# [`Capitalize`](../index.md)

Принимает в качестве дженерика строку с литералом. И превращает в Capitalize (Первая буква большая).

## Синтаксис

```ts
Capitalize<S>;
```

### `S`

Строка литерала.

## Пример

### Пример 1

```ts
type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin${Capitalize<Side>}`; // 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft'
type Padding = `padding${Capitalize<Side>}`; // 'paddingTop' | 'paddingRight' | 'paddingBottom' | 'paddingLeft'
```

### Пример 2

```ts
type Direction = 'down' | 'left' | 'right' | 'up';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`;
```
