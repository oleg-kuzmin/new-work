# [`enum (Список значений)`](../index.md)

Это не просто тип. В отличие от всего остального он преобразуется в js в iife. Сам по себе enum не просто мета-информация о типах, а сам по себе является значением.

`enum` - это список ограниченных значений, на которые можно далее полагаться в рамках кода (как литералы в type).

Должен находится на самом верху файла до того, как мы его используем.

Проблемы `enum`, в том что их нужно поддерживать (например если добавляется новый ключ, нужно пересобирать приложение), поэтому не нужно его использовать для каких-то должностей (лучше брать их из БД), для динамических данных (типа id), для микросервисов. Используйте `enum` для констант, которые никогда не будут меняться (месяцы, времена года, стороны света).

## Пример

### Без значений

Создает два ключа `UserRole.Admin` и `UserRole.User`

Автоматически назначит им значения в виде чисел - номеров по порядку, начиная с `0`

```ts
enum UserRole {
  Admin,
  User,
}
```

### Явное задание значений

Обычно это или число, или строка. Если задать число, ts автоматические инкрементирует следующие числа

```ts
enum UserRole {
  Admin = 'admin',
  User = 'user',
}

const user = {
  role: UserRole.Admin,
};

// пример проверки
if (user.role === UserRole.Admin) {
  // код проверки
}
```

```ts
enum StatusCode {
  ERROR = 500,
  NOT_FOUND = 404,
  NOT_AUTH = 403,
}
```

```ts
enum Grades {
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior',
}

interface Dev {
  login: string;
  skills: string[];
  level: Grades;
}

function upGrade(user: { level: Grades }): void {
  if (user.level === Grades.Junior) {
    user.level = Grades.Middle;
  } else if (user.level === Grades.Middle) {
    user.level = Grades.Senior;
  }
}

const dev: Dev = {
  login: 'oleg',
  skills: ['html', 'css', 'js', 'react', 'ts'],
  level: Grades.Junior,
};

upGrade(dev);
```

### Const enum

Так как `enum` автоматически преобразуется в функцию в js, можно задать `const` и тогда `enum` превратиться в итоговом коде в константы. НО если какой-то ключ enum не используется, то в js он НЕ СОЗДАЕТСЯ.

```ts
const enum UserRole {
  Admin,
  User,
}
```
