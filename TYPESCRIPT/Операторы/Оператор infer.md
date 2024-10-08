# [`Оператор infer`](../index.md)

Определяет тип переданного параметра функции.

## Пример

```ts
export function fromPair(pair: [string, string]) {
  const [key, value] = pair;

  return {
    [key]: value,
  };
}

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;

const myPair: FirstArg<typeof fromPair> = ['myKey', 'myValue'];

fromPair(myPair);
```

```ts
type ConstructorFirstArg<T> = T extends { new (arg: infer A, ...args: any[]): any } ? A : never;

class Computer {
  constructor(brand: string) {}
}

let brand: ConstructorFirstArg<typeof Computer> = '';
let dateArg: ConstructorFirstArg<typeof Date> = '';
```
