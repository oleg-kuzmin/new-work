# [`document.getElementById()`](../index.md)

Метод объекта `document`, который позволяет найти элемент на веб-странице по его идентификатору (атрибут `id`).

Имена поиска указываются без символов `#` и `.` в начале.

В отличие от других похожих методов: `getElementsByClassName()` и `getElementsByTagName()`, метод `getElementById()` есть только у `document`.

## Синтаксис

```js
document.getElementById(id);
```

### `id`

Строка - элемент с id.

## Возвращает

### `element` || `null`

DOM-элемент, который соответствует критериям поиска или `null` - если совпадений нет.
