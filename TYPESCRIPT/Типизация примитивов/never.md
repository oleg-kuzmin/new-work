# [`never`](../index.md)

Специальный тип в функциях, указывающий на то, что функция никогда не завершится. Никакой `return` выполнен не будет.

```ts
function crash(): never {
  throw new Error('crash');
}
```
