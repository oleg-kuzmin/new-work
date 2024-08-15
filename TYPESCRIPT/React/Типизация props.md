# [`Типизация props`](../index.md)

## Пример

### Классический вариант

```tsx
// Альтернативное имя = ITodoItem
interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  children: React.ReactNode;
}

const TodoItem = ({ id, title, completed, children }: TodoItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
};
```

### Использование `React.FC`

`React.FC` - дженерик, означающий react функциональный компонент. Принимает в качестве параметра props.

```tsx
const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <span>{title}</span>
      <span>&times;</span>
    </li>
  );
};
```
