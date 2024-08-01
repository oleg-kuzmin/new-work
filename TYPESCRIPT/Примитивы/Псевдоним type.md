# [`Псевдоним type`](../index.md)

- [Описание](#описание)
- [Пример](#пример)
  - [Базовый пример](#базовый-пример)
  - [Методы объекта](#методы-объекта)
  - [Необязательные параметры объекта](#необязательные-параметры-объекта)
  - [Неограниченное количество свойств объекта](#неограниченное-количество-свойств-объекта)
  - [Расширение type с помощью знака или](#расширение-type-с-помощью-знака-или)
  - [Расширение type с помощью знака и](#расширение-type-с-помощью-знака-и)
  - [Получение типа через квадратные скобки](#получение-типа-через-квадратные-скобки)

## [Описание](#type)

Создает псевдоним allas для группы типов. Позволяет вынести типизацию в отдельную сущность.

Поддерживают стандартный экспорт/импорт модулей.

## [Пример](#type)

### [Базовый пример](#type)

```ts
type inputValue = string | number;
type httpMethod = 'post' | 'get';
type MyBoolean = true | false;
type Pair = [string, string];
type Pairs = Pair[];
```

### [Методы объекта](#type)

```ts
type User = {
  print(): number;
  print: () => number;
  code: (arg: string) => string;
  log: (id: number) => void;
};
```

### [Необязательные параметры объекта](#type)

```ts
type User = {
  isNew?: boolean;
  name?: string;
};
```

### [Неограниченное количество свойств объекта](#type)

```ts
type User = {
  [key: string]: unknown;
};

// Алтернативный вариант
const user: Record<string, unknown> = {};
```

### [Расширение type с помощью знака или](#type)

Знак `|` вернет объединенный type.

```ts
type User = {
  name: string;
  age: string;
  skills: string[];
};

type Role = {
  id: number;
};

type UserWithRole = User | Role; // name | age | skills | id
```

### [Расширение type с помощью знака и](#type)

Для объектов вернется объединенный тип.

Но для union вернет тип только с одинаковыми значениями.

```ts
// для объектов
type User = {
  name: string;
  age: string;
  skills: string[];
};
type Role = {
  id: number;
};
type UserWithRole = User & Role; // name | age | skills | id

// для union
type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 & Union2; // 'a' | 'c'

// без создания дополнительного типа
type Employee = {
  contractStart: Date;
} & User &
  Person;
```

### [Получение типа через квадратные скобки](#type)

```ts
type Laptop = {
  brand: string;
};
interface Laptop {
  brand: string;
}

type F = Laptop['brand'];
const F: Laptop['brand'] = true;
```
