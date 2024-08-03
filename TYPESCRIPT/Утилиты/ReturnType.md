# [`ReturnType`](../index.md/#утилиты)

Определяет тип возвращаемого значения функции.

## Синтаксис

```ts
ReturnType<T>;
```

### `T`

Изначальный тип.

## Возвращает

Новый тип.

## Пример

```ts
type returnFn = ReturnType<typeof average>;
```
