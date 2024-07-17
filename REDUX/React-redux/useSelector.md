# [`useSelector()`](../index.md)

Нужен для получения конкретных данных из state.

## Синтаксис

```jsx
useSelector(state => state.todos);
```

### `function`

`useSelector()` принимает в качестве аргумента функцию, которая в свою очередь принимает объект `state` и возвращает значение нужного свойства.

## Пример

```jsx
import { useSelector } from 'react-redux'; // импорт метода

export default function Component() {
  // сохранение в переменной todos полученных данных
  const todos = useSelector(state => state.todos);
}
```
