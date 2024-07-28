# [`Object.hasOwn()`](../index.md)

Проверяет принадлежность свойства самому объекту, исключая свойства прототипов.

## Синтаксис

```js
Object.hasOwn(someObject, property);
```

### `someObject`

Объект - объект для проверки.

### `property`

Строка - имя проверяемого свойства.

## Возвращает

### `boolean`

- `true` - если свойство принадлежит самому объекту
- `false` - если нет

## Пример

```js
const object = {
  prop: 'exists',
};

console.log(Object.hasOwn(object, 'prop')); // true
console.log(Object.hasOwn(object, 'toString')); // false
console.log(Object.hasOwn(object, 'undeclaredPropertyValue')); // false
```
