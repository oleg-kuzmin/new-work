# [`Создание thunk`](../index.md)

`thunk` нужен для асинхронной работы. По сути это асинхронный `action`. Мы создаем `thunk`, делаем запрос и возвращаем результат. При получении ответа вызываем `action`.

`thunk` - это функция, которая возвращает другую функцию. Используется как `action-creator` и должен работать через `dispatch()`.

Создается на том же уровне, что и `action`.

## Пример

### 1. Создание thunk - loadUsers()

```jsx
// action.js
export const ADD_USERS = 'ADD_USERS';

const addUsers = users => ({
  type: ADD_USERS,
  payload: users,
});

// без параметра
export const loadUsers = () => (dispatch, getState) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch(addUsers(data)));
};

// с параметром
export const createTodo = title => (dispatch, getState) => {
  client.post('https://jsonplaceholder.typicode.com/todos');
};
```

### 2. Импорт.

```jsx
// store/index.js
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './root-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
```

### 3. Использование в компоненте

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

## Передача экстра-параметров.

Экстра-параметры - некие импортируемые сущности или функции. Чтобы не делать импорты в каждом файле, где они нужны, можно получать к ним доступ, если они переданы в `withExtraArgument()`. `withExtraArgument()` принимает или одну сущность или объект с ключами.

```jsx
// store/index.js
import { createStore, applyMiddleware, compose } from 'redux';
import { withExtraArgument } from 'redux-thunk';
import { rootReducer } from './root-reducer';
import { client } from '../api';
const thunkMiddlewareWithArg = withExtraArgument(client);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddlewareWithArg)));
```

```jsx
// action.js
export const loadTodos = () => (dispatch, _, client) => {
  dispatch(setLoading());
  client
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(data => dispatch(addTodos(data)))
    .catch(err => dispatch(setError(err)));
};

export const createTodo = title => (dispatch, _, client) => {
  client
    .post('https://jsonplaceholder.typicode.com/todos', { title, completed: false, userId: 1 })
    .then(newTodo => dispatch(addTodo(newTodo)))
    .catch(err => dispatch(setError(err)));
};
```
