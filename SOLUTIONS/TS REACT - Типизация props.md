# [`TS REACT - Типизация props`](./index.md)

## `{ name, age }: ComponentProps`

```tsx
interface ComponentProps {
  name: string;
  age: number;
}

const Component = ({ name, age }: ComponentProps) => (
  <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>
);

export default Component;
```

## `React.FC<ComponentProps>`

```tsx
// с React 17 для создания компонента этот импорт не обязателен, но если мы используем React.FC - то нужно
import React from 'react';

interface ComponentProps {
  name: string;
  age: number;
  isActive?: boolean;
}

const Component: React.FC<ComponentProps> = ({ name, age, isActive }) => (
  <div>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Active: {isActive ? 'Yes' : 'No'}</p>
  </div>
);

export default Component;
```
