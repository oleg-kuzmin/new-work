# `object.hasOwnProperty()`

Содержит информацию о принадлежности свойства самому объекту, исключая свойства прототипов.

Лучше использовать метод `Object.hasOwn()`.

## Синтаксис

```js
obj.hasOwnProperty('keyName');
```

### `keyName`

Строка - имя проверяемого свойства.

## Возвращает

### `boolean`

- `true` - если свойство принадлежит самому объекту.
- `false` - если нет