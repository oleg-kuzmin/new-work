# `<html>` (Содержимое страницы)

_(hyperText markup language: язык гипертекстовой разметки)_

Элемент `<html>` открывает контейнер, в котором находится всё содержимое страницы. Это корневой, или родительский, элемент всего документа.

Тег `<html>` ставят сразу после `<!DOCTYPE>`.

Тегу `<html>` необходимо добавлять глобальный атрибут `lang`.

Тегу `<html>` можно добавить атрибут `class`.

В HTML есть атрибут `lang`, который подсказывает браузеру язык, на котором написан текст на странице. Если добавить `lang` в `<html>`, браузер правильно отобразит текст и подберёт подходящую для этого языка пунктуацию. Например, в английском тексте будут такие кавычки “ ”, а в русском такие «». Пишется так: `lang="en"`.

Кроме того, атрибут `lang` позволяет браузеру понять, отличается ли язык страницы от языка вашей системы. Если да, то браузер предложит пользователю использовать онлайн-переводчик.

## Пример

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <title>Название документа</title>
  </head>
  <body>
    Содержимое страницы.
  </body>
</html>
```

## Атрибуты

[`prefix (OPEN-GRAPH РАЗМЕТКА)`](<../ATTRIBUTES/prefix.md>)