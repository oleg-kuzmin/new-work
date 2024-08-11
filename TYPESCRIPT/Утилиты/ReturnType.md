# [`ReturnType`](../index.md)

Определяет тип возвращаемого значения функции.

## Синтаксис

```ts
ReturnType<typeof F>;
```

### `F`

Функция.

## Пример

```ts
type returnFn = ReturnType<typeof average>;
```
