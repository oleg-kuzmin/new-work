# [`Required`](../index.md)

Принимает тип объекта и делает все его свойства обязательными.

## Синтаксис

```ts
Required<T>;
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

type PartialTodo = Required<Todo>;
```
