# [`createSlice()`](../index.md)

Метод создает некий срез для всей логики компонента. Включает в себя `createAction()` и `createReducer()`. Позволяет не использовать их отдельно.

- [`Синтаксис`](#cинтаксис)
- [`name`](#name-value)
- [`initialState`](#initialstate-value)
- [`reducers`](#reducers--reducername-reducerfunc--reducerobj)
- [`extraReducers (опционально)`](#extrareducers-builder---builderaddcasename-callback-)
- [`Возвращает`](#возвращает)
- [`Пример`](#пример)

## [Cинтаксис](#createslice)

```jsx
import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({});
```

Принимает в качестве аргумента объект с настройками. Имеет обязательные и необязательные поля.

## [`name: value`](#createslice)

Дополнительный домен для названия группы наших actions, часть имени actions (Например: '@@todos' в '@@todos/removeTodo').

```js
name: '@@todos',
```

## [`initialState: value`](#createslice)

Начальное значение. Это может быть заранее созданная внешняя переменная или функция, которая возвращает значение.

```js
initialState: {
  todos: [],
},
```

```jsx
initialState: [];
```

## [`reducers: { reducerName: reducerFunc || reducerObj}`](#createslice)

Здесь создаются сами редюсеры. Значением `reducers` является объект с редюсерами.

Сама функция обновления состояния пишется в мутабельном стиле (под капотом используется immer), ничего не возвращает (не используется return). Но если нам нужно написать функцию в иммутабельном стиле - добавляется возвращаемое значение (используется return).

Нужно быть аккуратнее со стрелочными функциями и не забывать, что они неявно возвращают значение.

- `reducerName` - название нашего редюсера. Оно же будет импортировано как action.
- `reducerFunc(state, action)` - функция обновления состояния

- `reducerObj` - если нам нужна предподготовка action создаем объект с ключами:
  - `reducer: (state, action) => {}` - функция обновления состояния
  - `prepare: (title) => ({ payload: {} })` - функция предподготовки action, должна вернуть объект action с обязательным ключем payload. Сама функция принимает параметр action.payload, который будет передан в момент события action.

```js
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
  // новый синтаксис записи метода
  removeTodo(state, action) {
    const id = action.payload;
    return state.filter(todo => todo.id !== id);
  },
},
```

## [`extraReducers: (builder) => { builder.addCase(name, callback) }`](#createslice)

По сути это дополнительные редюсеры, которые не попадают в группу компонента `name`. Они могут быть никак не связаны с `name` и вообще использовать собственную логику, например для асинхронной работы. По факту они используют синтаксис обычного `createReducer()`.

`builder` предоставляется нам из коробки самим redux. На базе этого `builder` при помощи методов `builder.addCase()` мы создаем логику обработки конкретных событий. `builder.addCase()` может быть сколько угодно, подерживается запись через цепочку.

- `builder.addCase(name, callback(state, action))` - принимает в качестве первого аргумента событие action, в качестве второго - функцию обновления состояния, которая также пишется в мутабельном стиле и ничего не возвращает или в иммутабельном стиле с return.

```js
extraReducers: builder => {
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
};
```

## [Возвращает](#createslice)

Объект с ключами:

- `reducer` - тот редюсер, который ожидался в `createStore()`
- `actions` - тоже объект с ключами в виде названий action, которые можно экспортировать
- `getInitialState` - начальное состояние

```js
// при помощи деструктуризации достаем и экспортируем нужные actions
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

// экспорт reducer
export const store = createStore(todoSlice.reducer);

// экспорт initialState
export const initialState = todoSlice.getInitialState;
```

## [Пример](#createslice)

```jsx
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
