# [`type (псевдоним)`](../index.md/#специальные-типы)

Создает псевдоним для группы типов. Позволяет вынести типизацию в отдельную сущность.

Поддерживают стандартный экспорт/импорт модулей.

## Пример

```ts
type inputValue = string | number;
type httpMethod = 'post' | 'get';
type MyBoolean = true | false;
type Pair = [string, string];
type Pairs = Pair[];
```







