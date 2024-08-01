# [`void`](../index.md)

Специальный тип для `return` в функциях, указывающий на то, что функция ничего не возвращает. Но `void` говорит нам, что функция завершится в отличие от `never`.

## Пример

```ts
function log(name: string): void {
  console.log('Hello', name);
}
```
