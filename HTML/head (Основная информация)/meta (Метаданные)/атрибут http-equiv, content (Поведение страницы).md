# атрибут `http-equiv`, `content` (Поведение страницы)

Атрибут, который может изменять поведение страницы или серверов. Используется в паре с content.

## Значения

### `http-equiv="X-UA-Compatible"`

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

Используется для совместимости с IE.

### `http-equiv="default-style"`

```html
<meta http-equiv="default-style" content="default style" />
<link href="default.css" rel="stylesheet" type="text/css" title="default style" />
```

Предпочтительный стиль таблиц, который используется на странице. В этом случае в атрибуте content прописывается title из элемента `<link>`, который связан с таблицей CSS-стилей, или title элемента `<style>`, который содержит таблицу CSS-стилей.

### `http-equiv="refresh"`

```html
<meta http-equiv="refresh" content="3" />
```

Время автоматического обновления страницы. Страница будет автоматически перезагружаться с интервалом, который указан в секундах.

### `http-equiv="refresh"`

```html
<meta http-equiv="refresh" content="15;url=https://www.yandex.ru" />
```

Отправка пользователя на другую страницу. С помощью атрибута `http-equiv="refresh"` можно сделать так, чтобы страница отправляла пользователя на другую страницу через определённое количество секунд. Например, отправим пользователя на главную Яндекса через 15 секунд.
