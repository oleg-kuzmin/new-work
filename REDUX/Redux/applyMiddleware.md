# [`applyMiddleware()`](../index.md)

Нужен для того, чтобы подключать `middleware` к нашему приложению. Принимает в качестве аргумента наши `middleware` как инструкции (без вызова) через запятую.

## Пример

```jsx
import { createStore, applyMiddleware } from 'redux';

const myLogger = store => next => action => {
  console.log('dispatched an action', action.type);
  next(action);
  console.log('updated state is', store.getState());
};

const middleWare = [];

if (process.env.NODE_ENV === 'development') {
  middleWare.push(myLogger);
}

// 1 Способ
export const store = createStore(counter, applyMiddleware(myLogger));

// 2 Способ
export const store = createStore(counter, applyMiddleware(...middleWare));
```
