# [`union (Комбинация типов)`](../index.md)

Знак `|` позволяет комбинировать несколько типов, тип становится смешанным. Такие смешанные типы называются `union`. Где-то нужно будет указать круглые скобки для них.

### Неявный union

Необязательные параметры функцию неявно возвращают тип `union`.

```ts
// string | undefined
function log(name: string, userId?: string): void {
  console.log('Hello', name);
}
```

### Литералы в качестве union

Так как типом может быть литерал значения, то можно создавать комбинации из кокретных значений.

```ts
type Status = 'ok' | 'loading' | 'error';
const staticX: Status = 'loading';
```

### Параметры функции в виде union

```ts
function printId(id: number | string): void {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
```

### Параметры функции и return в виде union

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
