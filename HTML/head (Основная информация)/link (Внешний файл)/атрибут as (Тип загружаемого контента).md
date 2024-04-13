# атрибут as (Тип загружаемого контента)

Позволяет указать тип загружаемого контента. Благодаря ему мы помогаем браузеру правильно расставлять приоритеты и планировать загрузку.

as стоит применять, если указан атрибут `rel="preload"` или `rel="prefetch"`.

Атрибут as используется только для запросов предварительной загрузки.

### `as="style"`

Для таблиц стилей.

```html
<head>
  <link as="style" rel="preload" href="style.css" />
</head>
```

### `as="script"`

Для скриптов.

```html
<head>
  <link as="script" rel="preload" href="script.js" />
</head>
```

### `as="font"`

Для шрифтов.

```html
<head>
  <link as="font" rel="preload" href="font.css" />
</head>
```

### `as="fetch"`

Для ресурсов, загруженных с помощью fetch() или XMLHttpRequest.

```html
<head>
  <link as="fetch" rel="preload" href="api.js" />
</head>
```
