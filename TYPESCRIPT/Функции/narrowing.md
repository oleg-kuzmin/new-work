# [`narrowing`](../index.md)

- [Описание](#описание)
- [Пример](#пример)
  - [Примитивы](#примитивы)
  - [Массив](#массив)
  - [Объект](#объект)
  - [Одинаковые типы](#одинаковые-типы)

## [Описание](#enum)

В случае разных типов для параметра функции необходимо сделать сужение типов. Тело функции дополняется проверками на тот или иной тип. TS распознает наличие проверки и присвоит нужный тип.

## [Пример](#сужение-типов)

### [Примитивы]

```ts
function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log(id);
  } else if (typeof id === 'number') {
    console.log(id);
  } else {
    console.log(id);
  }
}
```

### [Массив](#сужение-типов)

```ts
function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}
```

### [Объект](#сужение-типов)

```ts
function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}
```

### [Одинаковые типы](#сужение-типов)

Используется редко, но в примере если a и b равны, то соответственно равны их типы. Проверку можно записать чуть короче.

```ts
function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
    // string
  } else {
    // все остальное
  }
}
```
