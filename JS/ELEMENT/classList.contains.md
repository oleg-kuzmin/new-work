# `.classList.contains()`

Метод позволяет проверить наличие класса у элемента.

# Синтаксис

```js
element.classList.contains(className);
```

### `className`

Строка - имя класса, наличие которого нужно проверить.

## Возвращает

### `boolean`

- `true` - если класс есть
- `false` - если нет

## Пример

```js
// На кнопке есть класс hidden, найдем эту кнопку.
const button = document.querySelector('button.hidden');

// Проверим, есть ли класс visible на кнопке
const isVisible = button.classList.contains('visible');
console.log(isVisible); // false, класс 'visible' у кнопки отсутствует

// Проверим, есть ли класс hidden на кнопке
const isHidden = button.classList.contains('hidden');
console.log(isHidden); // true, класс 'hidden' у кнопки присутствует
```
