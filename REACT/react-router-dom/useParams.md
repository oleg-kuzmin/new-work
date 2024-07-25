# [`useParams()`](../index.md)

Возвращает объект со свойствами переданных параметров.

```jsx
// App.jsx
<Route path="blog/:category/:title" />;

// SinglePage.jsx
import { useParams } from 'react-router-dom';
const SinglePage = () => {
  console.log(useParams()); // {category: '', title: ''}
  return <div>1</div>;
};
```
