# [`CSS-модули`](../index.md)

Рядом с файлом компонента создается файл `Component.module.css`.

## Пример

```jsx
import styles from './Info.module.css';

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello</h1>
    </div>
  );
}
```

## Глобальные стили

В таком случае не будет добавляться хеш.

```css
:global(.global-style) {
  color: red;
}
```
