# [`Оператор typeof`](../index.md)

Вернет тип переменной, не строку с именем как в JS, а именно тип.

Результат можно сохранить.

## Пример

### Переменная

```ts
let str = 'Hello World';
type X = typeof str; // : string
```

### Функция

Бывает полезен в том числе в функциях для того, чтобы сделать похожую функцию и не описывать еще раз типы. Вместе с оператором `typeof` не используется вызов функции, только инструкция!

```ts
function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0);
  return sum / nums.length;
}

type Fn = typeof average; // (...nums: number[]) => number
const max: Fn = (...numbers) => Math.max(...numbers);
```

### Возвращаемый тип

```ts
type ReturnFn = ReturnType<typeof average>; // : number
```
