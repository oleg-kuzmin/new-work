# `defaultPrevented`

Свойство содержит информацию о том отменено ли поведение события по умолчанию.

## Синтаксис

```js
event.defaultPrevented;
```

## Возвращает

### `boolean`

- `true` (да, событие по умолчанию было отменено)
- `false` (нет, событие по умолчанию не отменено)

## Пример

```html
<p><a id="link1" href="#link1">Visit link 1</a></p>
<p><a id="link2" href="#link2">Try to visit link 2</a> (you can't)</p>
<p id="log"></p>
```

```js
function stopLink(event) {
  event.preventDefault();
}

function logClick(event) {
  const log = document.getElementById('log');

  if (event.target.tagName === 'A') {
    log.innerText = event.defaultPrevented
      ? `Sorry, but you cannot visit this link!\n${log.innerText}`
      : `Visiting link…\n${log.innerText}`;
  }
}

const a = document.getElementById('link2');
a.addEventListener('click', stopLink);
document.addEventListener('click', logClick);
```
