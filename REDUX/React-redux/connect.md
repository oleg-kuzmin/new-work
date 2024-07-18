# [`connect`](../index.md)

Нужен для использования в классовых компонентах для обертки компонента. Добавляет данные и методы в `props`.

## Синтаксис

```jsx
const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter);
```

### `mapStateToProps` || `null`

Функция, которая призвана вернуть какие-либо данные. Если нам нужны только методы, то можно передать вместо функции первым параметром `null`.

Функция принимает `state` и должна вернуть объект, который указывает какие данные мы хотим добавить в `props`.

### `mapDispatchToProps` (опционально)

Второй параметр можно создать как простой объект. Если нам нужны только данные, то второй параметр не указываем.

Функция принимает `dispatch` и должна вернуть объект, который указывает какие методы мы хотим добавить в `props`.

## Пример

```jsx
// импорт
import { connect } from 'react-redux';

// классу добавляется нижнее подчеркивание
class _Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button>-</button>
        <button>+</button>
        <button>reset</button>
      </div>
    );
  }
}

// создаем mapStateToProps
const mapStateToProps = state => ({
  count: state.count,
});

// создаем mapDispatchToProps (1 способ - используется action)
const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(increment),
  dec: () => dispatch(decrement),
  res: () => dispatch(reset),
});

// создаем mapDispatchToProps (2 способ - используется action-creator)
const mapDispatchToProps = dispatch => ({
  inc: bindActionCreators(increment, dispatch),
  dec: bindActionCreators(decrement, dispatch),
  res: bindActionCreators(reset, dispatch),
});

// создаем mapDispatchToProps как простой объект (3 способ - используется action-creator)
const mapDispatchToProps = {
  inc: increment,
  dec: decrement,
  res: reset,
};

// оборачиваем в connect и передаем созданные функции
const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter);

// экспортируем как обычный компонент
export { Counter };
```
