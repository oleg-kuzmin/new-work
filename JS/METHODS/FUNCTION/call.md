# `call()`

Метод вызывает функцию с конкретным контекстом и конкретным параметром.

Метод функций, который передает определенный контекст (this) при вызове.

## Синтаксис

```js
functionMethod.call(context, arg);
```

### `context`

Ссылка на контекст - объект который попадет в this.

### `arg`

Аргументы передаются вторым параметром. Их может быть несколько через запятую.

```js
const developer = {
  name: 'Oleg',
  salary: 2500,
  getBonus(sum) {
    console.log(this.name, 'has a salary this month', this.salary + sum);
  },
};

const manager = {
  name: 'Anna',
  salary: 1800,
};

developer.getBonus(500); // Oleg has a salary this month 3000
developer.getBonus.call(manager, 150); // Anna has a salary this month 1950
developer.getBonus.apply(manager, [150]); // Anna has a salary this month 1950
```
