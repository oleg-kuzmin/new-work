# [`Jenny's secret message`](../../index.md)

Дженни написала функцию, которая возвращает приветствие для пользователя. Однако она влюблена в Джонни и хотела бы поприветствовать его немного по-другому. Она добавила к своей функции особый случай, но допустила ошибку.

Вы можете помочь ей?

```js
function greet(name) {
  return 'Hello, ' + name + '!';
  if (name === 'Johnny') return 'Hello, my love!';
}
```

## Мое решение

```js
function greet(name) {
  return 'Hello, ' + (name === 'Johnny' ? 'my love' : name) + '!';
}
```
