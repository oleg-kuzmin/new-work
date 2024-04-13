# атрибут `media` (Медиа-запрос)

Укажите этот атрибут, чтобы один и тот же элемент на странице отображался по-разному на разных устройствах: например, телефоне или проекторе. К примеру, хочется, чтобы основной текст выглядел крупнее на проекторе, чем при просмотре на экране компьютера. Для этого добавь атрибут `media="projection"` и пропиши размер шрифта, например, `font-size: 120%`.

### `media="screen"` (по умолчанию)

Стандартный экран компьютера.

```html
<head>
  <style media="screen"></style>
</head>
```

### `media="all"`

Все устройства.

```html
<head>
  <style media="all and (max-width: 500px)"></style>
</head>
```

### `media="braille"`

Устройства, основанные на системе Брайля для слепых людей.

```html
<head>
  <style media="braille"></style>
</head>
```

### `media="handheld"`

Смартфоны и другие устройства с узким экраном.

```html
<head>
  <style media="handheld"></style>
</head>
```

### `media="print"`

Принтер.

```html
<head>
  <style media="print"></style>
</head>
```

### `media="speech"`

Речевые синтезаторы, а также программы для воспроизведения текста вслух и речевые браузеры.

```html
<head>
  <style media="speech"></style>
</head>
```

### `media="projection"`

Проектор.

```html
<head>
  <style media="projection"></style>
</head>
```

### `media="tty"`

Телетайпы, терминалы, портативные устройства с ограниченными возможностями экрана.

```html
<head>
  <style media="tty"></style>
</head>
```

### `media="tv"`

Телевизор.

```html
<head>
  <style media="tv"></style>
</head>
```
