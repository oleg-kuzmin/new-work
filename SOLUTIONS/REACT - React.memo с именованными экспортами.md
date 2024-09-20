# [`REACT - React.memo с именованными экспортами`](./index.md)

## Обычное использование memo и именованный экспорт

```js
import React, { memo } from 'react';

const MyComponent = props => {
  return <div>{props.children}</div>;
};

export const MemoizedComponent = memo(MyComponent);
```

## Использование memo совместно с именованным экспортом и реэкспортом

```js
import React, { memo } from 'react';

const MyComponent = props => {
  return <div>{props.children}</div>;
};

const memoizedComponent = memo(MyComponent);
export { MemoizedComponent as MyComponent };
```

## Использование memo с дополнительными HOC

```js
import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';

const MyComponent = props => {
  return <div>{props.children}</div>;
};

export const MemoizedComponent = withRouter(memo(MyComponent));
```
