# [`structuredClone()`](../index.md)

Позволяет выполнять глубокое копирование сложных структур данных.

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone" target="_blank">(MDN)</a>
- <a href="https://doka.guide/js/shallow-or-deep-clone/" target="_blank">(Яндекс)</a>
- <a href="https://caniuse.com/?search=structuredClone" target="_blank">(Caniuse)</a>

## Синтаксис

```js
const clone = structuredClone(value, options);
```

### `value`

Объект для клонирования.

### `options` (опционально)

Объект со следующими свойствами:

#### `transfer`

Массив переносимых объектов, которые будут перемещены, а не клонированы в возвращаемый объект.

## Возвращает

Точная копия объекта.

## Пример

```js
const original = { name: 'MDN' };
const clone = structuredClone(original);
```
