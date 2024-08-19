# [`Оператор delete`](../index.md)

Если вы знаете наверняка, что ключ в объекте вам больше не понадобится, удаляйте его оператором delete.

Удалится и ключ и значение.

Чаще всего свойства не удаляют, а сбрасывают значение, устанавливая `undefined` или подходящее по смыслу.

Более того в Safari могут быть проблемы с этим оператором.

## Синтаксис

```js
delete object.prop;
delete book['prop'];
```

## Возвращает

### `undefined`

## Пример

```js
const book = {
  title: 'Война и мир',
  author: 'Лев Толстой',
  pages: 1274,
  isFinished: true,
  usersReading: [1946, 1293, 7743],
};

delete book.usersReading;
delete book['isFinished'];
```
