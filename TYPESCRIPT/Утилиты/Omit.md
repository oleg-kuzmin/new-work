# [`Omit`](../index.md)

Позволяет нам создавать новый тип, удаляя переданные ключи-аргументы.

## Синтаксис

```ts
Omit<T, K>;
```

### `T`

Изначальный тип.

### `K`

Ключи, которые удалятся из нового типа. Можно указать union для нескольких значений.

## Возвращает

Новый тип.

## Пример

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>; // удалим description

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};
```
