# [`Типизация state`](../index.md)

Сама передача начального значения в виде примитива в `useState()` дает правильную типизацию.

При хранении объектов в состоянии или массивов, можно использовать `useState()` как дженерик.

## Пример

```tsx
interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<ITodo | null>(null);

  return (
    <div className="App">
      <TodoItem id="112" completed={false} title="first todo" style={{ border: '1px solid white' }} />
    </div>
  );
}
```
