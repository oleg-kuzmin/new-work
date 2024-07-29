# [`ReturnType`](../index.md)

Определяет тип возвращаемого значения функции.

## Синтаксис

```ts
ReturnType<T>;
```

### `T`

Изначальный тип.

## Пример

```ts
type returnFn = ReturnType<typeof average>;
```
