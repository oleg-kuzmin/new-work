# `name` (Имя)

Имя для связи с JS.

## Применяется к тегам

- [`<object> (ВСТРАИВАНИЕ МЕДИА)`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>)
- [`<iframe> (ВСТРАИВАНИЕ ФРЕЙМА)`](<../TAGS MEDIA/iframe (ВСТРАИВАНИЕ ФРЕЙМА).md>)

## Пример

### `<object>`

```html
<object name="pdf-example" type="application/pdf" data="example.pdf" width="600" height="700">
  <a href="example.pdf">Лунная соната № 14 PDF</a>
</object>
```

### `<iframe>`

```html
<iframe
  name="myFrame"
  id="inlineFrameExample"
  title="Inline Frame Map"
  width="560"
  height="400"
  allowfullscreen
  src="https://yandex.ru/map-widget/v1/-/CBFkaYSE0A"
></iframe>
```
