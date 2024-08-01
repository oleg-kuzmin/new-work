# [`ReturnType`](../index.md)

Определяет тип возвращаемого значения функции.

- [Синтаксис](#синтаксис)
- [Возвращает](#возвращает)
- [Пример](#пример)

## [Синтаксис](#returntype)

```ts
ReturnType<T>;
```

### `T`

Изначальный тип.

## [Возвращает](#returntype)

Новый тип.

## [Пример](#returntype)

```ts
type returnFn = ReturnType<typeof average>;
```
