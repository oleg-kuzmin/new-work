# [`type (Псевдоним)`](../index.md)

Создает псевдоним (allas) для какого-то типа. Вместо длинной аннотации вида `string[]`, можно создать `type ArrayString = string[]` и указывать именно его после двоеточия.

Вместо интерфейса для объекта также можно использовать `type`. Интерфейсы хранят описание объекты, а типы могут хранить что угодно, в том числе возможные комбинации.

`type` указываются с большой буквы.

```ts
type MyBoolean = false | true;

type DiffCar = {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string]: unknown;
};
```
