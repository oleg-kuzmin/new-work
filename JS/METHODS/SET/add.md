# `.add()`

Метод `add()` добавляет значение в коллекцию `Set`. Если значение уже есть в коллекции, то вызов игнорируется.

Если значение уже находится в коллекции, то вызов `add()` не произведёт никакого эффекта.

При проверке используется строгое равенство, значения разных типов не будут приводиться к одному. `5` и `'5'` будут добавлены в `Set` как разные элементы. Непримитивные структуры данных тоже могут быть добавлены в `Set`.

Будьте осторожны при добавлении в `Set` непримитивных типов — объектов, массивов и так далее. Они могут выглядеть одинаково, но по факту быть разными объектами.

## Синтаксис

```js
collection.add(element);
```

### `element`

Элемент - примитивные и непримитивные структуры данных.

## Возвращает

### `collection`

Метод возвращает коллекцию, у которой был вызван. Это удобно для создания цепочек.

```js
const watched = new Set();
watched.add('Дюна').add('1917').add('Вверх');
```

## Пример

```js
const watched = new Set();
watched.add('Отель Гранд Будапешт');
console.log(watched.size); // 1
```