# [`Counting Duplicates`](../../index.md)

Напишите функцию, которая будет возвращать количество различных нечувствительных к регистру буквенных символов и числовых цифр, которые встречаются более одного раза во входной строке. Можно предположить, что входная строка содержит только буквы алфавита (как заглавные, так и строчные) и числовые цифры.

Например

```js
console.log(duplicateCount('abcde')); // 0 (ни один символ не повторяется более одного раза)
console.log(duplicateCount('aabbcde')); // 2 (a и b)
console.log(duplicateCount('aabBcde')); // 2 (a встречается дважды и b дважды)
console.log(duplicateCount('indivisibility')); // 1 (i встречается шесть раз)
console.log(duplicateCount('Indivisibilities')); // 2 (i встречается семь раз и s встречается дважды)
console.log(duplicateCount('aA11')); // 2 (a и 1)
console.log(duplicateCount('ABBA')); // 2 (A и B каждый встречается дважды)
```

## Мое решение

```js
function duplicateCount(string) {
  let result = [];
  const arr = string.toLowerCase().split('');

  const getCount = (array, letter) => {
    return array.reduce((prev, item) => (item === letter ? prev + 1 : prev), 0);
  };

  arr.forEach(element => {
    if (getCount(arr, element) > 1 && !result.includes(element)) {
      result.push(element);
    }
  });

  return result.length;
}
```

## Другие решения

```js
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}
```

```js
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split('')
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
```
