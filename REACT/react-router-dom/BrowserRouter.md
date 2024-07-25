# [`<BrowserRouter>`](../index.md)

Нужен для того, чтобы обернуть все приложение в некий провайдер.

Он должен быть родительским компонентом всего нашего приложения.

```jsx
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```
