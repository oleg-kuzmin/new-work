# [`Convert a string to an array`](../../index.md)

Напишите функцию, которая разбивает строку и преобразует ее в массив слов.

```js
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
```

## Мое решение

```js
function stringToArray(string) {
  return string.split(' ');
}
```
