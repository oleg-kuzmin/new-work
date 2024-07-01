# `this`

1. Создавая метод класса (например `this.handleClick`) в котором будет обычная (не стрелочная функция), в котором планируется использовать `this.setState`​, метод `this.handleClick` нужно связать с​ `this` через `bind`.

2. Второй способ - использовать стрелочную функцию `this.handleClick`, в которой `this` привязывается навсегда к классу.

3. Третий способ - создать анонимную функцию, например `onClick={() => this.setState({}) }`

## Пример

```jsx
class UserGreeting extends React.Component {
  constructor(props) {
    super(props); // super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({});
  }

  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}
```