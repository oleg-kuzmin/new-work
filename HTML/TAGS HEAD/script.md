# `<script>`

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

- [`async`](../ATTRIBUTES/async.md) запуск асинхронно
- [`defer`](../ATTRIBUTES/defer.md) запуск после загрузки страницы
- [`src`](../ATTRIBUTES/src.md) url источника
- [`type`](<../ATTRIBUTES/type (SCRIPT).md>) тип модулей
