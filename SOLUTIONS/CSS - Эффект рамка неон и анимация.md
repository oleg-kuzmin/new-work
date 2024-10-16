# [`CSS - Эффект рамка неон и анимация`](./index.md)

```html
<div class="card">
  <h1>Card</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
</div>
```

```css
.card {
  margin: 0 auto;
  padding: 2em;
  width: 300px;
  background: #1c1f2b;
  text-align: center;
  border-radius: 10px;
  position: relative;
  color: white;
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.card::after,
.card::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(from var(--angle), transparent 50%, yellow);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 3px;
  border-radius: 10px;
  animation: 3s spin linear infinite;
}

.card::before {
  filter: blur(1.5rem);
  opacity: 0.5;
}

@keyframes spin {
  from {
    --angle: 0deg;
  }
  to {
    --angle: 360deg;
  }
}
```
