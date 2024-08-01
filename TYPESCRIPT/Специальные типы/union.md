# [`union`](../index.md)

- [Описание](#описание)
- [Пример](#пример)
  - [Литералы в качестве union](#литералы-в-качестве-union)
  - [Параметры функции](#параметры-функции)
  - [Неявные union - необязательные параметры функции](#неявные-union---необязательные-параметры-функции)
  - [Возвращаемое значение функции](#возвращаемое-значение-функции)

## [Описание](#union)

Знак `|` позволяет комбинировать несколько типов, тип становится смешанным. Такие смешанные типы называются `union`. Могут быть составлены как из примитивов, так и из литералов.

При необходимости используется группировка при помощи скобок `(number | string)`.

При использовании `union` в функциях необходимо сделать сужение типов.

## [Пример](#union)

### [Литералы в качестве union](#union)

Так как типом может быть литерал значения, то можно создавать комбинации из кокретных значений.

```ts
type Status = 'ok' | 'loading' | 'error';
const staticX: Status = 'loading';
```

### [Параметры функции](#union)

```ts
function logId(id: string | number | boolean) {
  console.log(id);
}
```

### [Неявные union - необязательные параметры функции](#union)

Необязательные параметры функцию неявно возвращают тип `union`.

```ts
// string | undefined
function log(name: string, userId?: string): void {
  console.log('Hello', name);
}
```

### [Возвращаемое значение функции](#union)

```ts
function welcome(person: [string, string] | string): number | string {
  if (Array.isArray(person)) {
    console.log('Hello', person.join(' '));
    return 1;
  } else {
    console.log('Hello', person);
    return person;
  }
}
```
