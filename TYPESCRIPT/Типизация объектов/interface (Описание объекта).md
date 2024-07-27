# [`interface (Описание объекта)`](../index.md)

Специфично для объектов типизация делается через `interface`. Если есть `interface` объект жестко обязан ему соответствовать.

Правила синтаксиса:

- не ставится знак равно `=`
- название с большой буквы
- допустимы точки с запятой после свойства

Для предотвращения пересечения и объединения интерфейсов с какой-либо библиотекой существует соглашение добавлять букву `I` перед объявлением интерфейса, например `interface IAccount {}`

## Пример

### Обязательные параметры

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

### Необязательные параметры

```ts
interface Car {
  isNew?: boolean;
  name?: string;
}

// Иногда можно встретить указание опциональных или динамических свойств в скобках для отличия.
car2['go'] = true;
```

### Непредсказуемое количество полей

```ts
interface Car {
  [key: string]: unknown;
}
```

### Методы

```ts
interface Car {
  print(): number;
  print1?: () => number;
}
```

### Только для чтения

```ts
interface Car {
  readonly parametr: string;
}
```

## Объединение interface

interface объединяются если им задано одинаковое имя.

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const john: Person = {
  name: 'John',
  age: 100,
};
```

## Наследование interface

Можно указать любое количество после extends через запятую.

```ts
interface PersonDevelop extends Person {
  email: string;
}
```
