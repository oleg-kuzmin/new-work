# [`useSearchParams()`](../index.md)

Возвращает две сущности. Первая это объект `URLSearchParams`. Вторая это метод обновления, который ожидает объект с новыми параметрами.

```jsx
import { useSearchParams } from 'react-router-dom';

// Компонент
const [searchParams, setSearchParams] = useSearchParams();

// Вернет объект с свойствами из параметров строки URL: ...ru/post?id=123&text=123
const postQuery = searchParams.get('post');
```

## Пример

```jsx
// PostsPage.jsx
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BlogFilter } from '../components/BlogFilter';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');
  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <BlogFilter setSearchParams={setSearchParams} postQuery={postQuery} latest={latest} />
      <Link to="/posts/new">Add new post</Link>
      <ul>
        {posts
          .filter(post => post.title.includes(postQuery) && post.id >= startsFrom)
          .map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li>{post.title}</li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

// BlogFilter.jsx
import { useState } from 'react';

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.search.value;
    const isLatest = form.latest.checked;
    const params = {};
    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    setSearchParams(params);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" name="search" value={search} onChange={evt => setSearch(evt.target.value)} />
      <label style={{ padding: '0 1rem' }}>
        <input type="checkbox" name="latest" checked={checked} onChange={evt => setChecked(evt.target.checked)} /> New
        only
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
```
