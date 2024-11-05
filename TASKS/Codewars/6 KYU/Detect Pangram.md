# [`Detect Pangram`](../../index.md)

Панграмм - это предложение, в котором каждая буква алфавита встречается хотя бы один раз. Например, предложение `"The quick brown fox jumps over the lazy dog"` является панграммом, потому что в нем по крайней мере один раз используются буквы от A до Z (регистр не имеет значения).

Получив строку, определите, является ли она панграммой. Верните значение `true`, если это так, и `false`, если нет. Игнорируйте цифры и знаки препинания.

```js
console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
```

## Мое решение

```js
const isPangram = string => new Set(string.toLowerCase().match(/[abcdefghijklmnopqrstuvwxyz]/gi)).size === 26;
```

## Другие решения

```js
function isPangram(string) {
  string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
    return string.indexOf(x) !== -1;
  });
}
```

```js
function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(x => string.toLowerCase().includes(x));
}
```

```js
function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}
```

```js
function isPangram(string) {
  const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
  return alphabetList.every(letter => string.toLowerCase().includes(letter));
}
```
