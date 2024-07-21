# [`createAction()`](../index.md)

Метод позволяет создать функцию actionCreator в таком варианте, где не требуются отдельные константы.

Редко используется, так как метод `createSlice()` включает в себя `createAction()` и `createReducer()`.

- [`Синтаксис`](#cинтаксис)
- [`actionType`](#actiontype)
- [`callback(payload) (опционально)`](#callbackpayload)
- [`Возвращает`](#возвращает)
- [`Пример`](#пример)

## [Cинтаксис](#createaction)

```jsx
import { createAction } from '@reduxjs/toolkit';
const action = createAction(actionType, callback(payload));
```

## [`actionType`](#createaction)

Метод принимает как аргумент строку с типом события `action.type`.

```jsx
const removeTodo = createAction('@@todos/REMOVE_TODO');
```

## [`callback(payload)`](#createaction)

Функция предподготовки action, должна вернуть объект action с обязательным ключем payload. Сама функция принимает параметр action.payload, который будет передан в момент события action. Аналог prepare в createSlice().

```jsx
const addTodo = createAction('@@todos/ADD_TODO', title => ({
  payload: {
    title,
    id: nanoid(),
    completed: false,
  },
}));
```

## [Возвращает](#createaction)

Вернет функцию actionCreator, которая при вызове вернет нам объект со свойствами:

- `action.type` - параметр, который мы передали изначально в `createAction()`
- `action.payload` - параметр, который мы передали при вызове функции

```jsx
// экспорт
export const { addTodo } = todoSlice.actions;

// использование в компонентах через react-redux
dispatch(addTodo({ text: 'Clear cat' }));
```

## [Пример](#createaction)

```jsx
import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('@@todos/ADD_TODO');

addTodo; // function actionCreator()
addTodo(); // {action.type: @@todos/ADD_TODO, payload: undefined}
addTodo('learn actions'); // {action.type: @@todos/ADD_TODO, payload: 'learn actions'}
addTodo.toString(); // @@todos/ADD_TODO (Так можно сделать проверку на action.type)
```

```jsx
import { createStore } from 'redux';
import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTodo = createAction('@@todos/ADD_TODO', title => ({
  payload: {
    title,
    id: nanoid(),
    completed: false,
  },
}));
export const removeTodo = createAction('@@todos/REMOVE_TODO');
export const toggleTodo = createAction('@@todos/TOGGLE_TODO');

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case addTodo.toString(): {
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    }
    case removeTodo.toString(): {
      return state.filter(todo => todo.id !== action.payload);
    }
    case toggleTodo.toString(): {
      return state.map(todo => (todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo));
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(todosReducer);
```
