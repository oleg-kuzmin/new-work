# `media` (Медиа-запрос)

Укажите этот атрибут, чтобы один и тот же элемент на странице отображался по-разному на разных устройствах: например, телефоне или проекторе. К примеру, хочется, чтобы основной текст выглядел крупнее на проекторе, чем при просмотре на экране компьютера. Для этого добавь атрибут `media="projection"` и пропиши размер шрифта, например, `font-size: 120%`.

### `media="screen"` (по умолчанию)

```html
<head>
  <style media="screen"></style>
</head>
```

Стандартный экран компьютера — это значение по умолчанию.

### `media="all"`

```html
<head>
  <style media="all and (max-width: 500px)"></style>
</head>
```

Все устройства.

### `media="braille"`

```html
<head>
  <style media="braille"></style>
</head>
```

Устройства, основанные на системе Брайля, которая создана для слепых людей.

### `media="handheld"`

```html
<head>
  <style media="handheld"></style>
</head>
```

Смартфоны и другие устройства с узким экраном.

### `media="print"`

```html
<head>
  <style media="print"></style>
</head>
```

Принтер.

### `media="speech"`

```html
<head>
  <style media="speech"></style>
</head>
```

Речевые синтезаторы, а также программы для воспроизведения текста вслух и речевые браузеры.

### `media="projection"`

```html
<head>
  <style media="projection"></style>
</head>
```

Проектор.

### `media="tty"`

```html
<head>
  <style media="tty"></style>
</head>
```

Телетайпы, терминалы, портативные устройства с ограниченными возможностями экрана.

### `media="tv"`

```html
<head>
  <style media="tv"></style>
</head>
```

Телевизор.
