# [`useDispatch()`](../index.md)

Используется для передачи объекта события action.

## Пример

```jsx
import { useDispatch } from 'react-redux'; // импорт

export default function Component() {
  // создаем и сохраняем в переменную результат вызова useDispatch()
  const dispatch = useDispatch();

  //* dispatch принимает в качестве аргумента объект action или вызов функции action creator
  return (
    <div>
      <button onClick={() => dispatch(decrement)}>-</button>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(reset)}>reset</button>
    </div>
  );
}
```
