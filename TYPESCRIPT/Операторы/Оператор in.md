# [`Оператор in`](../index.md)

Позволяет обойти как в цикле все типы union. Ключи в этом случае принято называть с большой буквы.

## Пример

### Пример 1

```ts
type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

// MyPcRecord с оператором in
type MyPcRecord = {
  [BrandKey in WellKnownBrands]?: PcBrand;
};

// MyPcRecord с оператором in
type MyPcRecord = {
  [BrandKey in 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei']?: PcBrand;
};

// MyPcRecord аналогичная запись
type MyPcRecord = {
  apple?: PcBrand;
  lenovo?: PcBrand;
  hp?: PcBrand;
  dell?: PcBrand;
  microsoft?: PcBrand;
  huawei?: PcBrand;
};
```

### Пример 2

```ts
interface Car {
  brand: string;
  model: string;
  year: number;
}

type CarFactory = {
  [K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void;
};
```
