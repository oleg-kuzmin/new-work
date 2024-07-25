# [`Find the next perfect square!`](../../index.md)

Возможно, вы знаете несколько довольно больших идеальных квадратов. А как насчет СЛЕДУЮЩЕГО?

Завершите метод findNextSquare, который находит следующий целочисленный идеальный квадрат после переданного в качестве параметра. Напомним, что целочисленный совершенный квадрат — это целое число n такое, что sqrt(n) также является целым числом.

Если аргумент сам по себе не является точным квадратом, верните либо -1, либо пустое значение, например None или null, в зависимости от вашего языка. Вы можете предположить, что аргумент неотрицательный.

Пример ( Input --> Output )

```bash
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square
```

## Мое решение

```js
function findNextSquare(sq) {
  const squareSide = Math.sqrt(sq);

  if (!Number.isInteger(squareSide)) {
    return -1;
  }

  return Math.pow(squareSide + 1, 2);
}
```

## Другие решения

```js
function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
```

```js
function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if(Math.round(number) === number) {
    return Math.pow(++number, 2)
  }
  return -1;
}
```

```js
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
```

```js
function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  var root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2);
  } else {
    return -1;
  }
}
```
