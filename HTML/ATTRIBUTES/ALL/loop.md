# `loop`

Зацикливает воспроизведение медиа, так что оно снова начинает играть каждый раз после завершения.

## Применяется к тегам

- [`<audio>`](<../TAGS MEDIA/audio.md>) аудио
- [`<video>`](<../TAGS MEDIA/video.md>) видео

## Пример

### `<audio>`

```html
<audio loop src="hi.mp3">Ваш браузер не поддерживает встроенное аудио.</audio>
```

### `<video>`

```html
<video loop src="frontend.mp4" poster="frontend.jpg" width="580">
  Простите, но ваш браузер не поддерживает встроенные видео.
</video>
```