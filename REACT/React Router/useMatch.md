# [`useMatch()`](../index.md)

Хук принимает как аргумент объект или строку, значение которой сравнивается. Возвращает либо `null`, либо объект.

```jsx
// CustomLink.jsx
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  console.log({ match });

  return (
    <Link to={to} style={{ color: match ? 'var(--color-active)' : 'white' }} {...props}>
      {children}
    </Link>
  );
};

export { CustomLink };

// Layout.jsx
import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">&copy; ReactRouter Tutorials 2024</footer>
    </>
  );
};

export { Layout };
```
