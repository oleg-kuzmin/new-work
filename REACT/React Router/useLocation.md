# [`useLocation()`](../index.md)

Возвращает объект с информацией о странице.

- `hash` - уникальный хэш страницы
- `key` - уникальный ключ страницы
- `pathname` - полный путь
- `search` - поиск по get-параметрам
- `state` - состояние (которое можем передать через useNavigate)

```jsx
import { useLocation } from 'react-router-dom';

function Component() {
  console.log(useLocation());
}
```
