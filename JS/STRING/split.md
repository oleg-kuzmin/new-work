# `.split()`

Метод `split()` разбивает исходную строку на массив подстрок, используя аргумент как разделитель.

Чаще всего это нужно, чтобы разбить строку на слова.

## Синтаксис

```js
string.split(separator);
```

### `string`

Строка - в которой будет произведена разбивка.

### `separator`

Строка или регулярное выражение - как разделитель.

## Возвращает

### `array`

Возвращает массив получившихся подстрок.

## Пример

_деление по словам, разделитель - пробел_

```js
const phrase = 'London is the capital of Great Britain.';
phrase.split(' '); // [ 'London', 'is', 'the', 'capital', 'of', 'Great', 'Britain.' ]
```

_деление по буквам, разделитель - пустая строка_

```js
const phrase = 'хлеб да соль';
phrase.split(''); // [ 'х', 'л', 'е', 'б', '', 'д', 'а', '', 'с', 'о', 'л', 'ь' ]
```

_массив из 1 строки, разделителя нет_

```js
const phrase = 'London is the capital of Great Britain.';
phrase.split(); // [ 'London is the capital of Great Britain.' ]
```

_регулярное выражение, разделитель - перенос строки_

```js
const phrase = 'London is the\ncapital of\nGreat Britain.';
const regexp = /\n/;
phrase.split(regexp); // [ 'London is the', 'capital of', 'Great Britain.' ]
```

_регулярное выражение, разделитель - пробел_

```js
const phrase = 'Это текст для примера';
const regexp = / /;
phrase.split(regexp); // ["Это", "текст", "для", "примера"]
```
