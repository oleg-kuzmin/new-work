# [`Vowel Count`](../../index.md)

Возвращает количество гласных в заданной строке.

Гласными для этой Ката мы будем считать `a`, `e`, `i`, `o`, `u` (но не `y`).

Входная строка будет состоять только из строчных букв и/или пробелов.

## Мое решение

```js
function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').reduce((res, letter) => (vowels.includes(letter) ? res + 1 : res), 0);
}
```

## Другие решения

```js
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
```

```js
function getCount(str) {
  return str.split('').filter(c => 'aeiouAEIOU'.includes(c)).length;
}
```
