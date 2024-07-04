# [`element.disabled`](../index.md)

Блокировать и разблокировать кнопку в JavaScript можно, присваивая булевы значения свойству `disabled` этой кнопки.

## Синтаксис

```js
button.disabled;
```

## Возвращает

### `boolean`

- `true` - кнопка заблокирована
- `false` - кнопка разблокирована

## Пример

```js
const button = document.querySelector('button');
button.disabled = true; // Блокирует кнопку
button.disabled = false; // Разблокирует кнопку
```
