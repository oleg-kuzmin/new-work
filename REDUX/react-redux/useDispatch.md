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

## Возвращает

dispatch сам по себе возвращает Promise. Внимание! В базовом варианте если нам нужно обрабатывать этот Promise, то мы попадем только в блок `then`. В блоке then нам возвращается объект action с ключами payload и type.

```jsx
const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadTodos()).then(() => toast('All Todos were fetch'));
}, [dispatch]);
```

Если нам нужно обрабатывать ошибки то до блока then, нужно прописать `.unwrap()`.

```jsx
const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadTodos())
    .unwrap()
    .then(() => toast('All Todos were fetch'))
    .catch(() => toast('ERROR'));
}, [dispatch]);
```
