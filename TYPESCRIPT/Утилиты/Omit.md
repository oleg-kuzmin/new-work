# [`Omit`](../index.md)

Позволяет нам создавать новый тип, удаляя переданные ключи-аргументы.

- [Синтаксис](#синтаксис)
- [Возвращает](#возвращает)
- [Пример](#пример)

## [Синтаксис](#omit)

```ts
Omit<T, K>;
```

### `T`

Изначальный тип.

### `K`

Ключи, которые удалятся из нового типа. Можно указать union для нескольких значений.

## [Возвращает](#omit)

Новый тип.

## [Пример](#omit)

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
