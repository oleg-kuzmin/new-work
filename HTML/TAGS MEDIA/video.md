# `<video>` (Видео)

Встраивает видео на страницу

Тег `<video>` добавляет на страницу видеоплеер, который может воспроизвести одно или несколько видео.

Тег `<video>` всегда закрывается при помощи парного тега `</video>`.

Адрес видео задаётся внутри контейнера `<video>` через тег `<source src="URL">` или с помощью атрибута `src`.

Некоторые браузеры могут не поддерживать какой-то формат. Поэтому в `<video>` можно добавить один и тот же файл в нескольких форматах.

Если не указать атрибут controls, то браузер не будет показывать стандартные элементы управления видеоплеером. Создать свои элементы управления можно с помощью JavaScript.

Используйте CSS-свойство `object-position`, чтобы настроить расположение видео внутри элемента, а также `object-fit`, чтобы настроить размер видео относительно элемента.

Атрибут `preload` носит рекомендательный характер для браузера: будет ли видео предварительно загружено, зависит от настроек конкретного браузера.

Высоту `height` и ширину `width` видеоплеера лучше задавать через CSS. По умолчанию эти параметры будут такими, как у видео, которое вы встраиваете.

## Пример

```html
<video controls width="250">
  <source src="kino.mp4" type="video/mp4" />
  <source src="kino.webm" type="video/webm" />
  <source src="kino.ogg" type="video/ogg" />
  <source src="kino.mov" type="video/quicktime" />
  Ваш браузер не поддерживает встроенные видео
</video>
```

## Атрибуты

- [`autoplay (АВТОПРОИГРЫВАНИЕ МЕДИА)`](../ATTRIBUTES/autoplay.md)
- [`buffered (ИНФОРМАЦИЯ О ЗАГРУЗКЕ ВИДЕО)`](../ATTRIBUTES/buffered.md)
- [`controls (ЭЛЕМЕНТЫ УПРАВЛЕНИЯ МЕДИА)`](../ATTRIBUTES/controls.md)
- [`loop (ЗАЦИКЛИВАНИЕ)`](../ATTRIBUTES/loop.md)
- [`muted (ВЫКЛЮЧАЕТ ЗВУК МЕДИА)`](../ATTRIBUTES/muted.md)
- [`playsinline (ПОЛНЫЙ ЭКРАН ВИДЕО)`](../ATTRIBUTES/playsinline.md)
- [`poster (ОБЛОЖКА ВИДЕО)`](../ATTRIBUTES/poster.md)
- [`preload (ПРЕДВАРИТЕЛЬНАЯ ЗАГРУЗКА МЕДИА)`](../ATTRIBUTES/preload.md)
- [`src (URL ИСТОЧНИКА)`](../ATTRIBUTES/src.md)
- [`type (ТИП MIME)`](<../ATTRIBUTES/type (MIME).md>)
- [`width, height (ШИРИНА, ВЫСОТА)`](<../ATTRIBUTES/width, height.md>)