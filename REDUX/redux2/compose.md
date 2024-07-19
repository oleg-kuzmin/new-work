# [`compose`](../index.md)

Функция позволяет последовательно вызывать функции. Используется для связи усилителей друг с другом.

## Пример

```jsx
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = [];

if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
}

export const store = createStore(counter, composeEnhancers(applyMiddleware(...middleWare)));
```
