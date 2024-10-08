# [`Typescript`](../index.md)

- [Общее](#общее)
- [Примитивы](#примитивы)
- [Специальные типы](#специальные-типы)
- [Операторы](#операторы)
- [Объекты](#объекты)
- [Массивы](#массивы)
- [Функции](#функции)
- [ООП](#ооп)
- [Утилиты](#утилиты)
- [Generics](#generics)
- [React](#react)

## [Общее](#typescript)

- [`Теория`](./Общее/Теория.md)
- [`Глобальная установка`](<./Общее/Глобальная установка.md>)
- [`Настройка tsconfig.json`](<./Общее/Настройка tsconfig.json.md>)
- [`Рекурсивные типы`](<./Общее/Рекурсивные типы.md>)

## [Примитивы](#typescript)

- [`bigint (большое число)`](<./Примитивы/bigint (большое число).md>)
- [`boolean (булев тип)`](<./Примитивы/boolean (булев тип).md>)
- [`null (ничего)`](<./Примитивы/null (ничего).md>)
- [`number (число)`](<./Примитивы/number (число).md>)
- [`string (строка)`](<./Примитивы/string (строка).md>)
- [`symbol (символ)`](<./Примитивы/symbol (символ).md>)
- [`undefined (неопределено)`](<./Примитивы/undefined (неопределено).md>)

## [Специальные типы](#typescript)

- [`any (любой)`](<./Специальные типы/any (любой).md>)
- [`enum (список литералов)`](<./Специальные типы/enum (список литералов).md>)
- [`interface (описание свойств объекта)`](<./Специальные типы/interface (описание свойств объекта).md>)
- [`interface (расширение)`](<./Специальные типы/interface (расширение).md>)
- [`interface (generics)`](<./Специальные типы/interface (generics).md>)
- [`literal (литерал)`](<./Специальные типы/literal (литерал).md>)
- [`type (псевдоним)`](<./Специальные типы/type (псевдоним).md>)
- [`type (расширение)`](<./Специальные типы/type (расширение).md>)
- [`union (объединенный)`](<./Специальные типы/union (объединенный).md>)
- [`unknown (неизвестно)`](<./Специальные типы/unknown (неизвестно).md>)
- [`Отличие interface от type`](<./Специальные типы/Отличие interface от type.md>)

## [Операторы](#typescript)

- [`Оператор !`](<./Операторы/Оператор !.md>) отключает проверку на undefined
- [`Оператор as`](<./Операторы/Оператор as.md>) приведит переменную к определенному типу
- [`Оператор extends`](<./Операторы/Оператор extends.md>) возвращает типы соответствующие определенной структуре
- [`Оператор in`](<./Операторы/Оператор in.md>) обходит все типы union
- [`Оператор infer`](<./Операторы/Оператор infer.md>) возвращает тип параметра функции
- [`Оператор keyof`](<./Операторы/Оператор keyof.md>) возвращает union из возможных свойств
- [`Оператор readonly`](<./Операторы/Оператор readonly.md>) делает тип только для чтения
- [`Оператор typeof`](<./Операторы/Оператор typeof.md>) возвращает тип переменной
- [`Тернарный оператор`](<./Операторы/Тернарный оператор.md>) возвращает тип в зависимости от условия

## [Объекты](#typescript)

- [`Доступ по индексу`](<./Объекты/Доступ по индексу.md>)
- [`Типизация объектов`](<./Объекты/Типизация объектов.md>)
- [`object (тип объект)`](<./Объекты/object (тип object).md>)
- [`Свойства (обязательные)`](<./Объекты/Свойства (обязательные).md>)
- [`Свойства (опциональные)`](<./Объекты/Свойства (опциональные).md>)
- [`Свойства (функции)`](<./Объекты/Свойства (функции).md>)
- [`Свойства (неограниченное количество)`](<./Объекты/Свойства (неограниченное количество).md>)

## [Массивы](#typescript)

- [`Типизация массивов`](<./Массивы/Типизация массивов.md>)
- [`tuple (кортеж)`](<./Массивы/tuple (кортеж).md>)
- [`tuple (наименование типов)`](<./Массивы/tuple (наименование типов).md>)

## [Функции](#typescript)

- [`Типизация функций`](<./Функции/Типизация функций.md>)
- [`Параметры (обязательные)`](<./Функции/Параметры (обязательные).md>)
- [`Параметры (опциональные)`](<./Функции/Параметры (опциональные).md>)
- [`Параметры (спред-оператор)`](<./Функции/Параметры (спред-оператор).md>)
- [`Параметры (по умолчанию)`](<./Функции/Параметры (по умолчанию).md>)
- [`Параметры (объекты)`](<./Функции/Параметры (объекты).md>)
- [`Параметры (enum)`](<./Функции/Параметры (enum).md>)
- [`asserts (защитник типа с ошибкой)`](<./Функции/asserts (защитник типа с ошибкой).md>)
- [`narrowing (сужение типов)`](<./Функции/narrowing (сужение типов).md>)
- [`never (никогда не завершится)`](<./Функции/never (никогда не завершится).md>)
- [`overload (перегрузка фукнции)`](<./Функции/overload (перегрузка фукнции).md>)
- [`type guard (защитник типа)`](<./Функции/type guard (защитник типа).md>)
- [`void (ничего не возвращает)`](<./Функции/void (ничего не возвращает).md>)

## [ООП](#typescript)

- [`Геттеры и сеттеры`](<./ООП/Геттеры и сеттеры.md>)
- [`Модификаторы доступа`](<./ООП/Модификаторы доступа.md>)
- [`Нюансы конструктора`](<./ООП/Нюансы конструктора.md>)
- [`Типизация this`](<./ООП/Типизация this.md>)
- [`abstract (абстрактные классы)`](<./ООП/abstract (абстрактные классы).md>)
- [`implements (имплементация интерфейсов)`](<./ООП/implements (имплементация интерфейсов).md>)
- [`static (статические свойства и методы)`](<./ООП/static (статические свойства и методы).md>)

## [Утилиты](#typescript)

### [union](#typescript)

- [`Exclude<T, U>`](./Утилиты/Exclude.md) исключает из union переданные типы
- [`Extract<T, U>`](./Утилиты/Extract.md) извлекает из union переданные типы
- [`NonNullable<T>`](./Утилиты/NonNullable.md) исключает из переданного union пустые типы

### [literal](#typescript)

- [`Capitalize<S>`](./Утилиты/Capitalize.md) возвращает литерал, у которого первая буква большая
- [`Uncapitalize<S>`](./Утилиты/Uncapitalize.md) возвращает литерал, у которого первая буква маленькая
- [`Uppercase<S>`](./Утилиты/Uppercase.md) возвращает литерал, у которого все буквы большие
- [`Lowercase<S>`](./Утилиты/Lowercase.md) возвращает литерал, у которого все буквы маленькие

### [object](#typescript)

- [`Omit<T, K>`](./Утилиты/Omit.md) возвращает тип объекта удаляя переданные ключи
- [`Pick<T, K>`](./Утилиты/Pick.md) возвращает тип объекта оставляя переданные ключи
- [`Record<K, T>`](./Утилиты/Record.md) возвращает тип объекта с переданными ключами и значениями
- [`Partial<T>`](./Утилиты/Partial.md) возвращает тип объекта, сделав все свойства опциональными
- [`Required<T>`](./Утилиты/Required.md) возвращает тип объекта, сделав все свойства обязательными
- [`ReadOnly<T>`](./Утилиты/ReadOnly.md) возвращает тип объекта, сделав все свойства readonly

### [function](#typescript)

- [`ReturnType<typeof F>`](./Утилиты/ReturnType.md) возвращает тип значения return переданной функции
- [`Parameters<typeof F>`](./Утилиты/Parameters.md) возвращает кортеж типов аргументов

### [oop](#typescript)

- [`ConstructorParameters<typeof С>`](./Утилиты/ConstructorParameters.md) возвращает кортеж типов полей конструктора

## [Generics](#typescript)

- [`Теория`](./Generics/Теория.md)
- [`Встроенные generics`](<./Generics/Встроенные generics.md>)
- [`Использование в интерфейсах`](<./Generics/Использование в интерфейсах.md>)
- [`Использование в псевдонимах`](<./Generics/Использование в псевдонимах.md>)
- [`Использование в функциях`](<./Generics/Использование в функциях.md>)
- [`Области видимости`](<./Generics/Области видимости.md>)

## [React](#typescript)

- [`Встроенные типы`](<./React/Встроенные типы.md>)
- [`Классовые компоненты`](<./React/Классовые компоненты.md>)
- [`Типизация стилей`](<./React/Типизация стилей.md>)
- [`Типизация props`](<./React/Типизация props.md>)
- [`Типизация state`](<./React/Типизация state.md>)
