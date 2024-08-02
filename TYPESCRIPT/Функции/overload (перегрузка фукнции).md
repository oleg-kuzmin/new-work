# [`overload (перегрузка фукнции)`](../index.md)

`overload` - перегрузка функция. Используется для удобства описания разных типов для функции. Для этого мы должны несколько раз объявить одну и ту же функцию, а реализация функции с телом должна остаться одна. Записи пишутся одна под другой.

## Пример

### Разные типы

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

add(1, 1); // ok
add('', ''); // ok
add(1, ''); // error
```

### Опциональный параметр

```ts
type AsyncCb = (res: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: AsyncCb): number;
function asyncSum(a: number, b: number, cb?: AsyncCb): any {
  const result = a + b;
  if (cb) {
    return cb(result);
  }
  return Promise.resolve(result);
}

asyncSum(1, 2);
```
