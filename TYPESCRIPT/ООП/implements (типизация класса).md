# [`implements (типизация класса)`](../index.md/#ооп)

Назначение типов для класса осуществляется с помощью ключевого слова `implements`.

```ts
interface IDeveloper {
  name: string;
  level: string;
  skills: string[];
}

class Developer implements IDeveloper {}
```
