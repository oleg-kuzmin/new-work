# атрибут `href` (Ссылка на url-адрес)

URL-ссылка на внешний файл или адрес. Ссылка может быть как полной или абсолютной: `http://localhost/sitename/css/style.css`, так и неполной или относительной: `/sitename/css/style.css`.

## Применяется к тегам:

- [`<link>`](<../TAGS HEAD/link (ВНЕШНИЙ ФАЙЛ).md>)
- [`<base>`](<../TAGS HEAD/base (ОСНОВНОЙ URL-АДРЕС).md>)

## Пример

```html
<head>
  <!-- link -->
  <link href="style.css" rel="stylesheet" />

  <!-- base -->
  <base href="https://ex.amp" target="_self" />
</head>
```
