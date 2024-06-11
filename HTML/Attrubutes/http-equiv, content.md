# `http-equiv`, `content`

Атрибут, который может изменять поведение страницы или серверов. Используется в паре с content.

## Применяется к тегам

- [`<meta>`](../../TAGS/HEAD/meta.md) метаданные

## Пример

```html
<head>
  <!-- <meta> -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
</head>
```

## Значения

### `http-equiv="X-UA-Compatible"` `content="IE=edge"`

Используется для совместимости с IE.

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

### `http-equiv="default-style"` `content="default style"`

Предпочтительный стиль таблиц, который используется на странице. В этом случае в атрибуте content прописывается title из элемента `<link>`, который связан с таблицей CSS-стилей, или title элемента `<style>`, который содержит таблицу CSS-стилей.

```html
<meta http-equiv="default-style" content="default style" />
<link href="default.css" rel="stylesheet" type="text/css" title="default style" />
```

### `http-equiv="refresh"` `content="3"`

Время автоматического обновления страницы. Страница будет автоматически перезагружаться с интервалом, который указан в секундах.

```html
<meta http-equiv="refresh" content="3" />
```

### `http-equiv="refresh"` `content="15;url=https://www.yandex.ru"`

Отправка пользователя на другую страницу. С помощью атрибута `http-equiv="refresh"` можно сделать так, чтобы страница отправляла пользователя на другую страницу через определённое количество секунд. Например, отправим пользователя на главную Яндекса через 15 секунд.

```html
<meta http-equiv="refresh" content="15;url=https://www.yandex.ru" />
```
