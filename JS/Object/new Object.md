# `new Object()`

Создать объект можно через фигурные скобки `{}` или с помощью конструктора `new Object()`.

Объекты, созданные любым способом совершенно идентичны.

## Синтаксис

```js
// Пустой Object
const myObject = new Object();

// Object с данными
const myObject = new Object({ object });
```

### `object`

Объект с данными.

## Возвращает

### `object`

Созданный объект.

## Пример

```js
// создаёт пустой экземпляр класса Object
const myObject = new Object();

// создаёт экземпляр класса Object с данными объекта
const book = new Object({ title: 'Война и мир', author: 'Лев Толстой' });
```
