# [`autoplay`](../index.md)

Медиа начнёт проигрываться автоматически после загрузки страницы, не дожидаясь, когда файл скачается полностью. Но лучше так не делать, потому что никто не любит, когда что-то начинает играть без предупреждения, а браузеры типа Chrome вообще выключают такое.

## Применяется к тегам

- [`<audio>`](../Tags/audio.md) аудио
- [`<video>`](../Tags/video.md) видео

## Пример

### `<audio>`

```html
<audio autoplay src="hi.mp3">Ваш браузер не поддерживает встроенное аудио.</audio>
```

### `<video>`

```html
<video autoplay src="frontend.mp4" poster="frontend.jpg" width="580">
  Простите, но ваш браузер не поддерживает встроенные видео.
</video>
```
