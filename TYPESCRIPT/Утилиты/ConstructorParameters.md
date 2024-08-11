# [`ConstructorParameters`](../index.md)

Принимает тип класса. Возвращает кортеж полей конструктора.

## Синтаксис

```ts
ConstructorParameters<typeof С>;
```

### `С`

Класс.

## Пример

```ts
class Car {
  constructor(brand: string, model: string) {}
}

type T3 = ConstructorParameters<typeof Car>;
```
