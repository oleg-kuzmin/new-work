# React.createRef()

Представляет собой по сути некий объект, у которого есть единственное свойство `current`.

Из `current` мы всегда можем получить ссылку на узел.

Изначально при создании `React.createRef()` значение переменной `current` - `null`. Далее в атрибуте `ref` для элемента jsx мы указываем нужно имя нашего ref. И после монтирования элемента jsx с атрибутом `ref`, мы получим ссылку на этот элемент jsx.

`ref` не приводит к обновлению компонента в отличие от `state`.

## Пример

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // Создание
    this.nameRef = React.createRef();
  }

  render() {
    // Добавление атрибута
    return <input type="text" name="name" placeholder="name" ref={this.nameRef} />;
  }
}
```
