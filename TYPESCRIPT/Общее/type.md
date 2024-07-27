# [`type`](../index.md)

Создает псевдоним (allas) для какого-то типа. Вместо длинной аннотации вида `string[]`, можно создать `type ArrayString = string[]` и указывать именно его после двоеточия.

Вместо интерфейса для объекта также можно использовать `type`. Интерфейсы хранят описание объекты, а типы могут хранить что угодно, в том числе возможные комбинации.

`type` указываются с большой буквы.

## Пример

### type из двух типов

```ts
type MyBoolean = true | false;
```

### комбинация type

```ts
type Pair = [string, string];
type Pairs = Pair[];
```

### type для объекта

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

### составной type

Можно указывать при создании типа или при типизации чего-либо (аргумента, параметра и т.д.).

```ts
type MyType = MyBoolean & Level;
```
