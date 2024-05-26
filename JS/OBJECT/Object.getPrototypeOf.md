# `Object.getPrototypeOf()`

Статический метод `Object.getPrototypeOf()` возвращает прототип указанного объекта. Другими словами - значение внутреннего свойства `[[Prototype]]`.

## Синтаксис

```js
Object.getPrototypeOf(someObject);
```

### `someObject`

Объект, значение прототипа которого мы хотим получить.

## Возвращает

### `object (Объект с методами prototype)`

Значение свойства `[[Prototype]]`.

## Пример

```js
const prototype = {};
const object = Object.create(prototype);
console.log(Object.getPrototypeOf(object) === prototype); // true
```
