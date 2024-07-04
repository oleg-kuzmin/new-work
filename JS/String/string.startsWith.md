# [`string.startsWith()`](../index.md)

Метод `startsWith()` сравнивает начало строки с переданной ему подстрокой.

Он отвечает на вопрос: «Эта строка начинается вот таким набором символов?»

Если ответ «да», метод возвращает `true`, иначе — `false`.

## Синтаксис

```js
string.endsWith(text);
```

### `text`

Строка - текст, с которого начинается строка.

## Возвращает

### `boolean`

- `true` - если строка начинается с переданного набора символов
- `false` - если нет

## Пример

```js
const phrase = 'папа мыл ногу';
console.log(phrase.startsWith('па')); // true
console.log(phrase.startsWith('мыл')); // false
console.log(phrase.startsWith('тикток')); // false
```
