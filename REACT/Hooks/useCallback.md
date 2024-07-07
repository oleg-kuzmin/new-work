# [`useCallback()`](../index.md)

Используется для оптимизации, чтобы запомнить какую-то функцию. Возвращает функцию (не вызывает).

И `useCallback()`, и `useMemo()` занимают место в памяти, поэтому нужно грамотно подходить к оптимизации.

## Синтаксис

```jsx
const memoizedCallback = useCallback(() => {}, []);
```

### `1. Функция`

Выполняет какую-то логику.

### `2. Массив зависимостей`

Когда один из элементов зависимостей изменился - происходит перерасчет.

## Пример

```jsx
import { useCallback } from 'react';

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

```jsx
import { useState, useCallback } from 'react';

const CountButton = React.memo(({ onClick, count }) => {
  console.log('render', count);
  return <button onClick={onClick}>{count}</button>;
});

function DualCounter() {
  const [count1, setCount1] = useState(0);
  const increment1 = useCallback(() => setCount1(c => c + 1), []);

  const [count2, setCount2] = useState(0);
  const increment2 = useCallback(() => setCount2(c => c + 1), []);

  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}
```
