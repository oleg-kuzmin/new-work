# `type`

Определяет, к какому типу относится документ. Речь идёт о типах по стандарту MIME. Это чисто техническая информация, но её можно указать, чтобы применить общий стиль.

## Применяется к тегам

- [`<a>`](<../TAGS INLINE/a.md>) ссылка
- [`<audio>`](<../TAGS MEDIA/audio.md>) аудио
- [`<video>`](<../TAGS MEDIA/video.md>) видео
- [`<object>`](<../TAGS MEDIA/object.md>) встраивание медиа
- [`<source>`](<../TAGS MEDIA/source.md>) источник медиа

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