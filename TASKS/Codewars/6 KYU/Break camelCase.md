# [`Break camelCase`](../../index.md)

Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

```js
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```

## Мое решение

```js
function solution(string) {
  return string
    .split('')
    .map(item => {
      return item === item.toUpperCase() ? ' ' + item : item;
    })
    .join('');
}
```

## Другие решения

```js
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}
```

```js
const solution = string => {
  return [...string]
    .map(char => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join('');
};
```
