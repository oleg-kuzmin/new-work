# [`interface (описание свойств объекта)`](../index.md)

Позволяет вынести типизацию объекта в отдельную сущность. Применяется к объектам и классам.

Поддерживают стандартный экспорт/импорт модулей.

## Пример

```ts
interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew: boolean;
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
  isNew: false,
};
```

```ts
interface User {
  name: string;
  age: string;
  skills: string[];
}
```
