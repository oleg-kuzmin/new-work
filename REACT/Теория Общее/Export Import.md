# [`Export Import`](../index.md)

## По умолчанию

Файл может иметь не более одного экспорта по умолчанию. Можно указать любое имя после `import`.

```jsx
// 1 вариант export
export default function Button() {}

// 2 вариант export
function Button() {}
export default Button;

// import
import Button from './Button.js';
```

## Именнованный

Файл может иметь множество именованных экспортов, имя должно совпадать с обеих сторон.

```jsx
// 1 вариант export
export function Button() {}

// 2 вариант export
function Button() {}
export { Button };

// import
import { Button } from './Button.js';
```
