# [`type (расширение)`](../index.md/#специальные-типы)

## Расширение type с помощью знака `|`

Знак `|` вернет объединенный type.

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
type Union3 = Union1 & Union2; // 'a' | 'c'
```

## Расширение type для объектов с помощью знака `&`

Для объектов вернется объединенный тип.

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
