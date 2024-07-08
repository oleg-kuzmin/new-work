# [`custom Hooks`](../index.md)

Кастомный хук, как и обычный хук, это функция, которая что-то принимает и что-то возвращает.

## Пример

```jsx
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    // запустится после того, как отработает return
    // т.е. на текущий return этот useEffect не повлияет, но
    // повлияет на следующий return
    ref.current = value;
  });

  // вернется то, что сейчас сохранено
  return ref.current;
}

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="App">
      <button onClick={() => setCount(count + )}>
      <h2>Current: {count}</h2>
      <h2>Previous: {prevCount}</h2>
    </div>
  )
}
```

```jsx
function useLocalStorage(initialState, key) {
  const get = () => {
    const storage = localstorage.getItem(key);
    return storage ? +storage : initialState;
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

export default function App() {
  const [count, setCount] = useLocalStorage(0, 'count');
  const prevCount = usePrevious(count);

  return (
    <div className="App">
      <button onClick={() => setCount(count + )}>
      <h2>Current: {count}</h2>
      <h2>Previous: {prevCount}</h2>
    </div>
  )
}
```
