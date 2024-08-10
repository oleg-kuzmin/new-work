# [`Exclude`](../index.md)

Исключает из union переданные типы.

## Синтаксис

```ts
Exclude<T, U>;
```

### `T`

Union из каких-то типов.

### `U`

Либо одно значение, либо union. Если передать значение, которого в union T нету - ошибки не будет.

## Пример

### Пример 1

```ts
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // : a | b
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // : c
type T2 = Exclude<string | number | (() => void), Function>; // : string | number
```

### Пример 2

```ts
type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504; // all
type NumericStatus = Exclude<Status, string>; // : 200 | 401 | 504
type TextStatus = Exclude<Status, number>; // : 'success' | 'clientError' | 'serverError'
```
