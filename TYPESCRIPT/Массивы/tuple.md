# [`tuple`](../index.md)

Кортеж - это массив с ограниченным количеством элементов определенного типа.

Типы указываются ВНУТРИ квадратных скобок.

Для получения массива кортежей из объекта можно использовать метод `Object.entries()`.

## Пример

### Два элемента

```ts
const skill: [number, string] = [1, 'Dev'];
```

### Массив кортежей

```ts
const pairs: [string, string][] = [
  ['key', 'value'],
  ['key2', 'value2'],
];
```

### Любое количество дополнительных элементов

```ts
const arr: [number, string, ...boolean[]] = [1, 'sdf', true, true, false];
```

### Наименование типов

TS также позволяет задавать имена порядковым типам кортежа для удобства.

```ts
type MyTuple = [firstName: string, lastName: string, age: number, dateBirth: Date];
```
