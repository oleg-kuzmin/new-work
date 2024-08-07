# [`type (расширение)`](../index.md)

## Расширение type с помощью знака `|`

Знак `|` вернет объединенный type.

```ts
type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // 'a' | 'b' | 'c' | 'd'
```

```ts
type User = {
  name: string;
  age: string;
  skills: string[];
};

type Role = {
  id: number;
};

type UserWithRole = User | Role; // : name | age | skills | id
```

## Расширение type для union с помощью знака `&`

Вернет тип только с одинаковыми значениями.

```ts
type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 & Union2; // : 'a' | 'c'
```

## Расширение type для объектов с помощью знака `&`

Для объектов вернется объединенный тип.

```ts
type Union1 = { a: string; b: string; c: number } & { a: string; t: boolean; z: null };
// : { a, b, c, t, z }
```

```ts
type User = {
  name: string;
  age: string;
  skills: string[];
};

type Role = {
  id: number;
};

type UserWithRole = User & Role; // name | age | skills | id
```

```ts
type Employee = {
  contractStart: Date;
} & User &
  Person;
```
