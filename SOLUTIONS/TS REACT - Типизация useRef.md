# [`TS REACT - Типизация useRef`](./index.md)

```tsx
import { useRef } from 'react';

function Component() {
  const nodeRef = useRef<HTMLDivElement | null>(null);
}
```
