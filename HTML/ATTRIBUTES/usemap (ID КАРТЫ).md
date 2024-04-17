# `usemap` (Id для тега map)

Способ связи с тегом `<map>`.

## Применяется к тегам:

- [`<img>`](<../TAGS MEDIA/img (ИЗОБРАЖЕНИЕ).md>)
- [`<object>`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>)

## Пример

### `<img>`

```html
<map name="map-name">
  <area shape="rect" coords="40,20,420,130" href="/html/" alt="Раздел HTML" />
</map>

<img src="doka-map.svg" usemap="#map-name" alt="Мордочка собаки" />
```

### `<object>`

```html
<object usemap="#map-name" type="application/pdf" data="example.pdf" width="600" height="700">
  <a href="example.pdf">Лунная соната № 14 PDF</a>
</object>
```
