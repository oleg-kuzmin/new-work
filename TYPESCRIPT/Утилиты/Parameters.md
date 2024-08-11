# [`Parameters`](../index.md)

Принимает тип функции. Возвращает кортеж типов аргументов.

## Синтаксис

```ts
Parameters<typeof F>;
```

### `F`

Функция.

## Пример

```ts
function f1(arg: { a: number; b: number }) {
  return arg.a + arg.b;
}

type T1 = Parameters<typeof f1>;
```
