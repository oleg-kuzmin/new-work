# [`describe(name, fn)`](../../index.md)

- [Документация](https://jestjs.io/docs/api#describename-fn)

`describe(name, fn)` создает блок, который объединяет несколько связанных тестов. Например, если у вас есть объект `myBeverage`, который должен быть вкусным, но не кислым, вы можете протестировать его с помощью:

```js
const myBeverage = {
  delicious: true,
  sour: false,
};

describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
```

Это не обязательно - вы можете написать блоки `test` непосредственно на верхнем уровне. Но это может быть удобно, если вы предпочитаете, чтобы ваши тесты были организованы в группы.

Вы также можете вложить блоки `describe`, если у вас есть иерархия тестов:

```js
const binaryStringToNumber = binString => {
  if (!/^[01]+$/.test(binString)) {
    throw new CustomError('Not a binary number.');
  }

  return parseInt(binString, 2);
};

describe('binaryStringToNumber', () => {
  describe('given an invalid binary string', () => {
    test('composed of non-numbers throws CustomError', () => {
      expect(() => binaryStringToNumber('abc')).toThrow(CustomError);
    });

    test('with extra whitespace throws CustomError', () => {
      expect(() => binaryStringToNumber('  100')).toThrow(CustomError);
    });
  });

  describe('given a valid binary string', () => {
    test('returns the correct number', () => {
      expect(binaryStringToNumber('100')).toBe(4);
    });
  });
});
```
