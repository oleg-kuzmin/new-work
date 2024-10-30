# [`axios (Использование)`](./index.md)

```js
// Пример get-запроса
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
  console.log(res.data);
});
```

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const axiosGet = async () => {
      const result = await axios({
        method: 'get',
        url: 'https://api.github.com/users',
      });
      setUsers(result.data);
    };
    axiosGet();
  }, []);

  return (
    <div className="App">
      {users.map(user => (
        <UserItem key={user.id} user={user}></UserItem>
      ))}
    </div>
  );
};
```
