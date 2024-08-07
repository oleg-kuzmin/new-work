# [`<aside>`](../index.md)

_(aside: в стороне)_

Тег `<aside>` размечает блок с дополнительным содержимым. Он может не иметь отношения к главному (`<main>`) контенту сайта. Часто используется для боковой колонки на сайте.

Тег `<aside>` относится к семантическим тегам, т. е. служит исключительно для разметки контента, никак не влияя на оформление или визуальное поведение содержимого.

В этот тег оборачивается контент, не обязательный для понимания основной информации на сайте: виджеты с оценкой, поиск по сайту, список тем и рубрик.

У `<aside>` нет никаких специфических атрибутов, он поддерживает все глобальные атрибуты.

Нет никаких ограничений на положение тега `<aside>`, но самое место ему на одном структурном уровне с `<main>` и `<article>`.

Визуально блок, обёрнутый в `<aside>`, необязательно должен располагаться сбоку. Он может быть в любом месте макета.

Не имеет прямого отношения к самому содержимому статьи, но отлично дополняет пользовательский опыт: поможет выбрать новый документ или что-то найти (навигация и поиск).

## Пример

```html
<aside>
  <h2>Последние комментарии</h2>
  <ul>
    <li>Комментарий 1</li>
    <li>Комментарий 2</li>
  </ul>
</aside>
```
