# [`interface (расширение)`](../index.md)

`interface` объединяются, склеиваются если им заданы одинаковые имена. Причем находясь не только в одном файле.

Для того чтобы предотвратить расширение другим `interface` в другом файле, нужно превратить файл где находится `interface` в модуль. Для этого нужно чтобы в файлы был хотя бы один экспорт любой сущности.

Также возможно не только добавить новые свойства, но и переопределить их.

Для предотвращения пересечения и объединения интерфейсов с какой-либо библиотекой также существует соглашение добавлять букву `I` перед объявлением интерфейса, например `interface IAccount {}`.

## Расширение interface с помощью одинаковых имен

Бывает полезно при использовании внешней библиотеки, чтобы добавить какой-то тип.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

## Расширение interface с помощью extends

Несколько интерфейсов можно указать через запятую после `extends`.

```ts
interface User {
  name: string;
  age: string;
  skills: string[];
}

interface UserWithRole extends User {
  roleId: number;
}

let user: UserWithRole = {
  name: 'asd',
  age: '18',
  skills: ['1', '2'],
  roleId: 1,
};
```
