# [`ReturnType`](../index.md)

Определяет тип возвращаемого значения функции.

## Синтаксис

```ts
ReturnType<T>;
```

### `T`

Тип функции.

## Пример

```ts
type returnFn = ReturnType<typeof average>;
```
