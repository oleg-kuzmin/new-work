# `replace()`

Этот метод ищет все совпадения с заданным регулярным выражением в исходной строке и заменяет их на указанную строку.

## Синтаксис

```js
string.replace(regexp, newString);
```

### `regexp`

Регулярное выражение для поиска совпадения.

### `newString`

Строка, на которую нужно заменить найденное совпадение.

## Пример

```js
const string = 'Привет, мир!';
const regexp = /мир/;
string.replace(regexp, 'земля'); // "Привет, земля!"
```