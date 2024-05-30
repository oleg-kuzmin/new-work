# `.flat()`

Разворачивает вложенные массивы.

## Синтаксис

```js
array.flat();
```

## Возвращает

### `array`

Измененный массив.

## Пример

```js
const cars = ['Lada', 'Porshe', ['Mercedes', 'BWM']];
console.log(cars); // [ 'Lada', 'Porshe', ['Mercedes', 'BWM'] ]
console.log(cars.flat()); // [ 'Lada', 'Porshe', 'Mercedes', 'BWM']
```
