# `Object.fromEntries()`

Метод преобразует массив, состоящий из элементов - других массивов `[ключ, значение]` в объект.

## Синтаксис

```js
Object.fromEntries(array);
```

### `array`

Массив - состоящий из элементов - других массивов `[ключ, значение]`.

## Возвращает

### `object`

Созданный объект.

## Пример

```js
const person = [
  ['name', 'Oleg'],
  ['isProgrammer', 'true'],
  ['cars', ['Lada', 'Porshe']],
];

console.log(Object.fromEntries(person));
// { name: 'Oleg', isProgrammer: 'true', cars: ['Lada', 'Porshe'] }
```
