# [`this`](../index.md)

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
