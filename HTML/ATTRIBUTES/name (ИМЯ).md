# `name` (Имя)

Для тегов `<object>`, `<iframe>` используется для связи с JS.

Для тега `<map>` используется для связи с usemap картинки.

## Применяется к тегам

- [`<object> (ВСТРАИВАНИЕ МЕДИА)`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>)
- [`<iframe> (ВСТРАИВАНИЕ ФРЕЙМА)`](<../TAGS MEDIA/iframe (ВСТРАИВАНИЕ ФРЕЙМА).md>)
- [`<map> (КАРТА)`](<../TAGS MEDIA/map (КАРТА).md>)

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

### `<map>`

У тега `<map>` должен быть атрибут `name` с уникальным именем, на которое мы будем ссылаться в атрибуте `usemap` картинки. А внутри тега может быть сколько угодно `<area>` — они размечают на картинке области-ссылки.

```html
<map name="doka-label">
  <area shape="rect" coords="40,20,420,130" href="/html/" alt="Раздел HTML" />
</map>

<img src="/images/doka-map.svg" usemap="#doka-label" alt="Мордочка собаки" />
```
