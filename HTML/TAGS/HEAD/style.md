# `<style>`

Внутри тега `<style>` можно задать параметры для CSS-стилей, которые применяются на странице. В общем, тут ты описываешь, как будут выглядеть заголовки, ссылки, обычный текст и другие элементы страницы.

Тег `<style>` помещается в элемент `<head>`, где находится информация, которую не видит пользователь.

Лайфхак: чтобы быстрее загружался сайт, особенно на телефоне или при медленном интернете, нужно тот код, который отвечает за отображение верхней части сайта, вставлять в `<head>` в формате `<style>Наш CSS-код</style>`. То есть туда можно встроить шапку сайта, верхние баннеры, заголовки — то, что отображается сразу при открытии. А всё, что ниже можно потом подгрузить через JavaScript после загрузки всей страницы. Так мы сразу показываем пользователю контент, он начинает его читать, а тем временем догружается нижняя часть сайта. Больше информации о таком подходе можно найти по запросу «критический CSS».

## Пример

```html
<html>
  <head>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>This is my paragraph.</p>
  </body>
</html>
```

## Атрибуты

- [`media`](../ATTRIBUTES/media.md) медиа-запрос