# [`Object.entries()`](../index.md)

Метод возвращает массив, состоящий из элементов - других массивов [ 'ключ', значение ].

## Синтаксис

```js
Object.entries(someObject);
```

### `someObject`

Объект - объект, который должен будет преобразован в массив.

## Возвращает

### `array`

Массив - созданный массив.

## Пример

```js
const person = {
  name: 'Oleg',
  isProgrammer: true,
  cars: ['Lada', 'Porshe'],
};

console.log(Object.entries(person));
// [ ['name', 'Oleg'], ['isProgrammer', true], ['cars', ['Lada', 'Porshe'] ] ]
```
