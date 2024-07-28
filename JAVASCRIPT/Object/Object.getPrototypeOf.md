# [`Object.getPrototypeOf()`](../index.md)

Статический метод `Object.getPrototypeOf()` возвращает прототип указанного объекта. Другими словами - значение внутреннего свойства `[[Prototype]]`.

## Синтаксис

```js
Object.getPrototypeOf(someObject);
```

### `someObject`

Объект - объект, значение прототипа которого мы хотим получить.

## Возвращает

### `object`

Объект - с методами prototype, значение свойства `[[Prototype]]`.

## Пример

```js
const prototype = {};
const object = Object.create(prototype);
console.log(Object.getPrototypeOf(object) === prototype); // true
```
