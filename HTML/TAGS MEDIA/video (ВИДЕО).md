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

- [`autoplay`](<../ATTRIBUTES/autoplay (АВТОПРОИГРЫВАНИЕ МЕДИА).md>)
- [`buffered`](<../ATTRIBUTES/buffered (ИНФОРМАЦИЯ О ЗАГРУЗКЕ ВИДЕО).md>)
- [`controls`](<../ATTRIBUTES/controls (ЭЛЕМЕНТЫ УПРАВЛЕНИЯ МЕДИА).md>)
- [`loop`](<../ATTRIBUTES/loop (ЗАЦИКЛИВАНИЕ).md>)
- [`muted`](<../ATTRIBUTES/muted (ВЫКЛЮЧАЕТ ЗВУК МЕДИА).md>)
- [`playsinline`](<../ATTRIBUTES/playsinline (ПОЛНЫЙ ЭКРАН ВИДЕО).md>)
- [`poster`](<../ATTRIBUTES/poster (ОБЛОЖКА ВИДЕО).md>)
- [`preload`](<../ATTRIBUTES/preload (ПРЕДВАРИТЕЛЬНАЯ ЗАГРУЗКА МЕДИА).md>)
- [`src`](<../ATTRIBUTES/src (URL ИСТОЧНИКА).md>)
- [`type`](<../ATTRIBUTES/type (ТИП MIME).md>)
- [`width, height`](<../ATTRIBUTES/width, height (ШИРИНА, ВЫСОТА).md>)

## Глобальные атрибуты

- [`class (ЗАДАЕТ КЛАСС ЭЛЕМЕНТУ)`](<../ATTRIBUTES GLOBAL/class (ЗАДАЕТ КЛАСС ЭЛЕМЕНТУ).md>)
- [`contenteditable (ДЕЛАЕТ РЕДАКТИРУЕМЫМ)`](<../ATTRIBUTES GLOBAL/contenteditable (ДЕЛАЕТ РЕДАКТИРУЕМЫМ).md>)
- [`data (ПОЛЬЗОВАТЕЛЬСКИЙ АТРИБУТ)`](<../ATTRIBUTES GLOBAL/data (ПОЛЬЗОВАТЕЛЬСКИЙ АТРИБУТ).md>)
- [`hidden (СКРЫВАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES GLOBAL/hidden (СКРЫВАЕТ ЭЛЕМЕНТ).md>)
- [`id (ИДЕНТИФИКАТОР)`](<../ATTRIBUTES GLOBAL/id (ИДЕНТИФИКАТОР).md>)
- [`lang (ЯЗЫК)`](<../ATTRIBUTES GLOBAL/lang (ЯЗЫК).md>)
- [`spellcheck (ПРОВЕРКА ПРАВОПИСАНИЯ)`](<../ATTRIBUTES GLOBAL/spellcheck (ПРОВЕРКА ПРАВОПИСАНИЯ).md>)
- [`style (СТИЛИ)`](<../ATTRIBUTES GLOBAL/style (СТИЛИ).md>)
- [`tabindex (ПОРЯДОК ТАБУЛЯЦИИ)`](<../ATTRIBUTES GLOBAL/tabindex (ПОРЯДОК ТАБУЛЯЦИИ).md>)
- [`title (ПОДСКАЗКА ПРИ НАВЕДЕНИИ)`](<../ATTRIBUTES GLOBAL/title (ПОДСКАЗКА ПРИ НАВЕДЕНИИ).md>)
