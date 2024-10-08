# [`src`](../index.md)

В качестве значения указывается адрес медиа. Абсолютная или относительная ссылка до файла в любом допустимом формате.

## Применяется к тегам

- [`<audio>`](../Tags/audio.md) аудио
- [`<iframe>`](../Tags/iframe.md) встраивание фрейма
- [`<img>`](../Tags/img.md) изображение
- [`<script>`](../Tags/script.md) добавляет скрипт
- [`<source>`](../Tags/source.md) источник медиа
- [`<video>`](../Tags/video.md) видео

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

### `<video>`

```html
<video controls src="frontend.mp4" poster="frontend.jpg" width="580">
  Простите, но ваш браузер не поддерживает встроенные видео. Попробуйте скачать видео
  <a href="frontend.mp4">по этой ссылке</a>и открыть его на своём устройстве.
</video>
```

### `<source>`

Требуется только для использования внутри тегов `<audio>` и `<video>`. Если тег `<source>` находится внутри `<picture>`, то атрибут `src` игнорируется.

```html
<audio controls>
  <source src="song.opus" type="audio/ogg; codecs=opus" />
  <source src="song.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="song.mp3" type="audio/mpeg" />
</audio>

<video controls>
  <source src="flower.webm" type="video/webm" />
  <source src="flower.mp4" type="video/mp4" />
</video>
```

### `<iframe>`

```html
<iframe
  src="https://yandex.ru/map-widget/v1/-/CBFkaYSE0A"
  id="inlineFrameExample"
  title="Inline Frame Map"
  width="560"
  height="400"
  allowfullscreen
></iframe>
```

### `<script>`

Атрибут указывает путь к файлу со скриптами. Файл должен иметь расширение .js. Когда указываешь src, не пиши ничего внутри `<script>...</script>`.

```html
<script src="script.js"></script>
```
