# [`Оператор keyof`](../index.md)

Создает union из возможных литералов.

## Пример

### Глобальные классы

Оператор вернет union из литералов - методов Window (например ontoggle).

```ts
type WindowProp = keyof Window;
const myValue: WindowProp = 'ontoggle';
```

### Интерфейс

Оператор вернет union из свойств интерфейса.

```ts
interface PC {
  brand: string;
  year: string;
}

type Type = keyof PC;
// : 'brand' | 'year'
```

### Кортеж

Оператор вернет union из индексов массива и общих методов массива.

```ts
type Type = keyof [string, number];
// : 0 | 1 | методы Array
```
