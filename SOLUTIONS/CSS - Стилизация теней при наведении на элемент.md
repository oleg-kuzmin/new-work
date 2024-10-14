# [`CSS - Стилизация теней при наведении на элемент`](./index.md)

<style>
  body {
    background-color: #f9f9f9;
    display: flex;
    justify-content: center;
  }
  .element1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    transition: box-shadow 0.3s;
  }
  .element1:hover {
    box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1), -10px -10px 10px white;
  }
  .element2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    transition: box-shadow 0.3s;
  }
  .element2:hover {
    box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1) inset, -10px -10px 10px white inset;
  }
</style>

```css
body {
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
}
.element1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  transition: box-shadow 0.3s;
}
.element1:hover {
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1), -10px -10px 10px white;
}
```

<div class="element1">Element 1: hover me</div>

```css
body {
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
}
.element2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  transition: box-shadow 0.3s;
}
.element2:hover {
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1) inset, -10px -10px 10px white inset;
}
```

<div class="element2">Element 2: hover me</div>
