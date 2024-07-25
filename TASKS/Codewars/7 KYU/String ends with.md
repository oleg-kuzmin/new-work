# [`String ends with`](../../index.md)

Завершите решение, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).

```js
solution('abc', 'bc'); // true
solution('abc', 'd'); // false
```

## Мое решение

```js
function solution(str, ending) {
  return str.endsWith(ending);
}
```
