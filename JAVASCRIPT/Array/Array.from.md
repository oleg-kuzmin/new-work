# [`Array.from()`](../index.md)

Создаст массив из псевдомассива-коллекции.

## Cинтаксис

```js
Array.from(collection);
```

### `collection`

Коллекция - псевдомассив.

## Возвращает

### `array`

Созданный массив.

## Пример

```js
const posts = content.querySelectorAll('.post');
const postsArray = Array.from(posts);

Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
```
