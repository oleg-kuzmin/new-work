# [`<Navigate>`](../index.md)

Используется для redirect на другую страницу.

- `to="/about"` - указываем путь
- `replace` - переход без записи в истории браузера

```jsx
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="about-us" element={<Navigate to="/about" replace />} />
      </Route>
    </Routes>
  );
}
```
