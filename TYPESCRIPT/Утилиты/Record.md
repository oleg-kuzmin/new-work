# [`Record`](../index.md)

Создает тип объекта, ключами свойств которого являются переданные ключи, а значениями свойств переданные типы. Эту утилиту можно использовать для сопоставления свойств одного типа с другим типом.

## Синтаксис

```ts
Record<K, T>;
```

### `K`

Допустимые типы ключей свойств.

### `T`

Допустимые типы значений свойств.

## Пример

### Пример 1

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

### Пример 2

```ts
type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';
type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>;

const myBrands: BrandNames = {
  apple: '',
};
```
