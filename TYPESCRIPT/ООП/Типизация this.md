# [`Типизация this`](../index.md)

Для событий - если нужно типизировать `this` это нужно делать в качестве первого параметра функции и этот параметр не будет восприниматься как аргумент, который нужно передать.

Таким образом возможны два параметра: `this` и `evt`.

`this` требует указание объекта на который мы ссылаемся.

`HTMLButtonElement` - встроенный тип соответствующие кнопке `<button>` в html.

## Пример

```ts
const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

function myClickHandler(this: HTMLButtonElement, evt: Event) {
  this.disabled = true;
}
```
