# [`Moving Zeros To The End`](../../index.md)

Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов.

```js
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
```

## Мое решение

```js
function moveZeros(array) {
  const result = array.filter(item => item !== 0);
  const arrayZeros = array.filter(item => item === 0);
  return result.concat(arrayZeros);
}
```

## Другие решения

```js
var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};
```
