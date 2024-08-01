# [`as`](../index.md)

Приводит к определенному типу.

## Пример

```ts
function myFetch(url: string, method: 'post' | 'get') {}
myFetch('http', method as 'post');
```
