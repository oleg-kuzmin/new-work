# [`Object.getOwnPropertyNames()`](../index.md)

Статический метод возвращает массив всех свойств (включая неперечисляемые свойства, за исключением тех, которые используют символ), найденных непосредственно в данном объекте.

## Синтаксис

```js
Object.getOwnPropertyNames(someObject);
```

### `someObject`

Объект - искомый объект.

## Возвращает

### `array`

Массив - массив строк, соответствующий свойствам, найденным непосредственно в данном объекте.

## Пример

```js
const object = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object)); // ["a", "b", "c"]
```