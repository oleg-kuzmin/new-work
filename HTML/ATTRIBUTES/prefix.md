# `prefix` (open-graph разметка)

Здесь прописывают open-graph разметку. Чтобы при репосте с сайта в VK, Facebook и другие соцсети передавались те заголовки, картинки и описания, которые мы укажем.

## Применяется к тегам

- [`<html> (СОДЕРЖИМОЕ СТРАНИЦЫ)`](<../TAGS BLOCK/html.md>)

## Пример

```html
<!DOCTYPE html>
<html lang="ru" prefix="og: [http://ogp.me/ns#](http://ogp.me/ns#)">
  <head>
    <title>Название документа</title>
  </head>
  <body>
    Содержимое страницы.
  </body>
</html>
```
