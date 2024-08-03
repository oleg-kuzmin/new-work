# [`Pick`](../index.md/#утилиты)

Позволяет нам создавать новый тип, оставляя только переданные ключи-аргументы, которые нам нужны.

## Синтаксис

```ts
Pick<T, K>;
```

### `T`

Изначальный тип.

### `K`

Ключи, которые останутся в новом типе. Можно указать union для нескольких значений.

## Возвращает

Новый тип.

## Пример

```ts
type User = {
  id: number;
  name: string; // останется
  email: string; // останется
  age: number;
};

type UserContactInfo = Pick<User, 'name' | 'email'>;

type UserContactInfo = {
  name: string;
  email: string;
};
```
