# [`Check three and two`](../../index.md)

Дан массив, содержащий ровно 5 строк «a», «b» или «c» (символы в Java, символы в Fortran, символы в Haskell).

Проверьте, содержит ли массив три и два одинаковых значения.

## Пример

```js
checkThreeAndTwo(['a', 'a', 'a', 'b', 'b']); // true // 3x "a" and 2x "b"
checkThreeAndTwo(['a', 'b', 'c', 'b', 'c']); // false 1x "a", 2x "b" and 2x "c"
checkThreeAndTwo(['a', 'a', 'a', 'a', 'a']); // false 5x "a"
```

## Мое решение

```js
function checkThreeAndTwo(array) {
  const counterLetter = { a: 0, b: 0, c: 0 };

  array.forEach(element => {
    if (element in counterLetter) {
      counterLetter[element] = counterLetter[element] + 1;
    }
  });

  for (const letter in counterLetter) {
    if (counterLetter[letter] >= 3) {
      for (const key in counterLetter) {
        if (counterLetter[key] >= 2 && letter !== key) {
          return true;
        }
      }
    }
  }

  return false;
}
```

## Другие решения

```js
function checkThreeAndTwo(array) {
  const counts = array.reduce((result, letter) => {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }

    return result;
  }, {});

  const containsThree = Object.values(counts).some(x => x === 3);
  const containsTwo = Object.values(counts).some(x => x === 2);

  return containsThree && containsTwo;
}
```

```js
function checkThreeAndTwo(array) {
  let as = array.filter(x => x === 'a').length;
  let bs = array.filter(x => x === 'b').length;
  let cs = array.filter(x => x === 'c').length;
  return (as === 3 || bs === 3 || cs === 3) && (as === 2 || bs === 2 || cs === 2);
}
```
