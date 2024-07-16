# [`Создание reducer`](../index.md)

По сути это функция, которая принимает некоторое состояние `state` и действие с этим состояние `action`. Возвращает новое состояние.

## Синтаксис

```jsx
const reducer = (state, action) => {
  return state;
};
```

### `state`

Cостояние (также обычно передается состояние по умолчанию).

### `action`

Объект действия.

## Пример

```jsx
const reducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
};

store.getState(); // 0
store.dispatch({ type: 'INCREMENT' });
store.getState(); // 1
```

```jsx
const reducer = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    return [...state, action.payload];
  }
  return state;
};

store.getState(); // []
store.dispatch({ type: 'ADD_TODO', payload: 'todoText' });
store.getState(); // ['todoText']
```
