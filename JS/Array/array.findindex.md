# `array.findindex()`

Помимо `findIndex()`, у массивов есть ещё и метод `indexOf()`. Он работает схожим образом: возвращает индекс первого
подходящего элемента или `-1`, но, в отличие от `findIndex()`, принимает как аргумент не функцию, а искомое значение.

Метод `findIndex()` обходит массив и возвращает индекс первого элемента, который подходит под условие функции. Если ничего не подошло, то он возвращает -1.

Найти индекс первого подходящего элемента можно и с помощью цикла `for`, но метод `findIndex()` позволяет сделать это декларативно. С помощью функции-колбэка мы описываем, какой элемент мы ищем и не описываем как должен происходить поиск. Поиск с помощью цикла `for` содержал бы гораздо больше деталей.

Если используете `findIndex` в условии, то всегда явно проверяйте возвращаемое значение на `-1`.

И если мы хотим осуществить поиск по массиву объектов, то `indexOf()` вряд ли сможет нам помочь. Дело в том, что переменная не хранит в себе содержимое объекта, она содержит только ссылку на него. Следовательно, `indexOf()` сравнивает ссылки, а не сами объекты.

Если вам нужно получить элемент, а не его индекс, то используйте метод `find()`. А если необходимо проверить наличие чего-либо в массиве, то сначала обратите внимание на метод `includes()`.

## Синтаксис

```js
array.findIndex(function (item, index, array) {});
```

### `item`

Текущий элемент массива. Текущий элемент массива используется часто, поэтому и стоит на первом месте. Если другие аргументы не нужны, достаточно прописать его.

### `index`

Индекс текущего элемента. Второй аргумент колбэка — фактически счётчик цикла `for`.

### `array`

Исходный массив. Исходный массив как аргумент пригодится, когда нужно обратиться к свойствам этого исходного массива.

## Возвращает

### `number`

Число с индексом. Возвращает индекс первого найденного элемента или -1, если ничего не нашлось.

## Пример

```js
function isWantedGuest(element, index, array) {
  const guestName = 'Лиза';
  return element === guestName;
}

const partyGuests = ['Даня', 'Саша', 'Юля', 'Лиза', 'Егор'];
const meetingGuests = ['Даня', 'Егор', 'Арсений'];

console.log(partyGuests.findIndex(isWantedGuest)); // 3 (так как partyGuests[3] -> 'Лиза')
console.log(meetingGuests.findIndex(isWantedGuest)); // -1 (совпадений нет)
```

```js
// Если число чётное — вернёт true, если нечётное — false
function isEven(element) {
  return element % 2 === 0;
}

const onlyOddNumbers = [1, 3, 5, 7, 9];
const randomNumbers = [7, 1, 6, 3, 5];

console.log(onlyOddNumbers.findIndex(isEven)); // -1 (элемент не найден)
console.log(randomNumbers.findIndex(isEven)); // 2 (так как randomNumbers[2] -> 6)
```