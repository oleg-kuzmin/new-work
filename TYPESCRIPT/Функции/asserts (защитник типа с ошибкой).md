# [`asserts (защитник типа с ошибкой)`](../index.md)

`asserts` - это некие утверждения, выбрасывающие ошибки при определенных условиях. Похоже на `type guards`, но используется реже, пригодится только когда в рантайме мы хотим выбросить ошибку и как-то обработать ее.

- `asserts user is User` - доказываем ts, что `user` имеет тип `User`
- `{ displayName: string }` - доказываем ts, что `user` имеет свойство `displayName` с значением `string`

## Пример

```ts
type User = {
  name: string;
  displayName: string | null;
};

function assertDisplayName(user: User): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error('User has no displayName');
}

function logUserByDisplayName(user: User) {
  assertDisplayName(user);
  console.log(user.displayName.toUpperCase());
}
```
