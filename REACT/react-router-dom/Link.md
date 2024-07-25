# [`<Link>`](../index.md)

Компонент нужен для перехода по ссылке без перезагрузки страницы. Будут догружаться только необходимые данные.

## Пример

```jsx
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
```
