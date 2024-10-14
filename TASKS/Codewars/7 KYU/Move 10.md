# [`Move 10`](../../index.md)

Переместите каждую букву в предоставленной строке на 10 букв вперед по алфавиту.

Если буква выходит за пределы «z», начните снова с «a».

Входными данными будет строка длиной > 0.

Например

```js
console.log(moveTen('testcase')); // "docdmkco"
console.log(moveTen('codewars')); // "mynogkbc"
console.log(moveTen('exampletesthere')); // "ohkwzvodocdrobo"
```

## Мое решение

```js
function moveTen(string) {
  const abc = 'abcdefghijklmnopqrstuvwxyz'; // 26 букв

  const moveLetter = letter => {
    let index = abc.indexOf(letter) + 10;
    if (index >= 26) index -= 26;
    return abc[index];
  };

  return string
    .split('')
    .map(letter => moveLetter(letter))
    .join('');
}
```

## Другие решения

```js
function moveTen(s) {
  return s
    .split('')
    .map(e =>
      e.charCodeAt(0) + 10 > 122 ? String.fromCharCode(e.charCodeAt(0) - 16) : String.fromCharCode(e.charCodeAt(0) + 10)
    )
    .join('');
}
```

```js
const moveTen = s => s.replace(/./g, val => String.fromCharCode(97 + ((val.charCodeAt() - 87) % 26)));
```
