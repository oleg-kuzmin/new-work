# [`nanoid()`](../index.md)

Встроен в redux-toolkit. Создает уникальный id.

## Синтаксис

```jsx
import { nanoid } from '@reduxjs/toolkit';
nanoid();
```

## Возвращает

Строку с уникальный id. Например: 'cxAIcCaKmI2cCv0OaXdqW'.

## Пример

```js
import { createStore } from 'redux';
import { nanoid, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: '@@todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        const newTodo = action.payload;
        state.push(newTodo);
      },
      prepare: title => ({
        payload: {
          title,
          id: nanoid(),
          completed: false,
        },
      }),
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter(todo => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find(todo => todo.id === id);
      todo.completed = !todo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export const store = createStore(todoSlice.reducer);
```
