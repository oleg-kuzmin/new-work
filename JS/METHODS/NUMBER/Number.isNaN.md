# `Number.isNaN()`

Статический метод `Number.isNaN()` проверяет переданное аргументом значение и возвращает `true`, если это значение `NaN`.

В JavaScript есть так же глобальная функция `isNaN()`, которая работает аналогичным образом, но преобразует переданный аргумент в число.

## Синтаксис

```js
Number.isNaN(argument);
```

### `argument`

Аргумент - проверяемый аргумент.

## Возвращает

### `boolean`

- `true` - если аргумент NaN
- `false` - если нет

## Пример

```js
Number.isNaN(NaN);       // true
Number.isNaN();          // false
Number.isNaN(42);        // false
Number.isNaN('42');      // false
Number.isNaN(null);      // false
Number.isNaN(undefined); // false
Number.isNaN(false);     // false
```
