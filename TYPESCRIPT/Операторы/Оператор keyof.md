# [`Оператор keyof`](../index.md)

Создает union из возможных свойств.

## Пример

### Глобальные классы

Оператор вернет `union` из литералов - методов `Window` (например `ontoggle`).

```ts
type WindowProp = keyof Window;
const myValue: WindowProp = 'ontoggle';
```

### Интерфейс

Оператор вернет `union` из свойств интерфейса.

```ts
interface PC {
  brand: string;
  year: string;
}

type Type = keyof PC;
// : 'brand' | 'year'
```

### Кортеж

Оператор вернет `union` из индексов массива и общих методов массива.

```ts
type Type = keyof [string, number];
// : 0 | 1 | методы Array
```

### Объект

`Array<keyof T>` - Массив, состоящий из ключей объекта - параметра `T` (переданного как аргумент)

```ts
export function keys<T extends object>(obj: T): Array<keyof T> {
  const currentKeys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }
  return currentKeys;
}
```

`Array<T[keyof T]>` - Массив, состоящий из значений объекта - параметра `T` (переданного как аргумент)

```ts
export function values<T extends object>(obj: T): Array<T[keyof T]> {
  const currentValues = [];
  for (let key in obj) {
    currentValues.push(obj[key]);
  }
  return currentValues;
}
```
