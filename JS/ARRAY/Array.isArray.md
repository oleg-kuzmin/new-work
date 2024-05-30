# `Array.isArray()`

Принятый в ES2015 метод проверки элемента - является ли элемент массивом.

## Cинтаксис

```js
Array.isArray(argument);
```

### `argument`

Проверяемый аргумент.

## Возвращает

- `true` - если элемент является массивом
- `false` - если нет

## Пример

```js
const arr = [1, 2, 3];
const obj = {};

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(obj)); // false
```
