# атрибут `media` (Медиа-запрос)

Укажите этот атрибут, чтобы один и тот же элемент на странице отображался по-разному на разных устройствах: например, телефоне или проекторе. К примеру, хочется, чтобы основной текст выглядел крупнее на проекторе, чем при просмотре на экране компьютера. Для этого добавь атрибут `media="projection"` и пропиши размер шрифта, например, `font-size: 120%`.

В зависимости от того, на каком устройстве открывают вашу страницу, можно применять разные стили к тексту или показывать разные иконки. Атрибут media указывает устройство, на котором работает тот или иной стиль.

### `media="screen"` (по умолчанию)

Стандартный экран компьютера.

```html
<head>
  <!-- style -->
  <style media="screen and (width > 1440px)"></style>

  <!-- link -->
  <link media="screen and (width > 1440px)" href="desktop.css" rel="stylesheet" />
</head>
```

### `media="all"`

Все устройства.

```html
<head>
  <!-- style -->
  <style media="all"></style>

  <!-- link -->
  <link media="all" href="desktop.css" rel="stylesheet" />
</head>
```

### `media="braille"`

Устройства, основанные на системе Брайля для слепых людей.

```html
<head>
  <!-- style -->
  <style media="braille"></style>

  <!-- link -->
  <link media="braille" href="desktop.css" rel="stylesheet" />
</head>
```

### `media="handheld"`

Смартфоны и другие устройства с узким экраном.

```html
<head>
  <!-- style -->
  <style media="handheld"></style>

  <!-- link -->
  <link media="handheld" href="desktop.css" rel="stylesheet" />
</head>
```

### `media="print"`

Принтер.

```html
<head>
  <!-- style -->
  <style media="print"></style>

  <!-- link -->
  <link media="print" href="desktop.css" rel="stylesheet" />
</head>
```

### `media="speech"`

Речевые синтезаторы, а также программы для воспроизведения текста вслух и речевые браузеры.

```html
<head>
  <!-- style -->
  <style media="speech"></style>

  <!-- link -->
  <link media="speech" href="desktop.css" rel="stylesheet" />
</head>
```

### `media="projection"`

Проектор.

```html
<head>
  <!-- style -->
  <style media="projection"></style>

  <!-- link -->
  <link media="projection" href="desktop.css" rel="stylesheet" />
</head>
```

### `media="tty"`

Телетайпы, терминалы, портативные устройства с ограниченными возможностями экрана.

```html
<head>
  <!-- style -->
  <style media="tty"></style>

  <!-- link -->
  <link media="tty" href="desktop.css" rel="stylesheet" />
</head>
```

### `media="tv"`

Телевизор.

```html
<head>
  <!-- style -->
  <style media="tv"></style>

  <!-- link -->
  <link media="tv" href="desktop.css" rel="stylesheet" />
</head>
```

### `media="(prefers-color-scheme: light)"`

Атрибут media может определять, какая тема используется в ОС. Благодаря этому можно произвести небольшие оптимизации. Например, если у нас есть два разделённых CSS-файла, каждый из которых содержит стили для одной из тем, то приоритет при загрузке будет отдаваться именно тому файлу, который относится к выбранной системной теме.

```html
<head>
  <!-- style -->
  <style media="(prefers-color-scheme: light)"></style>

  <!-- link -->
  <link media="(prefers-color-scheme: light)" href="desktop.css" rel="stylesheet" />
</head>
```
