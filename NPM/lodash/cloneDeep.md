# [`cloneDeep`](../index.md)

Этот метод похож на `_.clone`, за исключением того, что он рекурсивно клонирует значение.

## Синтаксис

```js
const clone = _.cloneDeep(objects);
```

### `objects`

Значения для рекурсивного клонирования.

## Возвращает

Возвращает глубоко клонированное значение.

## Пример

```js
const objects = [{ a: 1 }, { b: 2 }];
const deepClone = _.cloneDeep(objects);
```
