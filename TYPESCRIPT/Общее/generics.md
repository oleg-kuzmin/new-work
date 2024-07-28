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

## Встроенные дженерики

- `Array<T>` - массив
