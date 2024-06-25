# `ReactDOM.createRoot()`

Более современный способ создания коревого элемента, чем `React.createElement`.

## `Синтаксис`

```js
ReactDOM.createRoot(domContainer);
```

### `domContainer`

Указатель на DOM-узел, который будем использовать в качестве корневого.

## Пример

```js
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(someElement);
```
