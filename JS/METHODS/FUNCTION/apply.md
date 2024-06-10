# `apply()`

Метод вызывает функцию с конкретным контекстом и конкретным параметром.

Метод функций, который передает определенный контекст (this) при вызове.

## Синтаксис

```js
functionMethod.apply(context, []);
```

### `context`

Ссылка на контекст - объект который попадет в this.

### `[arg]`

Массив аргументов передается вторым параметром.

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
