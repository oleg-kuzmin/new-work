# [`element.content`](../index.md)

Мы можем получить доступ к `<template>` из JavaScript, клонировать его и переиспользовать в новом компоненте.

## Синтаксис

```js
element.content;
```

## Возвращает

### `element`

Элемент - с html-содержимым `<template>`.

## Пример

```html
<template id="user">
  <div class="user">
    <img class="user__avatar" alt="avatar" />
    <p class="user__name"></p>
  </div>
</template>
```

```js
const userTemplate = document.querySelector('#user').content;
```
