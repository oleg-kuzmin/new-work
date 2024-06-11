# `element.closest()`

Метод, который возвращает ближайший родительский элемент или его самого.

## Синтаксис

```js
element.closest(selector);
```

### `selector`

Строка - CSS-селектор.

## Возвращает

### `element`

DOM-элемент.

## Пример

```html
<article class="container">
  <span class="element-one">Первый элемент</span>
  <span class="element-two">Второй элемент</span>
  <span class="element-three">Третий элемент</span>
</article>
```

```js
const element = document.querySelector('.element-one');
const neighbourElement = element.closest(':not(span)');
console.log(neighbourElement); // Вернёт тег <article>
```
