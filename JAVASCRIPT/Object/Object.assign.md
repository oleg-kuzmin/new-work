# [`Object.assign()`](../index.md)

При копировании объектов или массивов JavaScript копирует данные только на один уровень вглубь.

Непримитивные типы данных, такие как массивы и объекты, хранятся по ссылке. Так как копирование происходит только на один уровень вглубь, то при копировании массива происходит копирование ссылок на старые объекты в новый массив.

Если необходимо полностью скопировать сложную структуру данных, например, массив с объектами, то нужно делать глубокое (deep) или полное копирование данных. JavaScript не содержит функций для глубокого копирования, лучший вариант сделать глубокую копию — сериализовать структуру в JSON и тут же распарсить.

## Синтаксис

```js
Object.assign({}, objectDonor);
```

### `{}`

Объект - куда копируем. Первый аргумент — объект-акцептор: скопированные ключи и их значения будут записаны в него.

### `objectDonor`

Объект - Что копируем. Второй и последующие аргументы — это объекты-доноры: из них будут скопированы все свойства.

## Возвращает

### `object`

Созданный объект.

## Пример

### Поверхностное копирование

```js
const person = {
  name: 'Oleg',
  age: 100,
  isProgrammer: true,
  cars: ['Lada', 'Porshe'],
};

const profit = {
  cost: '$ 100 000',
};

const copy = Object.assign({}, profit);
```

### Поверхностное объединение

```js
const newObject = Object.assign(person, profit);
```

### Поверхностное копирование (spread-оператор)

```js
const copy = { ...person };
```

### Поверхностное объединение (spread-оператор)

```js
const newObject = { ...person, ...profit };
```

### Глубокое копирование (JSON)

У этого метода есть ограничение — копируемые поля объекта должны быть сериализуемы.

Вот примеры несериализуемых полей: `undefined`, `function`, `symbol`. При вызове `JSON.stringify` для этих полей мы получим `undefined`.

Массивы и объекты - сериализуемы. Но что будет если у них в качестве ключа или значения несериализуемые данные?

- для массивов: такие значения будут превращены в `null`;
- для объектов: такие значения будут опущены, а если `symbol` является ключом объекта, то он будет проигнорирован, даже при использовании функции `replacer`.

```js
const deepCopy = JSON.parse(JSON.stringify(profit));
```