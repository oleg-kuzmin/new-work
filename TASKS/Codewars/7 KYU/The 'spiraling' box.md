# [`The 'spiraling' box`](../../index.md)

Даны два положительных целых числа m (ширина) и n (высота). Заполните двумерный список (или массив) размером m на n следующим образом:

(1) Все элементы в первой и последней строке и столбце равны 1.

(2) Все элементы во второй и предпоследней строке и столбце равны 2, за исключением элементов из шага 1.

(3) Все элементы в третьей и предпоследней строке и столбце равны 3, за исключением элементов из предыдущих шагов.

И так далее ...

Например

Дано m = 5, n = 8, ваша функция должна вернуть

```js
[
  [1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 2, 2, 1],
  [1, 1, 1, 1, 1],
];
```

Дано m = 10, n = 9, ваша функция должна вернуть

```js
[
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1],
  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
```

## Мое решение

```js
function createBox(width, height) {
  const result = Array(height);
  for (let i = 0; i < result.length; i++) {
    result[i] = Array(width).fill('');
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = width - 1;
  let startRow = 0;
  let endRow = height - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter;
    }
    endColumn--;
    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter;
    }
    startColumn++;
    counter++;
  }

  return result;
}
```
