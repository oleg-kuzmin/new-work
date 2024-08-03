# [`interface (generics)`](../index.md/#специальные-типы)

Интерфейсы позволяют использовать generics (шаблоны). С помощью шаблонов можно переопределять типы каких-либо полей, типы аргументов методов и любые другие типы внутри интерфейса. Для одного интерфейса их может быть несколько и они могут иметь значения по умолчанию, подобные тем, что задаются для аргументов функций.

## Пример

```ts
interface IStudent<CourseIdT = number, CourseNameT = string> extends IPerson {
  courseID: CourseIdT; // тип свойства по умолчанию number
  courseName: CourseNameT; // тип свойства по умолчанию string
}

type FrontStudentType = IStudent<number, 'frontend'>; // на основе нашего интерфейса
// создаем новый тип, поле courseID
// указываем явно как number, а полю
// courseName даем тип значения 'frontend'

const frontStudent: FrontStudentType = {
  // создаем объект нашего типа
  courseID: 1,
  courseName: 'frontend',
};
```
