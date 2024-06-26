# `Object.keys()`

Массив ключей объекта удобно получить, передав объект как аргумент методу `Object.keys`.

Лучше не полагаться на порядок ключей в объекте. Когда порядок элементов важен — используйте массивы.

## Синтаксис

```js
Object.keys(someObject);
```

### `someObject`

Объект - ключи из которого нужно достать.

## Возвращает

### `array`

Массив - массив строк с ключами.

## Пример

```js
const user = { name: 'Алан', surname: 'Кей' };
Object.keys(user); // ["name", "surname"]
```
