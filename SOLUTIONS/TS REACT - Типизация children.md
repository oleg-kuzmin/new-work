# [`TS REACT - Типизация children`](./index.md)

```tsx
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Component({ children }: Props) {
  return <div>{children}</div>;
}
```
