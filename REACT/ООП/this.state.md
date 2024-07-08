# [`this.state()`](../index.md)

В классовом компоненте состояние хранится в `this.state`. Как правило `this.state` это объект. Состояние инициализируется через `constructor` или без.

## Пример

```jsx
// Через constructor
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
}

// Без constructor
class App extends React.Component {
  state = {
    count: 0,
  };
}
```
