# [`Uppercase`](../index.md)

Принимает в качестве дженерика строку с литералом и превращает в Uppercase (все буквы большие).

## Синтаксис

```ts
Uppercase<S>;
```

### `S`

Строка литерала.

## Пример

```ts
type Side = 'top' | 'right' | 'bottom' | 'left';
type Margin = `margin${Uppercase<Side>}`; // 'marginTOP' | 'marginRIGHT' | 'marginBOTTOM' | 'marginLEFT'
type Padding = `padding${Uppercase<Side>}`; // 'paddingTOP' | 'paddingRIGHT' | 'paddingBOTTOM' | 'paddingLEFT'
```
