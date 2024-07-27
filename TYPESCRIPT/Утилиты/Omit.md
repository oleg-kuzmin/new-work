# [`Omit`](../index.md)

Позволяет нам создавать новый тип, удаляя переданные ключи-аргументы.

## Синтаксис

```ts
Omit<Type, Key>;
```

### `Type`

Изначальный тип.

### `Key`

Ключи, которые удалятся из нового типа. Можно указать union для нескольких значений.

## Возвращает

Новый тип.

## Пример

```ts
interface Todo {
  title: string;
  description: string; // удалится
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};
```
