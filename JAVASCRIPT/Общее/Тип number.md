# [`Тип number`](../index.md)

Числовой тип данных `number` представляет как целочисленные значения, так и числа с плавающей точкой.

Для этого типа данных определены стандартные арифметические операции сложения `+`, вычитания `-`, умножения `*`, деления `/`, взятия остатка от целочисленного деления `%`, сравнения `>`, `<`, `>=`, `<=`, `==`, `===`.

Кроме обычных чисел, существуют так называемые «специальные числовые значения», которые относятся к этому типу данных: `Infinity`, `-Infinity` и `NaN`.

В JavaScript отсутствует отдельный тип данных для целых чисел, для целых чисел также используется тип `number`.

Сам по себе примитивный тип `number` не имеет методов. Когда происходит вызов метода у числа, оно автоматически оборачивается в специальную обёртку, которая и содержит методы.

Для округления, взятия корней и других математических операций в JavaScript существует отдельный модуль `Math`.

В JavaScript тип `number` не может безопасно работать с числами, большими, чем `2 (в 53 степени) - 1` (т. е. `9007199254740991`) или меньшими, чем `-2 (в 53 степени) - 1` для отрицательных чисел.

## Пример

_Для записи чисел используются цифры, для разделения целой и десятичной части используется точка_

```js
const int = 4;
const decimal = 0.101;
const sameDecimal = 0.101;
```

_Можно использовать экспоненциальную запись, например, один миллион в экспоненциальной записи_

```js
const scientific = 1e6; // 1000000
```

_Числа так же могут быть представлены в двоичном, восьмеричном или шестнадцатеричном виде. Такие числа начинаются с приставки 0b, 0o, 0x соответственно. При выводе на экран они будут преобразованы в десятичную систему счисления._

```js
const binary = 0b11; // 3
const octal = 0o77; // 63
const hexadecimal = 0xff; // 255
```

_Неточные вычисления_

```js
console.log(0.2 + 0.7); // 0.8999999999999999
```

_Сравнение очень маленьких и очень больших чисел_

```js
const small = 0.11111111111111111;
const smaller = 0.1111111111111111;
console.log(small.toFixed(20)); // 0.11111111111111110494
console.log(smaller.toFixed(20)); // 0.11111111111111110494
console.log(small === smaller); // true
```

_Числовой разделитель_

```js
const number = 1_000_000; // 1000000
const binary = 0b0101_1111_0001;
const hex = 0x12_ab_34_cd;
const bigInt = 1_234_567_890n;
```

## `NaN`

`NaN` означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции.

Значение `NaN` «прилипчиво». Любая математическая операция с `NaN` возвращает `NaN`.

Если где-то в математическом выражении есть `NaN`, то оно распространяется на весь результат (есть только одно исключение: `NaN ** 0` равно 1).

Математические операции в JavaScript «безопасны». Мы можем делать что угодно: делить на ноль, обращаться с нечисловыми строками как с числами и т.д.

Скрипт никогда не остановится с фатальной ошибкой (не «умрёт»). В худшем случае мы получим `NaN` как результат выполнения.

```js
console.log('не число' / 2); // NaN (такое деление является ошибкой)
console.log(`NaN` ** 0); // 1 (исключение)
```

## `Infinity`

`Infinity` представляет собой математическую бесконечность `∞`. Это особое значение, которое больше любого числа.

Мы можем получить его в результате деления на ноль или задать его явно.

Если попытаться создать число, которое находится вне диапазона доступных чисел, результатом будет тоже бесконечность.

```js
console.log(1 / 0); // Infinity (деление на 0)
console.log(-3 / 0); // -Infinity (деление на 0 отрицательного числа)
console.log(Infinity - 1000000000); // Infinity
console.log(Infinity + -Infinity); // NaN
console.log(Infinity * 0); // NaN
console.log(Infinity * -1); // -Infinity
console.log(Infinity * -Infinity); // -Infinity
```
