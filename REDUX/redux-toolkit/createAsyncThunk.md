# [`createAsyncThunk()`](../index.md)

`createAsyncThunk()` нужен для асинхронной работы. По сути это набор определенных асинхронных action. Мы создаем thunk c набором actions, делаем запросы и возвращаем результат. В процессе вызываем какие-то actions.

- [`Синтаксис`](#cинтаксис)
- [`actionName`](#actionname)
- [`asyncCallback`](#asynccallback)
- [`thunkApi`](#thunkapi)
- [`Cтатусы`](#статусы)
- [`Пример`](#пример)

## [Cинтаксис](#createasyncthunk)

```js
import { createAsyncThunk } from '@reduxjs/toolkit';
export const createTodo = createAsyncThunk(actionName, asyncCallback);
```

## [`actionName`](#createasyncthunk)

Уникальная строка, которой мы называем событие action.

## [`asyncCallback`](#createasyncthunk)

`async (arg, thunkApi) => {}`

Асинхронная функция, которая принимает 2 параметра и представляет собой thunk.

- `arg` - входящий аргумент из UI (если мы что-то передаем).
- `thunkApi` - объект с разными методами.

## [`thunkApi`](#createasyncthunk)

- `dispatch()` - вызывает событие action
- `getState()` - получает все дерево состояния

## [`Cтатусы`](#createasyncthunk)

Созданная с помощью `createAsyncThunk()` функция имеет дополнительные собственные ключи - события actions, которые мы можем добавляеть в addCase() для функции builderCallback в extraReducers.

- `.pending` - отправка запроса
- `.rejected` - ошибка запроса
- `.fulfilled` - успех запроса

## [Пример](#createasyncthunk)

### 1 вариант

Такой подход возможен (где мы руками прописываем dispatch), но он избыточен.

```js
// todosSlice.js
export const createTodo = createAsyncThunk('@@todos/create-todo', async (title, { dispatch }) => {
  dispatch({ type: 'SET_LOADING' });
  const res = await fetch('https://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed: false }),
  });
  const data = await res.json();
  dispatch(addTodo(data));
});

// NewTodo.jsx
import { useDispatch } from 'react-redux';
import { createTodo } from './todosSlice';

export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.title.value) {
      dispatch(createTodo(event.target.title.value));
      event.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
```

### 2 вариант

```js
// Возвращаемые данные это будет наш action.payload
export const createTodo = createAsyncThunk('@@todos/create-todo', async title => {
  const res = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed: false, id: nanoid() }),
  });
  return await res.json();
});

const todoSlice = createSlice({
  name: '@@todos',
  initialState: {
    entities: [],
    loading: 'idle',
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(createTodo.pending, state => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(createTodo.rejected, state => {
        state.loading = 'idle';
        state.error = 'Something went wrong';
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.loading = 'idle';
        state.error = null;
      });
  },
});
```
