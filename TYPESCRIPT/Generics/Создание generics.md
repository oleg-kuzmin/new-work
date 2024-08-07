# [`Создание generics`](../index.md)

`generics` нужны для облегчения создания типа, например для передачи динамического параметра.

По соглашению параметры дженериков пишутся в одну букву.

Дженерики похожи на функции, которые принимают параметры. Количество параметров может быть любым.

## Псевдоним

```ts
// создание псевдонима с generic-параметром T
type TypeFactory<T> = T;

// использование
type XType = TypeFactory<string>; // : string
type XType = TypeFactory<number>; // : number
type XType = TypeFactory<boolean>; // : boolean
```

## Интерфейс

```ts
interface ModelData<T> {
  title: string;
  value: T;
}

const obj: ModelData<number> = {
  title: string;
  value: 123;
}

const obj: ModelData<Array<number>> = {
  title: string;
  value: [123];
}
```

## Функции

```ts
function toArray<T>(...arg: T[]): T[] {
  return arg;
}

toArray(1, 2, 3); // неявно : number[]
toArray<number>(1, 2, 3); // явно : number[]
toArray('1', '2', '3'); // неявно : string[]
```

```ts
function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}
```

## Стрелочная функция

```ts
const head = <T>(value: T[]): T => value[0];
```

## Перегрузки функции

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
