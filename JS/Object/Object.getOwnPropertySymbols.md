# [`Object.getOwnPropertySymbols()`](../index.md)

Статический метод возвращает массив всех свойств символа, найденных непосредственно в данном объекте.

## Синтаксис

```js
Object.getOwnPropertySymbols(someObject);
```

### `someObject`

Объект - искомый объект.

## Возвращает

### `array`

Массив - массив строк, соответствующий всем свойствам символов, найденных непосредственно в данном объекте.

## Пример

```js
const object = {};
const a = Symbol('a');
const b = Symbol.for('b');

object[a] = 'localSymbol';
object[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object);
console.log(objectSymbols.length); // 2
```
