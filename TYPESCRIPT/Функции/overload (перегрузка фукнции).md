# [`overload (перегрузка фукнции)`](../index.md)

`overload` - перегрузка функции. Используется для удобства описания разных типов для функции. Для этого мы должны несколько раз объявить одну и ту же функцию, а реализация функции с телом должна остаться одна. Записи пишутся одна под другой.

В самой функции реализации можно указать `any` или `unknown`.

## Пример

### Обязательные параметры

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

### Необязательные параметры

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
