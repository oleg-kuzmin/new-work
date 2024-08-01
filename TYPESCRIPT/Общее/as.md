# [`as`](../index.md)

Приводит к определенному конкретному типу.

## Пример

```ts
function myFetch(url: string, method: 'post' | 'get') {}
myFetch('http', method as 'post');
```
