# [`Double Char`](../../index.md)

Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.

Пример (Input -> Output):

```bash
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
```

## Мое решение

Функция по примеру должна вернуть ДВА пробела, а не ОДИН.

```js
function doubleChar(str) {
  return str
    .split('')
    .map(letter => {
      if (letter === ' ') return '\xa0'.repeat(2);
      return letter.repeat(2);
    })
    .join('');
}
```

## Лучшие решения

Они неправильные, т.к. не дублируют пробелы, но видимо тесты на сайты проходят.

```js
const doubleChar = str =>
  str
    .split('')
    .map(c => c + c)
    .join('');
```

```js
function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}
```

```js
function doubleChar(str) {
  return str.replace(/(.)/g, '$1$1');
}
```
