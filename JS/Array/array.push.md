# `array.push()`

Метод для добавления в конец массива.

Принимает произвольное количество аргументов.

Все аргументы будут добавлены в массив.

Лучше использовать добавлять новые элементы в конец массива, чем в начало, так работает быстрее.

## Синтаксис

```js
array.push(element);
```

### `element`

Элемент - один или несколько.

## Возвращает

### `array.length`

Число - размер массива после вставки.

## Пример

_Одно значение_

```js
const watched = ['Властелин Колец', 'Гарри Поттер'];
watched.push('Зеленая Книга');
console.log(watched); // ['Властелин Колец', 'Гарри Поттер', 'Зеленая книга']
```

_Несколько значений_

```js
const emeraldCityHeroes = ['Лев', 'Дровосек', 'Страшила'];
emeraldCityHeroes.push('Элли', 'Тотошка');
console.log(emeraldCityHeroes); // ["Лев", "Дровосек", "Страшила", "Элли", "Тотошка"]
```