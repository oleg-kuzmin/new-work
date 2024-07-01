# `ReactDOM.createRoot()`

Более современный способ создания корневого элемента, чем `React.createElement`.

## `Синтаксис`

```js
ReactDOM.createRoot(domContainer);
```

### `1. domContainer`

Указатель на DOM-узел, который будем использовать в качестве корневого.

## Пример

```js
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(someElement);
```
