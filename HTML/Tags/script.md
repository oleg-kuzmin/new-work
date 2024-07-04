# [`<script>`](../index.md)

Теги `<script>` можно располагать в любом месте в `<head>` или `<body>` HTML-документа. Но лучше всего добавлять их в самый конец перед закрывающим тегом `</body>`.

Обычно скрипты, которые должны выполняться первыми, помещают в заголовок страницы.

## Пример

```html
<!-- Внешний файл -->
<script src="external.js"></script>

<!-- Внутри страницы -->
<script>
  window.alert('Добавили какой-то JavaScript-код');
</script>
```

## Атрибуты

- [`async`](../Attrubutes/async.md) запуск асинхронно
- [`defer`](../Attrubutes/defer.md) запуск после загрузки страницы
- [`src`](../Attrubutes/src.md) url источника
- [`type`](<../Attrubutes/type (script).md>) тип для js-модулей
