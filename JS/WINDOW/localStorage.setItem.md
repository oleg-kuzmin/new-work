# `localStorage.setItem()`

Сохраняет данные в формате ключ-значение в объект `window.localStorage`. Повторная запись по тому же ключу приведёт к перезаписи данных.

## Синтаксис

```js
localStorage.setItem(key, value);
```

### `key (Строка)`

Ключ.

### `value (Строка)`

Значение

## Возвращает

### `undefined`

## Пример

```js
window.localStorage.setItem('name', 'Дока Дог');
```
