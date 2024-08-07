# [`Find out whether the shape is a cube`](../../index.md)

Выяснить, является ли фигура кубом

Чтобы найти объем (в кубических сантиметрах) прямоугольного параллелепипеда, используйте формулу::

`volume = Length * Width * Height`

Но кто-то забыл использовать надлежащий учет, поэтому у нас есть только объем и длина одной стороны!
Вы должны выяснить, равны ли стороны прямоугольного параллелепипеда (= является кубом).
Возвращает true, если кубоид может иметь равные стороны, в противном случае возвращает false.
Возвращайте false также для недопустимых чисел (например, объем или сторона меньше или равна 0).
Примечание: сторона будет целым числом

## Мое решение

```js
const cubeChecker = function (volume, side) {
  return volume > 0 && side > 0 && side ** 3 === volume;
};
```

## Другие решения

```js
var cubeCheckerBest = function (volume, side) {
  return Math.pow(side, 3) === volume && side > 0;
};
```
