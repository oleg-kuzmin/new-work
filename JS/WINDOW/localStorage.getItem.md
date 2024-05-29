# `localStorage.getItem()`

За чтение отвечает `localStorage.getItem()` c одним параметром, который указывает на ключ для чтения и возвращает полученное значение из хранилища. Если по этому ключу нет значения, то метод вернёт `null`.

## Синтаксис

```js
localStorage.getItem(key);
```

### `key`

Строка - ключ.

## Возвращает

### `string` || `null`

Строка с значением.

## Пример

```js
window.localStorage.getItem('name');
```
