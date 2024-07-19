# [`bindActionCreators()`](../index.md)

Метод связывает `dispatch` и `action-creator` для использования в классовых компонентах.

## Пример

```jsx
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => ({
  inc: bindActionCreators(increment, dispatch),
  dec: bindActionCreators(decrement, dispatch),
  res: bindActionCreators(reset, dispatch),
});
```
