# [`createSlice()`](../index.md)

Метод создает некий срез для всей логики компонента. Включает в себя `createAction()` и `createReducer()`. Позволяет не использовать их отдельно.

- [`Синтаксис`](#cинтаксис)
- [`name`](#name-value)
- [`initialState`](#initialstate-value)
- [`reducers`](#reducers--reducername-reducerfunc--reducerobj)
- [`extraReducers (опционально)`](#extrareducers-buildercallback-опционально)
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

## [`extraReducers: builderCallback (опционально)`](#createslice)

`(builder) => { builder.addCase(name, callback)`

По сути это дополнительные редюсеры, которые не попадают в группу компонента `name`. Они могут быть никак не связаны с `name` и вообще использовать собственную логику, например для асинхронной работы. По факту они используют синтаксис обычного `createReducer()`.

Например мы создаем какой-то action. И по этому событию action запускаем цепочку изменений состояния в разных компонентах.

`builder` предоставляется нам из коробки самим redux. На базе этого `builder` при помощи методов `builder.addCase()` мы создаем логику обработки конкретных событий. `builder.addCase()` может быть сколько угодно, подерживается запись через цепочку.

- `builder.addCase(name, callback(state, action))` - принимает в качестве первого аргумента событие action, в качестве второго - функцию обновления состояния, которая также пишется в мутабельном стиле и ничего не возвращает или в иммутабельном стиле с return.

```js
extraReducers: builder => {
  builder.addCase(resetToDefault, (state, action) => {
    return [];
  });
},
```

- `builder.addMatcher((action) => {}, (state, action) => {})`

Отрабатывает не на один конкретный action, а на разные, которые соответствуют определенной схеме. Важен порядок, сначала builder формирует все `addCase()` и только потом `addMatcher()`. Поэтому возможно некоторое дублирование кейсов (например сначала отработает addCase() с fulfilled, затем addMatcher() с fulfilled).

Принимает функцию predicat, в которой мы что-то проверяем. Сама функция в качестве аргумента принимает action. Должна вернуть булево значение true. Второй аргумент функция, которую мы хотим выполнить в случае true (принимает state, action).

```jsx
extraReducers: builder => {
  builder
    .addCase(resetAction, () => {
      return [];
    })
    .addCase(loadTodos.fulfilled, (state, action) => {
      state.entities = action.payload;
    })
    .addCase(createTodo.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    })
    .addCase(toggleTodo.fulfilled, (state, action) => {
      const updatedTodo = action.payload;
      const index = state.entities.findIndex(todo => todo.id === updatedTodo.id);
      state.entities[index] = updatedTodo;
    })
    .addCase(removeTodo.fulfilled, (state, action) => {
      state.entities = state.entities.filter(todo => todo.id !== action.payload.id);
    })
    .addMatcher(
      action => action.type.endsWith('/pending'),
      state => {
        state.loading = 'loading';
        state.error = null;
      }
    )
    .addMatcher(
      action => action.type.endsWith('/rejected'),
      state => {
        state.loading = 'idle';
        state.error = 'ERROR!';
      }
    )
    .addMatcher(
      action => action.type.endsWith('/fulfilled'),
      state => {
        state.loading = 'idle';
        state.error = null;
      }
    );
  },
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
