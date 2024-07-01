# `this`

1. Создавая метод класса (например `this.handleClick`) в котором будет обычная (не стрелочная функция), в котором планируется использовать `this.setState`​, метод `this.handleClick` нужно связать с​ `this` через `bind`.

2. Второй способ - использовать стрелочную функцию `this.handleClick`, в которой `this` привязывается навсегда к классу. Можно не создавать отдельно метод `this.handleClick`, а передать анонимную функцию, например `onClick={() => this.setState({})}`.

## Пример

### 1 Способ

```jsx
class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        Hello from React
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}
```

### 2 Способ

```jsx
class App extends Component {
  constructor(props) {
    super(props); // или constructor(), super() если нет props
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        Hello from React
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}
```
