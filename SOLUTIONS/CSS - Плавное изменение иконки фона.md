# [`CSS - Плавное изменение иконки фона`](./index.md)

```jsx
function Button() {
  return <button href="#" className={styles.LinkToPageFavorite}></button>;
}
```

```scss
.LinkToPageFavorite {
  width: 32px;
  height: 32px;
  background: url('/icons/icon-like.svg') no-repeat center / contain;
  cursor: pointer;

  &::after {
    width: 100%;
    height: 100%;
    background: url('/icons/icon-like-hover.svg') no-repeat center / contain;
    content: '';
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover::after {
    opacity: 1;
  }
}
```
