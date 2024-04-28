# `type` (Тип mime)

Определяет, к какому типу относится документ. Речь идёт о типах по стандарту MIME. Это чисто техническая информация, но её можно указать, чтобы применить общий стиль.

## Применяется к тегам

- [`<a> (ССЫЛКА)`](<../TAGS INLINE/a (ССЫЛКА).md>)
- [`<audio> (АУДИО)`](<../TAGS MEDIA/audio (АУДИО).md>)
- [`<video> (ВИДЕО)`](<../TAGS MEDIA/video (ВИДЕО).md>)
- [`<object> (ВСТРАИВАНИЕ МЕДИА)`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>)
- [`<source> (ИСТОЧНИК МЕДИА)`](<../TAGS MEDIA/source (ИСТОЧНИК МЕДИА).md>)

## Пример

### `<a>`

```html
<a type="video/mp4">Яндекс</a>
```

### `<audio>`

```html
<!-- mp3 -->
<audio type="audio/mpeg" />
```

### `<video>`

```html
<video type="video/mp4" />
```

### `<source>`

Если у нас есть несколько одинаковых файлов разного формата, то атрибут `type` помогает выбрать первый поддерживаемый браузером.

```html
<video controls width="250" height="200" muted>
  <source src="birthday.webm" type="video/webm" />
  <source src="birthday.mp4" type="video/mp4" />
</video>
```

### `<object>`

```html
<object class="pdf_example" type="application/pdf" data="example.pdf" width="600" height="700">
  <a href="example.pdf">Лунная соната № 14 PDF</a>
</object>
```
