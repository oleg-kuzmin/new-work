# [`Partial`](../index.md)

Принимает тип объекта и делает все его свойства опциональными.

## Синтаксис

```ts
Partial<T>;
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

type PartialTodo = Partial<Todo>;

function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return { ...todo, ...fieldsToUpdate };
}
```
