# `<link>`

_(link: ссылка)_

Позволяет загружать на страницу содержимое из внешнего файла.

Два наиболее часто встречающихся случая:

1. Изображение, которое будет отображено в качестве фавиконки на вашем сайте;
2. Внешняя ссылка на шрифт, который применяется на сайте.

## Пример

### Самый простой пример, как подключить файл со стилями:

```html
<head>
  <link href="style.css" rel="stylesheet" />
</head>
```

### Разные версии сайта

Можно сделать разные версии сайта, чтобы пользователь мог выбрать удобную для него, например, версию для слабовидящих. Тогда для каждой версии можно подключить свой файл стилей.

```html
<head>
  <link href="default.css" rel="stylesheet" title="Default Style" />
  <link href="accessibility.css" rel="alternate stylesheet" title="Accessibility" />
</head>
```

### Разные фавиконки для разных экранов и устройств

```html
<head>
  <!-- iPad третьего поколения с Retina-дисплеем: -->
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon144.png" />

  <!-- iPhone с Retina-дисплеем: -->
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png" />

  <!-- iPad первого и второго поколений: -->
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png" />

  <!-- iPhone, iPod Touch и Android 2.1+ устройства без Retina дисплея: -->
  <link rel="apple-touch-icon-precomposed" href="favicon57.png" />

  <!-- стандартная фавиконка -->
  <link rel="icon" href="favicon32.png" />
</head>
```

### разные устройства

```html
<head>
  <link href="print.css" rel="stylesheet" media="print" />
  <link href="mobile.css" rel="stylesheet" media="all" />
  <link href="desktop.css" rel="stylesheet" media="screen and (min-width: 600px)" />
  <link href="highres.css" rel="stylesheet" media="screen and (min-resolution: 300dpi)" />
</head>
```

## Атрибуты

- [`as`](../ATTRIBUTES/as.md) тип загружаемого контента
- [`crossorigin`](../ATTRIBUTES/crossorigin.md) обработка cors
- [`href`](../ATTRIBUTES/href.md) ссылка на url
- [`media`](../ATTRIBUTES/media.md) медиа-запрос
- [`rel`](<../ATTRIBUTES/rel (LINK).md>) связь файла со страницей
- [`sizes`](../ATTRIBUTES/sizes.md) размер для фавиконки
