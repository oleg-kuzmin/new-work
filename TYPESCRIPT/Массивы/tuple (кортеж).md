# [`tuple (кортеж)`](../index.md)

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

### Rest-параметры

```ts
const arr: [number, string, ...boolean[]] = [1, 'sdf', true, true, false];
```
