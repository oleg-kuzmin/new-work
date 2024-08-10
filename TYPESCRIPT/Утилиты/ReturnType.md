# [`ReturnType`](../index.md)

Определяет тип возвращаемого значения функции.

## Синтаксис

```ts
ReturnType<T>;
```

### `T`

Тип функции.

## Возвращает

Новый тип.

## Пример

```ts
type returnFn = ReturnType<typeof average>;
```
