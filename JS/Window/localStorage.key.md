# [`localStorage.key()`](../index.md)

Метод `localStorage.key()` получает ключ по индексу. Значения в хранилище хранятся в порядке их добавления, поэтому значение, добавленное первым, будет храниться в позиции 0 и так далее.

## Синтаксис

```js
localStorage.key(index);
```

### `index (Число)`

Число - индекс ключа.

## Возвращает

### `string (Строка)`

Строка - строка с ключем.

## Пример

_Базовый пример_

```js
localStorage.setItem('name', 'Дока Дог');
console.log(localStorage.key(0)); // 'name'
```

_Перебор всех значений_

Используя количество полей в хранилище и получение ключа по индексу, можно организовать перебор всех значений в хранилище.

```js
const localStorageSize = localStorage.length;

for (let i = 0; i < localStorageSize; i++) {
  console.log(localStorage.getItem(localStorage.key(i)));
}
```
