# [`type`](../index.md)

Создает псевдоним (allas) для какого-то типа. Вместо длинной аннотации вида `string[]`, можно создать `type ArrayString = string[]` и указывать именно его после двоеточия.

Вместо интерфейса для объекта также можно использовать `type`. Интерфейсы хранят описание объекты, а типы могут хранить что угодно, в том числе возможные комбинации.

`type` указываются с большой буквы. Нельзя расширить за счет одинаковых имен, как в интерфейсах.

## Пример

### Пример union

```ts
type MyBoolean = true | false;
```

### Объект

```ts
type DiffCar = {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string]: unknown;
};
```

### Комбинация type

```ts
type Pair = [string, string];
type Pairs = Pair[];
```

- Знак `|` вернет объединенный тип
- Знак `&` вернет тип с одинаковыми значениями (только для union) или вернет объединенный тип (для объектов)

```ts
//  union
type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // 'a' | 'b' | 'c' | 'd' | 'e' | 'i'
type Union3 = Union1 & Union2; // 'a' | 'c'

// object
type Union5 = { a: string; b: string; c: number } & { a: string; t: boolean; z: null };
// a | b | c | t | z
```

### Расширение type

```ts
type Employee = {
  contractStart: Date;
} & User &
  Person;
```
