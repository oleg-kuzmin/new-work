# [`Оператор keyof`](../index.md)

Создает union некоторых значений.

После создания типа с оператором `keyof` нам будут доступны подсказки из допустимых значений.

```ts
type WindowProp = keyof Window;

const myValue: WindowProp = 'ontoggle';
```
