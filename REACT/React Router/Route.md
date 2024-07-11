# [`<Route>`](../index.md)

`<Route>` может находится только внутри `<Routes>`.

При передаче параметров данные указываются в атрибуте `path` компонента `<Route>` после двоеточия. Например `path="blog/:id"`. Можно указать более сложный вариант с несколькими параметрами и сложным адресом `path="blog/:category/:title"`.

Получить данные параметров можно через хук `useParams()`.

`path` - путь
`element` - элемент jsx
`index` - главный маршрут (если добавляем `index`, можно опустить `/` для остальных `<Route path="">` )

```jsx
// App.jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<SinglePage />} />
        <Route path="blog/:category/:title" element={<SinglePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

// SinglePage.jsx
import { useParams } from 'react-router-dom';
const SinglePage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};
```
