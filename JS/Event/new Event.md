# [`new Event()`](../index.md)

Создает кастомное событие.

Чтобы добавить дополнительные данные в объект события, используется метод конструктора `new CustomEvent()`.

## Синтаксис

```js
const event = new Event('exampleName');
```

### `event`

Объект, который мы будем передавать в метод `dispatchEvent()`.

### `exampleName`

Имя нашего события.

## Пример

```js
const event = new Event('build');
elem.addEventListener('build', e => {}, false);
elem.dispatchEvent(event);
```
