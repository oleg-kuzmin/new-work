# [`any (любой)`](../index.md)

Специальный тип крайнего случая, который обозначает все что угодно. Используется когда мы не знаем что мы можем использовать. В большинстве случаев означает отсутствие типизации и нужно стараться его не использовать.

Вместо `any` нужно использовать `unknown`. 

## Пример

```ts
let x: any = 1; // : any
let x: [any, any] = ['hello', 10]; // : [any, any]
let x: Array<any> = ['hello', 10]; // : any[]
```
