# [`combineReducers()`](../index.md)

Объединяет несколько `reducer` в один для дальнейшей передачи в `createStore()`.

## Синтаксис

```jsx
combineReducers(object);
```

### `object`

Принимает в качестве аргумента объект, в котором мы описываем дерево нашего хранилища.

## Пример

```jsx
import { createStore, combineReducers } from 'redux';

const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
};

const todosReducer = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    return [...state, 'Learn Redux'];
  }
  return state;
};

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = createStore(rootReducer);
store.getState(); // { counter: 0, todos: [] }
store.dispatch({ type: 'INCREMENT' });
store.getState(); // { counter: 1, todos: [] }
```
