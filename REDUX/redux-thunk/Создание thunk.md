# [`Создание thunk`](../index.md)

`thunk` - это функция, которая возвращает другую функцию. Используется как `action-creator` и должен работать через `dispatch()`.

Создается на том же уровне, что и `action`.

```jsx
// action.js
export const ADD_USERS = 'ADD_USERS';

const addUsers = users => ({
  type: ADD_USERS,
  payload: users,
});

// thunk
// делает асинхронный запрос и при получении ответа вызывает action
export const loadUsers = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch(addUsers(data)));
};
```

```jsx
// index.js
import { thunk } from 'redux-thunk';
```

```jsx
// App.jsx
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUsers } from './store/users/user-actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello Redux Thunk</h1>
    </div>
  );
}
```
