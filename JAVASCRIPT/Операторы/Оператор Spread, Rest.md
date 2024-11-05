# [`... (Spread, Rest)`](../index.md)

Принимает массив или объект и расширяет его на отдельные элементы.

В ES6 появился новый оператор: `...` (три точки). В зависимости от контекста применения и ожидаемой функциональности эти три точки `...` называют либо `spread`, либо `rest`.

Оператор разделения объекта на свойства - `spread` или оператор соединения свойств в объект - `rest`.

Не мутирует изначальный объект, объект копируется только на один уровень вложенности.

## Spread

### Вызов функции

При вызове функции Spread-оператор разбивает массив на отдельные элементы

```js
function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}
const numbers = [1, 2, 3];

// C Spread-оператором
multiplyThreeNumbers(...numbers);

// Без Spread-оператора
multiplyThreeNumbers(numbers[0], numbers[1], numbers[2]);
```

### Создание массива

```js
const donorArray = ['это', 'старые', 'значения'];
const newArray = [...donorArray, 'новое значение'];
console.log(newArray); // ['это', 'старые', 'значения', 'новое значение']

const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
console.log(alphabetList); // ['a', 'b', 'c', 'd' ...]
```

### Создание объекта

```js
const person = { name: 'Иван', lastName: 'Иванов' };
const userData = { ...person, username: 'killer3000' };
console.log(userData); // {name: 'Иван', lastName: 'Иванов', username: 'killer3000'}
```

## Rest

Собирает свойства в массив. Rest-оператор всегда стоит в конце.

### Объявление функции

```js
// С Rest-оператором
function consoleDogs(firstDog, ...otherDogs) {
  console.log(`Первая собака: ${firstDog}`);
  console.log(`Остальные собаки: ${otherDogs}`);
}

// Без Rest-оператора
function consoleDogs(dog1, dog2, dog3, dog4) {
  console.log(`Первая собака: ${dog1}`);
  console.log(`Остальные собаки: ${[dog2, dog3, dog4]}`);
}

consoleDogs('Спаниель', 'Овчарка', 'Борзая', 'Метис');
```
