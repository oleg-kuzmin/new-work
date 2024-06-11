# `element.classList.remove()`

Метод используется для удаления класса у элемента. В качестве аргумента нужно передавать строку с именем класса.

## Синтаксис

```js
element.classList.remove(className);
```

### `className`

Строка - имя класса. Можно добавить несколько классов через запятую.

## Возвращает

### `undefined`.

## Пример

```js
const garage = document.querySelector('.garage');
garage.classList.remove('jaguar');

// Несколько строк
garage.classList.remove('porshe', 'audi');
```
