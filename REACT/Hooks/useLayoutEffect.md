# [`useLayoutEffect()`](../index.md)

По сути тоже самое что и `useEffect()`, но выполняется синхронно, может затормозить то, что выводится на страницу. Используется в исключительных случаях если мы хотим чтобы компонент не дергался визуально при изменении состояния/props (если состояний несколько, например три, и нам нужно чтобы компонент рендерился только с последним состоянием, а отрисовку со вторым проигнорировал).

В 99% случаев лучше использовать обычный `useEffect()`.

- `useEffect()` применяется после `render()` и ПОСЛЕ отрисовки в браузере.
- `useLayoutEffect()` применяется после `render()` и ДО отрисовки в браузере может что-то сделать. Т.е. пока какая-то полезная работа внутри `useLayoutEffect()` не будет сделана отрисовка не случится.

## Пример

```jsx
const BlinkRender = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log('render', value);

  return <button onClick={() => setValue(0)}>value: {value}</button>;
};
```