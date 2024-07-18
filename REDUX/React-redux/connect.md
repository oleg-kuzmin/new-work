# [`connect`](../index.md)

Нужен для использования в классовых компонентах для обертки компонента. Добавляет данные состояния в `props`.ss

## Синтаксис

```jsx
const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter);
```

### `mapStateToProps` || `null`

Функция, которая призвана вернуть какие-либо данные. Если нам нужны только методы, то можно передать вместо функции первым параметром `null`.

Функция принимает `state` и должна вернуть объект, который указывает какие данные мы хотим добавить в `props`.

### `mapDispatchToProps` (опционально)

Функция, которая призвана вернуть какие-либо action. Если нам нужны только данные, то второй параметр не указываем.

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

// создаем функции
const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = () => {};

// оборачиваем в connect и передаем созданные функции
const Counter = connect(mapStateToProps, mapDispatchToProps)(_Counter);

// экспортируем как обычный компонент
export { Counter };
```
