# [`Object.create()`](../index.md)

Создает объект, добавляя в его свойство `__proto__`, переданные методы объекта.

## Синтаксис

```js
Object.create(objectPototype);
```

### `objectPototype`

Объект - объект, который должен стать прототипом нового объекта

## Возвращает

### `object`

Созданный объект.

## Пример

```js
// Создаем прототип
const objectPototype = {
  like: function () {
    this.isLiked = !this.isLiked;
  },
};

// Создаем новый пустой объект с указанным прототипом
const newSong = Object.create(songPrototype);
```
