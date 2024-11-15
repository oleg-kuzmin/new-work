# [`Jest`](../index.md)

## [Docs](#)

- [Начало работы](<./Docs/Getting Started.md>)

## [Api](#)

### [Globals](#)

- [describe(name, fn)](./Api/Globals/describe.md) объединяет несколько связанных тестов
- [test(name, fn, timeout)](./Api/Globals/test.md) запускает тест

### [Expect](#)

- [expect(value)](./Api/Expect/expect.md) предоставляет доступ к функциям сопоставления

  #### Модификаторы

  - [.not](./Api/Expect/.not.md) тестирует противоположное

  #### Функции сопоставления

  - [.toBe(value)](./Api/Expect/.toBe.md) сравнение примитивных значений
  - [.toBeDefined()](./Api/Expect/.toBeDefined.md) проверяет на отсутствие undefined
  - [.toBeFalsy()](./Api/Expect/.toBeFalsy.md) проверяет на логическое false
  - [.toBeNaN()](./Api/Expect/.toBeNaN.md) проверяет на NaN
  - [.toBeNull()](./Api/Expect/.toBeNull.md) проверяет на null
  - [.toBeTruthy()](./Api/Expect/.toBeTruthy.md) проверяет на логическое true
  - [.toBeUndefined()](./Api/Expect/.toBeUndefined.md) проверяет на undefined
  - [.toContain(item)](./Api/Expect/.toContain.md) проверяет находится ли элемент в строке, массиве, Set, NodeList, HTMLCollection
  - [.toEqual(value)](./Api/Expect/.toEqual.md) сравнение всех свойств объектов
  - [.toHaveLength(number)](./Api/Expect/.toHaveLength.md) проверка наличия свойства length и его числового значения
