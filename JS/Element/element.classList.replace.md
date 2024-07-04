# [`element.classList.replace()`](../index.md)

Метод позволяет заменить одно значение класса другим.

## Синтаксис

```js
element.classList.remove(nameClass1, nameClass2);
```

### `nameClass1`

Строка - имя класса, который нужно заменить.

### `nameClass2`

Строка - имя класса, на что нужно заменить.

## Возвращает

### `boolean`

- `true` - если класс был заменён
- `false` - если ничего не изменилось

## Пример

```js
// На кнопке есть класс hidden
const button = document.querySelector('button.hidden');

// Заменяем класс hidden на visible
const result = button.classList.replace('hidden', 'visible');
console.log(result); // true, класс успешно заменился на visible
```
