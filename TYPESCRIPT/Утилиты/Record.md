# [`Record`](../index.md)

Создает тип объекта, ключами свойств которого являются переданные ключи, а значениями свойств переданные типы. Эту утилиту можно использовать для сопоставления свойств одного типа с другим типом.

## Синтаксис

```ts
Record<K, T>;
```

### `K`

Ключи свойств.

### `T`

Значения свойств.

## Возвращает

Новый тип.

## Пример

```ts
// Keys
interface CatInfo {
  age: number;
  breed: string;
}
// Type
type CatName = 'miffy' | 'boris' | 'mordred';

// Record<Keys, Type>
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: 'Persian' },
  boris: { age: 5, breed: 'Maine Coon' },
  mordred: { age: 16, breed: 'British Shorthair' },
};

cats.boris; // { age: 5, breed: 'Maine Coon' }
```
