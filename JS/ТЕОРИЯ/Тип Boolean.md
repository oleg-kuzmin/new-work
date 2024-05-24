# Тип `Boolean`

Булевый тип `boolean` может принимать только два значения: `true` (истина) и `false` (ложь).

Значения этого типа используются в условных выражениях.

Обычно логическим переменным дают названия, начинающиеся с английских глаголов `is`, `should`, `does`, `can` и подобных.

## Создание

_Первый способ - явно указать значение, используя ключевые слова `true` и `false`_

```js
const truthyValue = true; // true
const falsyValue = false; // false
```

_Второй способ - использовать метод `Boolean()`_

```js
const truthyValue = Boolean(1); // true
const falsyValue = Boolean(''); // false
```

_Третий способ — использовать выражения, значениями которых будут `true` или `false`_

```js
const truthyValue = 4 < 5; // true
const falsyValue = 2 * 2 === 5; // false
```
