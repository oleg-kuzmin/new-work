# [`Оператор in`](../index.md)

Позволяет обойти как в цикле все типы union. Ключи в этом случае принято называть с большой буквы.

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
