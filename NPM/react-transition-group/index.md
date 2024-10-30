# [`react-transition-group`](../index.md)

## Установка

```bash
npm i react-transition-group @types/react-transition-group
```

## Пример

### Компонент

```tsx
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

interface Props {
  isActive: boolean;
}

function Component({ isActive }: Props) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={isActive} classNames={{ ...styles }} timeout={500} unmountOnExit>
      <div ref={nodeRef}>Text</div>
    </CSSTransition>
  );
}
```

### Стили компонента

```css
.enter {
  transform: translateY(-100%);
}

.enterActive {
  transform: translateY(0);
  transition: transform 0.5s;
}

.exit {
  transform: translateY(0);
}

.exitActive {
  transform: translateY(-100%);
  transition: transform 0.5s;
}
```
