# [`generics`](../index.md)

`generics` нужны для облегчения создания, например для передачи динамического параметра. По соглашению дженерики пишутся в одну букву.

## Пример

### Создание типа с дженериком `<T>`

```ts
type TypeFactory<T> = T;
type XType = TypeFactory<string>;
```

### Создание интерфейса с дженериком `<T>`

```ts
interface ModelData<T> {
  title: string;
  value: T;
}
```

### Создание функции с дженериком `<T>`

```ts
function toArray<T>(...arg: T[]): T[] {
  return arg;
}
toArray(1, 2, 3); // неявно будет number
toArray<number>(1, 2, 3); // можно указать явно number
toArray('ad', 'asd');
```

```ts
function head(value: string): string;
function head(value: []): undefined;
function head<T>(value: T[]): T;
function head(value: any): any {
  return value[0];
}
head(['12q', 'asas']);

const head = <T>(value: T[]): T => value[0];
```

```ts
function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}
```

## Constraints (ограничения)

По факту `<T>` имеет тип `any`, но он заменяется в момент вызова. Ограничения накладываются за счет ключевого слова `extends`.

`extends { length: number }` - соответствие определенной структуре. Валидны будут те элементы, которые имеют `length` и это число.

```ts
function len<T extends { length: number }>(arg: T): number {
  return arg.length;
}

len('abc'); // ок
len(['abc']); // ок
len({ length: 12 }); // ок
len(123); // ошибка
len(true); // ошибка
len({ a: 1 }); // ошибка
```

```ts
export function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}
```
