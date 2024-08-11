# [`Оператор as`](../index.md)

Приводит переменную к определенному конкретному типу.

## Пример

### Пример 1

```ts
function myFetch(url: string, method: 'post' | 'get') {}
myFetch('http', method as 'post'); // : 'post'
```

### Пример 2

Выражение `as const` сделает кортеж `readonly`.

```ts
const sizes = ['small', 'medium', 'large'] as const;
```
