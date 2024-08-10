# [`NonNullable`](../index.md)

Исключает из переданного union пустые значения.

## Синтаксис

```ts
NonNullable<T>;
```

### `T`

Union из каких-то типов.

## Пример

### Пример 1

```ts
type T1 = NonNullable<string | number | undefined>; // : string | number
```

### Пример 2

```ts
type T2 = NonNullable<string[] | null | undefined>; // : string[]
```
