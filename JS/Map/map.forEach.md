# [`map.forEach()`](../index.md)

Метод `forEach()` используется для обхода элементов коллекции `Map`. Обход происходит в порядке добавления значений в коллекцию от старых к новым.

Метод работает идентично одноимённому методу массива.

Вместо `forEach` можно использовать цикл `for of`.

Обратите внимание: когда вызывается метод `forEach()`, в колбэк передаются текущий ключ и соответствующее ему значение — индексов в Map нет.

При обходе значений Map всегда выводит их в том порядке, в котором они были добавлены.

## Синтаксис

```js
map.forEach(callback);
```

### `callback(key, value)`

Колбэк-функцию с двумя параметрами, которую нужно выполнить на каждом элементе коллекции.

- `key` (текущий ключ)
- `value` (текущее значение)

## Пример

_Использование forEach_

```js
const map = new Map();

map.set('html', 'HTML');
map.set('css', 'CSS');
map.set('js', 'JavaScript');

map.forEach((value, key) => {
  console.log(`${key} - ${value}`);
});
// html - HTML
// css - CSS
// js - JavaScript
```

_Использование for of_

```js
const map = new Map();

map.set('html', 'HTML');
map.set('css', 'CSS');
map.set('js', 'JavaScript');

for (let [key, value] of map) {
  console.log(`${key} - ${value}`);
}
// html - HTML
// css - CSS
// js - JavaScript
```
