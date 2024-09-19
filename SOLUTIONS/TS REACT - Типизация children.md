# [`TS REACT - Типизация children`](./index.md)

- ReactNode
- ReactElement

## Пример

```tsx
import React, { ReactNode, ReactElement } from 'react';

interface Props {
  children: ReactNode; // ReactElement
}

function Component({ children }: Props) {
  return <div>{children}</div>;
}

const Component: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
```
