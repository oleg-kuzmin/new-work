# [`<Outlet>`](../index.md)

Суть компонента в том, чтобы сказать роутеру куда мы хотим вставить всю остальную разметку.

## Пример

```jsx
// Все что внутри <Route></Route> (как в props.children) попадет в <Outlet />
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Outlet />
      <footer>2024</footer>
    </>
  );
};

export { Layout };
```
