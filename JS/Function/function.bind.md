# [`function.bind()`](../index.md)

Привяжи конкретный контекст для функции.

Метод `.bind()` не вызывает функцию. Он указывает значение `this`, с которым эта функция будет вызываться.

## Синтаксис

```js
functionMethod.bind(context);
```

### `context`

Ссылка на контекст - объект который попадет в this.

## Пример

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
manager.getBonus = developer.getBonus.bind(manager);
manager.getBonus(150); // Anna has a salary this month 1950
```
