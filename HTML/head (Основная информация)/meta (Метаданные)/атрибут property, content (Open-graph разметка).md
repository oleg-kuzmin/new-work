# атрибут `property`, `content` (Open-graph разметка)

Есть отдельная категория метаразметки — OG-разметка. OG расшифровывается как open graph. Такая разметка нужна для того, чтобы при вставке ссылки на ваш сайт в соцсетях в превью отображалась красивая карточка.

## Значения

### Стандартный набор метатегов для красивой карточки в Facebook

```html
<head>
  <meta property="og:title" content="Лучший сайт в интернете" />
  <meta
    property="og:description"
    content="Посетите лучший сайт в интернете и познайте тщетность бытия"
  />
  <meta property="og:image" content="http://best-site/thumbnail.jpg" />
  <meta property="og:url" content="http://best-site/index.htm" />
</head>
```

### `property="og:title"` (обязательное свойство)

Уникальный заголовок страницы, оптимальный размер ~65 символов.

```html
<meta property="og:title" content="Заголовок страницы - Мой сайт" />
```

### `property="og:type"` (обязательное свойство)

Нужен для определения типа контента, в большинстве случаев можно использовать website. Возможные значения:

- `content="website"`
- `content="article"`
- `content="audio"`
- `content="image"`
- `content="video"`

```html
<meta property="og:type" content="website" />
```

### `property="og:url"` (обязательное свойство)

Адрес текущей страницы сайта.

```html
<meta property="og:url" content="https://example.com/page" />
```

### `property="og:image"` (обязательное свойство)

Основное изображение вашей карточки. Размер рекомендуется использовать не менее `600*315`.

```html
<meta property="og:image" content="https://example.com/image.jpg" />
```

### `property="og:description"` (дополнительное свойство)

Описание страницы. Оптимальный размер ~165 символов.

```html
<meta property="og:description" content="Описание страницы" />
```

### `property="og:image:alt"` (дополнительное свойство)

Используется для описания изображения карточки.

```html
<meta property="og:image:alt" content="Описание изображения" />
```

### `property="og:locale"` (дополнительное свойство)

Указывает на используемый язык текущей страницы.

```html
<meta property="og:locale" content="ru_RU" />
```
