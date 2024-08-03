# [`Создание generics`](../index.md/#generics)

`generics` нужны для облегчения создания типа, например для передачи динамического параметра. По соглашению дженерики пишутся в одну букву.

## Создание типа

```ts
type TypeFactory<T> = T;
type XType = TypeFactory<string>;
```

## Создание интерфейса

```ts
interface ModelData<T> {
  title: string;
  value: T;
}
```

### Создание функции

```ts
function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}
```

### Создание функции с спред-оператором

```ts
function toArray<T>(...arg: T[]): T[] {
  return arg;
}
toArray(1, 2, 3); // неявно будет number
toArray<number>(1, 2, 3); // можно указать явно number
toArray('ad', 'asd');
```

### Создание перегрузок функции с дженериком `<T>`

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
