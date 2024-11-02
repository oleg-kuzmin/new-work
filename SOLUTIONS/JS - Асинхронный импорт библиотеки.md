# [`JS - Асинхронный импорт библиотеки`](./index.md)

```js
const handleClick = async () => {
  const { toast } = await import('react-hot-toast');
  toast('Hello');
};
```
