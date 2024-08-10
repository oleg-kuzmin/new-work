# [`ReadOnly`](../index.md)

Принимает тип объекта и делает все его свойства readonly.

## Синтаксис

```ts
ReadOnly<T>;
```

### `T`

Изначальный тип.

## Пример

```ts
interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

type ReadOnlyTodo = Readonly<Todo>;
```
