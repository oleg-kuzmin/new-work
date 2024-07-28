# [`for of`](../index.md)

Инструкция `for...of` выполняет цикл обхода перечисляемых свойств итерируемого объекта.

Инструкция `for...of` похожа на `for...in` тем, что позволяет итерироваться по коллекции. Однако, в отличие от `for...in`, `for...of` обходит только значения итерируемых свойств самого объекта.

Инструкция `for...of` позволяет использовать единый способ обхода итерируемых объектов разных типов без необходимости их преобразования в массив.

## Синтаксис

```js
for (const variable of массив) {
  // тело цикла
}
```

### `variable`

Будет принимать значение элемента массива при каждой итерации.

Переменная может определяться с использованием let, const и var, или быть объявленной заранее с использованием let и var. Если текущий элемент является объектом или массивом, можно использовать деструктурирующее присваивание.

В качестве переменной допускается использовать свойство ранее созданного объекта.

### `итерируемый объект`

Итерируемый объект можно воспринимать как коллекцию элементов. К итерируемым объектам относятся: `Array`, `String`, `Map`, `Set`, `TypedArray`, а также массивоподобные объекты, такие как `arguments` и `DOM-коллекции`.

### `тело цикла`

В каждой итерации цикла выполняются инструкции, которые могут ссылаться на `значение` текущего элемента коллекции.

Имеет доступ к `значению` переменной.

## Пример

_Выводим результат деления каждого элемента массива на 2_

```js
const numbers = [28, 16, 32];

for (const value of numbers) {
  console.log(value / 2);
}
// 14
// 8
// 16
```

_Выводим форматированное представление для элементов объекта Map_

```js
const skills = new Map();

skills.set(1, 'JavaScript');
skills.set(2, 'CSS');
skills.set(3, 'PHP');

for (let value of skills) {
  console.log(`${value[0]}.`, value[1]);
}
// 1. JavaScript
// 2. CSS
// 3. PHP
```

_Деструктурирующее присваивание_

```js
const skills = new Map();

skills.set(1, 'JavaScript');
skills.set(2, 'CSS');
skills.set(3, 'PHP');

for (let [key, value] of skills) {
  console.log(`${key}.`, value);
}
// 1. JavaScript
// 2. CSS
// 3. PHP
```

_В качестве переменной допускается использовать свойство ранее созданного объекта_

```js
const str = 'Румпельштильцхен';
const obj = {};

for (obj.value of str) {
  if (obj.value === 'н') {
    console.log('Тут есть «н»');
  }
}
// Тут есть «н»
```

_Пример break_

```js
const array = [1, true, null, {}];

for (const value of array) {
  if (value === null) {
    break;
  }
  console.log(value);
}
// 1
// true
```

_Пример continue_

```js
const array = [1, true, null, {}];

for (const value of array) {
  if (value === null) {
    continue;
  }
  console.log(value);
}
// 1
// true
// {}
```

_Отличие `for...in` от `for...of`_

```js
// Создадим массив и добавим к нему свойство name
const array = ['Fm', 'H', 'Cm7'];
array.name = 'массив аккордов';
console.log(array); // ['Fm', 'H', 'Cm7', name: 'массив аккордов']

// Обойдём массив, используя for...in
for (const item in array) {
  console.log(item);
}
// 0
// 1
// 2
// name

// Обойдём массив, используя for...of
for (const value of array) {
  console.log(value);
}
// Fm
// H
// Cm7
```
