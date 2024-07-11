# [`<NavLink>`](../index.md)

Нужен для того, чтобы стилизовать ссылку с активным роутом в данный момент.

Атоматически добавляет `className="active"` к ссылке. Можно изменить название, если прописать функцию в `className` (пример ниже).

Если нужно создать кастомную ссылку см. хук `useMatch()`.

## Пример

```jsx
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2024</footer>
    </>
  );
};

export { Layout };
```

## Класс `active` нужно стилизовать

```css
.active {
  color: var(--color-active);
  cursor: default;
}
```

## Другое название активного класса

Если мы хотим другое название класса, то можно указать `className` и передать туда функцию, которая принимает объект (у него есть ключ `isActive`, который мы можем достать с помощью деструктуризации) и вернуть нужное имя класса.

```jsx
import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({ isActive }) => (isActive ? 'active-link' : '');

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="/blog" className={setActive}>
          Blog
        </NavLink>
        <NavLink to="/about" className={setActive}>
          About
        </NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2024</footer>
    </>
  );
};

export { Layout };
```

## Стилизация через style

Точно также как и в `className` выше можно передать функцию.

```jsx
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'var(--color-active)' : 'white' })}>
          Home
        </NavLink>
        <NavLink to="/blog" style={({ isActive }) => ({ color: isActive ? 'var(--color-active)' : 'white' })}>
          Blog
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'var(--color-active)' : 'white' })}>
          About
        </NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">2024</footer>
    </>
  );
};

export { Layout };
```
