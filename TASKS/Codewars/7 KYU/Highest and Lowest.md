# [`Highest and Lowest`](../../index.md)

В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

- Все числа действительны Int32, проверять их не нужно.
- Во входной строке всегда будет хотя бы одно число.
- Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем первым должно быть наибольшее число.

```js
highAndLow('1 2 3 4 5'); // return "5 1"
highAndLow('1 2 -3 4 5'); // return "5 -3"
highAndLow('1 9 3 4 -5'); // return "9 -5"
```

## Мое решение

```js
function highAndLow(numbers) {
  const arrNum = numbers.split(' ').map(item => +item);
  const min = Math.min(...arrNum);
  const max = Math.max(...arrNum);
  return `${max} ${min}`;
}
```

```js
function highAndLow(numbers) {
  const arrNum = numbers
    .split(' ')
    .map(item => +item)
    .sort();
  return `${arrNum[arrNum.length - 1]} ${arrNum[0]}`;
}
```

## Другие решения

```js
function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
```
