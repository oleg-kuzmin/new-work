# [`Pick`](../index.md)

Позволяет нам создавать новый тип, оставляя только переданные ключи-аргументы, которые нам нужны.

## Синтаксис

```ts
Pick<T, K>;
```

### `T`

Изначальный тип.

### `K`

Ключи, которые останутся в новом типе. Можно указать union для нескольких значений.

## Пример

### Пример 1

```ts
type User = {
  id: number;
  name: string; // останется
  email: string; // останется
  age: number;
};

type UserContactInfo = Pick<User, 'name' | 'email'>;

type UserContactInfo = {
  name: string;
  email: string;
};
```

### Пример 2

```ts
interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>;

const todo: SimpleTodo = {
  id: 'sad',
  title: 'Learn TS',
  completed: false,
};
```
