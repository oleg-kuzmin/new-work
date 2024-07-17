# [`Provider`](../index.md)

Обертка нужна для того, чтобы вложенные компоненты получили доступ к хранилищу store.

## Пример

```jsx
import { Provider } from 'react-redux'; // импорт провайдера
import store from './store'; // импорт хранилища

<Provider store={store}>
  <App />
</Provider>;
```
