# [`React.Component`](../index.md)

По умолчанию конструктор можно не писать. Если в конструкторе ничего дополнительно не описывается, то его можно упразднить, т.к. аналогичная операция будет проделана автоматически.

## Пример

```jsx
import React from 'react';

class UserGreeting extends React.Component {
  // можно не указывать, будет добавляться автоматически
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <h1>Здравствуйте, {this.props.fullName}</h1>;
  }
}

export default UserGreeting;
```
