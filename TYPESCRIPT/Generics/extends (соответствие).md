# [`extends (соответствие)`](../index.md/#generics)

Обозначает соответствие определенному типу. По факту `<T>` имеет тип `any`, но он заменяется в момент вызова.

`extends { length: number }` - соответствие определенной структуре. Валидны будут те элементы, которые имеют `length` и это число.

## Пример

### Соответствие объекту с ключем length

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

### Соответствие union литералов через keyof

```ts
export function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}
```
