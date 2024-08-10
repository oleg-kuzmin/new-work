# [`Extract`](../index.md)

Извлекает из union переданные типы.

## Синтаксис

```ts
Extract<T, U>;
```

### `T`

Union из каких-то типов.

### `U`

Либо одно значение, либо union. Если передать значение, которого в union T нету - ошибки не будет.

## Пример

### Пример 1

```ts
type T0 = Extract<'a' | 'b' | 'c', 'a'>; // : a
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'b'>; // : a | b
type T2 = Extract<string | number | (() => void), Function>; // : () => void
```

### Пример 2

```ts
interface Person {
  age: number;
  firstName: string;
  lastName: string;
  sex: 'male' | 'female';
  country: string;
  education: string;
  skills: string[];
}

type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>; // : 'firstName' | 'lastName'
```
