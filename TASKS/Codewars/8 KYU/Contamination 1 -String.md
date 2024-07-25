# [`Contamination 1 -String`](../../index.md)
ИИ заразил текст персонажем!!

Этот текст теперь полностью изменен на этот символ.

Если текст или символ пусты, вернуть пустую строку.

Никогда не будет случая, когда оба пусты, так как ничего не происходит!!

Примечание. Символ представляет собой строку длиной 1 или пустую строку.

```js
Пример:
text before = "abc"
character   = "z"
text after  = "zzz"
```

## Мое решение

```js
function contamination(text, char) {
  return !text || !char ? '' : text.split('').fill(char).join('');
}
```

## Другие решения

```js
function contamination(text, char) {
  return char.repeat(text.length);
}

function contamination(text, char) {
  return text.replace(/./g, char);
}
```
