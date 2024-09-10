# [`TS REACT - Типизация children`](./index.md)

## `ReactNode`

Используйте его, если вам нужна гибкость при передаче в children, так как он охватывает все типы: строки, числа, булевы значения, фрагменты (массивы JSX элементов), null, undefined, а также ReactElement.

```tsx
import { ReactNode } from 'react';

interface Props {
  children: ReactNode; // ReactElement ?
}

function Component({ children }: Props) {
  return <div>{children}</div>;
}
```

## `ReactElement`

Используйте этот тип, когда вы разрешаете передавать только JSX (React) элементы и компоненты. Это более ограниченный тип по сравнению с React.ReactNode.

```tsx
import React, { ReactElement } from 'react';

interface ButtonProps {
  label: string;
  children?: ReactElement; // Только React элементы
}

const Button: React.FC<ButtonProps> = ({ label, children }) => (
  <button>
    {label}
    {children}
  </button>
);

export default Button;
```
