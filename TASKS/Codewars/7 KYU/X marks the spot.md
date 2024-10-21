# [`X marks the spot`](../../index.md)

Для заданного двумерного массива вернуть координаты `x`.

Если `x` отсутствует внутри массива или встречается несколько раз, вернуть `[]`.

Координаты должны быть проиндексированы нулем в порядке по строкам. Вы должны предполагать, что вы всегда будете получать массив в качестве входных данных. Массив будет содержать только `'x'` и `'o'`.

## Например

```js
Input: [];
```

Возвращает пустой массив, если входной массив — пустой => `[]`

```js
Input: [
  ['o', 'o'],
  ['o', 'o'],
];
```

Возвращает пустой массив, если x не найден => `[]`

```js
Input: [
  ['x', 'o'],
  ['o', 'x'],
];
```

Возвращает пустой массив, если найдено более одного x => `[]`

```js
Input: [
  ['x', 'o'],
  ['o', 'o'],
];
```

Возвращает `[0,0]`, когда `x` в левом верхнем углу => `[0, 0]`

```js
Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
];
```

Возвращает `[4,6]` для примера выше => `[4, 6]`

## Мое решение

```js
function xMarksTheSpot(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  let vertical = null;
  let horizontal = null;
  let counter = 0;

  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((element, index) => {
      if (element.includes('x')) {
        vertical = i;
        horizontal = index;
        counter++;
      }
    });
    if (counter > 1) {
      return [];
    }
  }

  if (vertical !== null && horizontal !== null) {
    return [vertical, horizontal];
  }

  return [];
}
```

## Другие решения

```js
const xMarksTheSpot = input => {
  let coords = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes('x')) {
      coords.push([i, input[i].indexOf('x')]);
    }
  }
  if (coords.length === 1) {
    return coords[0];
  } else {
    return [];
  }
};
```
