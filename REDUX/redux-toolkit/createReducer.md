# [`createReducer()`](../index.md)

Метод для создания редюсера.

Редко используется, так как метод `createSlice()` включает в себя `createAction()` и `createReducer()`.

- [`Синтаксис`](#cинтаксис)
- [`defaultValue`](#defaultvalue)
- [`(builder) => { builder.addCase(name, callback) }`](#builder---builderaddcasename-callback-)
- [`Возвращает`](#возвращает)
- [`Пример`](#пример)

## [Синтаксис](#createreducer)

```jsx
import { createReducer } from '@reduxjs/toolkit';
const reducer = createReducer(defaultValue, builder => {
  builder.addCase(name, callback);
});
```

## [defaultValue](#createreducer)

Начальное значение. Это может быть заранее созданная внешняя переменная или функция, которая возвращает значение.

```jsx
const todosReducer = createReducer([], builderCallback);
```

## [(builder) => { builder.addCase(name, callback) }](#createreducer)

`builder` предоставляется нам из коробки самим redux. На базе этого `builder` при помощи методов `builder.addCase()` мы создаем логику обработки конкретных событий. `builder.addCase()` может быть сколько угодно, подерживается запись через цепочку.

- `builder.addCase(name, callback(state, action))` - принимает в качестве первого аргумента событие action, в качестве второго - функцию обновления состояния, которая также пишется в мутабельном стиле и ничего не возвращает или в иммутабельном стиле с return.

```js
const todosReducer = createReducer([], builder => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
    })
    .addCase(toggleTodo, (state, action) => {
      const id = action.payload;
      const todo = state.find(todo => todo.id === id);
      todo.completed = !todo.completed;
    })
    .addCase(removeTodo, (state, action) => {
      const id = action.payload;
      return state.filter(todo => todo.id !== id);
    });
});
```

## [Возвращает](#createreducer)

Созданный редюсер.

## [Пример](#createreducer)

```jsx
import { createStore } from 'redux';
import { createAction, nanoid, createReducer } from '@reduxjs/toolkit';

export const addTodo = createAction('@@todos/ADD_TODO', title => ({
  payload: {
    title,
    id: nanoid(),
    completed: false,
  },
}));
export const removeTodo = createAction('@@todos/REMOVE_TODO');
export const toggleTodo = createAction('@@todos/TOGGLE_TODO');

const todosReducer = createReducer([], builder => {
  builder
    .addCase(addTodo, (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
    })
    .addCase(toggleTodo, (state, action) => {
      const id = action.payload;
      const todo = state.find(todo => todo.id === id);
      todo.completed = !todo.completed;
    })
    .addCase(removeTodo, (state, action) => {
      const id = action.payload;
      return state.filter(todo => todo.id !== id);
    });
});

export const store = createStore(todosReducer);
```
