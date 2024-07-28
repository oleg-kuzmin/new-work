# [`Object.is()`](../index.md)

Определяет являются ли два значения одним и тем же значением.

## Синтаксис

```js
Object.is(value1, value2);
```

### `value1`

Первое значение для сравнения.

### `value2`

Второе значение для сравнения.

## Возвращает

### `boolean`

- `true` - если значения равны
- `false` - если нет

## Пример

```js
console.log(Object.is('1', 1)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(-0, 0)); // false

const obj = {};
console.log(Object.is(obj, {})); // false
```
