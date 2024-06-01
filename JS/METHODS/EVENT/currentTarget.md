# `currentTarget`

Свойство указывает на элемент, на котором установлен обработчик события.

## Синтаксис

```js
event.currentTarget;
```

## Возвращает

### `element`

Элемент, на котором висит обработчик.

## Пример

```html
<div id="parent">
  Click parent
  <div id="child">Click child</div>
</div>

<button id="reset">Reset</button>
<pre id="output"></pre>
```

```js
const output = document.querySelector('#output');
const parent = document.querySelector('#parent');
parent.addEventListener('click', event => {
  const currentTarget = event.currentTarget.getAttribute('id');
  const target = event.target.getAttribute('id');
  output.textContent = `Current target: ${currentTarget}\n`;
  output.textContent += `Target: ${target}`;
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => document.location.reload());
```
