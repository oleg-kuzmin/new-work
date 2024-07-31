# [`keyof`](../index.md)

Возвращает union из возможных литералов типа или интерфейса. Также нам будут доступны подсказки из этих значений.

```ts
type WindowProp = keyof Window;

const myValue: WindowProp = 'ontoggle';
```
