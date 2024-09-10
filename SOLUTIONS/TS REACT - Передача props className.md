# [`TS REACT - Передача props className`](./index.md)

```tsx
interface PropsComponent {
  className?: string;
}

export default function Component({ className }: PropsComponent) {
  const externalClass = className ? ` ${className}` : '';
  return <div className={styles.Component + externalClass}>Component</div>;
}
```
