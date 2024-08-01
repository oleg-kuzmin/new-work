# [`Partial`](../index.md)

Создает тип из опциональных свойств. Делает все свойства опциональными.

- [Синтаксис](#синтаксис)
- [Возвращает](#возвращает)
- [Пример](#пример)

## [Синтаксис](#partial)

```ts
Partial<T>;
```

### `T`

Изначальный тип.

## [Возвращает](#partial)

Новый тип со всеми свойствами, установленными как необязательные.

## [Пример](#partial)

```ts
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
});

console.log(todo1); // {title: 'organize desk', description: 'clear clutter'}
console.log(todo2); // {title: 'organize desk', description: 'throw out trash'}
```
