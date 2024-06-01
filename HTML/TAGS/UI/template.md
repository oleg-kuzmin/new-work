# `<template>`

_(template: шаблон)_

Тег `<template>` используется как контейнер для хранения HTML-кода для дальнейшего использования в JavaScript.

В `<template>` может храниться любая корректная HTML-разметка, в том числе стили и скрипты. Браузер будет проверять HTML-синтаксис, но содержимое тега `<template>` не будет отображаться на странице.

Если в шаблоне содержатся скрипты, они не выполнятся, а стили не применятся, пока содержимое шаблона не поместить на страницу.

Для того, чтобы использовать содержимое шаблона в документе нужен JavaScript.

К тегу `<template>` можно применить все глобальные атрибуты.

Тег `<template>` имеет свойство content, которое доступно только для чтения. По нему можно получить доступ к содержимому шаблона.

## Пример

```html
<template>
  <div class="card">
    <h2 class="card__title"></h2>
    <div class="card__content"></div>
  </div>
</template>
```

### Пример использования

```html
<div>
  <h2>Список покупок</h2>
  <ul class="list"></ul>
  <template id="template">
    <li></li>
  </template>
</div>
```

```js
// Находим список
const list = document.querySelector('.list');

// Находим шаблон
const template = document.querySelector('#template');

// Клонируем содержимое тега <template>
const item = template.content.cloneNode(true);

// Находим тег <li> и помещаем внутрь текст
item.querySelector('li').textContent = 'Молоко';

// Вставляем склонированный контент на страницу
list.append(item);
```
