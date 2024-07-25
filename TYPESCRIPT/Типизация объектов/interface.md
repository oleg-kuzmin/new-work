# [`interface`](../index.md)

Специфично для объектов типизация делается через `interface`. Если есть `interface` объект жестко обязан ему соответствовать.

Правила синтаксиса:

- не ставится знак равно `=`
- название с большой буквы
- допустимы точки с запятой после свойства

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

## Необязательные параметры

```ts
interface Car {
  isNew?: boolean;
  name?: string;
}
```

## Непредсказуемое количество полей

```ts
interface Car {
  [key: string]: unknown;
}

const car2: Car = {
  brand: 'BMW',
  type: '',
  wheels: 4,
};

car2.go = true;

// Иногда можно встретить указание опциональных или динамических свойств в скобках для отличия.
car2['go'] = true;
```
