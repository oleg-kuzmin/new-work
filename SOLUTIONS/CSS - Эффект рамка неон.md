# [`CSS - Эффект градиента на тексте`](./index.md)

<style>
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
.card::after,
.card::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 3px;
  border-radius: 10px;
}
.card::before {
  filter: blur(1.5rem);
  opacity: 0.5;
}  
</style>

<div class="card">
  <h1>Card</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
</div>

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

.card::after,
.card::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545);
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  z-index: -1;
  padding: 3px;
  border-radius: 10px;
}

.card::before {
  filter: blur(1.5rem);
  opacity: 0.5;
}
```
