# `new CustomEvent()`

Создает кастомное событие с дополнительными данными.

## Синтаксис

```js
const event = new CustomEvent('exampleName', { detail: elem.dataset.time });
```

### `event`

Объект, который мы будем передавать в метод `dispatchEvent()`.

### `exampleName`

Имя нашего события.

### `{ detail: elem.dataset.time }`

Объект с дополнительными данными. Например данные можно записать как значение ключа `detail`.

## Пример

```js
const event = new CustomEvent('build', { detail: elem.dataset.time });

function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}

elem.dispatchEvent(event);
```
