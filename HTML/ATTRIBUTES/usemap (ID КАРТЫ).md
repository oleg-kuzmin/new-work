# `usemap` (Id для тега map)

Способ связи картинки с тегом `<map>`.

## Применяется к тегам:

- [`<img>`](<../TAGS MEDIA/img (ИЗОБРАЖЕНИЕ).md>)

## Пример

```html
<map name="map-name">
  <area shape="rect" coords="40,20,420,130" href="/html/" alt="Раздел HTML" />
</map>

<!-- <img> -->
<img src="doka-map.svg" usemap="#map-name" alt="Мордочка собаки" />
```
