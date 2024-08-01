# [`readonly`](../index.md)

При использовании этого оператора устанавливается запрет любых изменений. Свойство становится только для чтения. Невозможно будет применить ни методы, измененяющие значения, ни изменить само значение.

Также вместо ключевого слова `readonly` можно использовать generic `ReadonlyArray`.

## Пример

### Массив

```ts
const skills: readonly string[] = ['Dev', 'Devops'];
const skills: ReadonlyArray<string> = ['Dev', 'Devops'];
```

### Кортеж

```ts
const skill: readonly [number, string] = [1, 'Dev'];
```

### interface

```ts
interface Car {
  readonly parametr: string;
}
```
