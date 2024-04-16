# `src` (Url-адрес источника)

В качестве значения указывается адрес медиа. Абсолютная или относительная ссылка до файла в любом допустимом формате.

## Применяется к тегам:

- [`<img>`](<../TAGS MEDIA/img (ИЗОБРАЖЕНИЕ).md>)
- [`<audio>`](<../TAGS MEDIA/audio (АУДИО).md>)

## Пример

### `<img>`

```html
<img src="logo.png" />
```

### `<audio>`

```html
<figure>
  <figcaption>Привет, я Алиса</figcaption>
  <audio controls src="hi-alice.mp3">
    Ваш браузер не поддерживает встроенное аудио. Попробуйте скачать его
    <a href="hi-alice.mp3" download> по ссылке </a>
  </audio>
</figure>
```
