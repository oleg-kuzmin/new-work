# `array.unshift()`

Метод для добавления в начало массива. Лучше использовать `push()`, он работает быстрее.

## Синтаксис

```js
array.unshift(element, element);
```

### `element`

Элемент - один или несколько.

## Возвращает

### `array.length`

Размер массива после вставки.

## Пример

```js
const watched = ['Властелин Колец', 'Гарри Поттер'];
const newLength = watched.unshift('Грязные танцы');

console.log(watched); // ['Грязные танцы', 'Властелин Колец', 'Гарри Поттер'];
console.log(newLength); // 3
```
