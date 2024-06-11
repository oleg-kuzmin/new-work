# `evt.currentTarget`

Свойство указывает на элемент, на котором установлен обработчик события.

## Синтаксис

```js
evt.currentTarget;
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
parent.addEventListener('click', evt => {
  const currentTarget = evt.currentTarget.getAttribute('id');
  const target = evt.target.getAttribute('id');
  output.textContent = `Current target: ${currentTarget}\n`;
  output.textContent += `Target: ${target}`;
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => document.location.reload());
```
