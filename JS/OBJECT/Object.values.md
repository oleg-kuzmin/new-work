# `Object.values()`

Возвращает значения всех свойств и методов объекта.

## Синтаксис

```js
Object.values(someObject);
```

### `someObject (Объект)`

Объект - значения из которого нужно достать

## Возвращает

### `array (Массив строк)`

Массив строк с значениями.

## Пример

```js
const user = { name: 'Алан', surname: 'Кей' };
Object.values(user); // ["Алан", "Кей"]
```