# [`Jest`](../index.md)

## [Docs](#)

- [Начало работы](<./Docs/Getting Started.md>)

## [Api](#)

### [Globals](#)

- [describe(name, fn)](./Api/Globals/describe.md) объединяет несколько связанных тестов
- [test(name, fn, timeout)](./Api/Globals/test.md) запускает тест

### [Expect](#)

- [expect(value)](./Api/Expect/expect.md) предоставляет доступ к функциям сопоставления
  - [.toBe(value)](./Api/Expect/.toBe.md) сравнение примитивных значений
  - [.toContain(item)](./Api/Expect/.toContain.md) проверяет находится ли элемент в строке, массиве, Set, NodeList, HTMLCollection
  - [.toHaveLength(number)](./Api/Expect/.toHaveLength.md) проверка наличия свойства length и его числового значения
  - [.toEqual(value)](./Api/Expect/.toEqual.md) сравнение всех свойств объектов
