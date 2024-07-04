# [`::first-letter`](../index.md)

Псевдоэлемент `::first-letter` позволяет задать стили для первой буквы первой строки блочного элемента, если перед текстом нет другого содержимого.

Знаки препинания, которые предшествуют первой букве или непосредственно следуют за ней, попадают под `::first-letter`.

Если вы создаёте содержимое с помощью `::before` и `content`, стили указанные в `::first-letter` всё равно будут распространяться на первую букву.

Для псевдоэлемента сработает лишь небольшой набор CSS-свойств:

- `font` и шрифтовые свойства, начинающиеся на `font`
- `background` и свойства фона, начинающиеся на `background`
- `margin` и внешние отступы, начинающиеся на `margin`
- `padding` и внутренние отступы, начинающиеся на `padding`
- `border` и свойства рамок, начинающиеся на `border`
- цвет текста `color`
- текстовые свойства `text-decoration`, `text-shadow`, `text-transform`, `letter-spacing`, `word-spacing`, `line-height`, `text-decoration-color`, `text-decoration-line`, `text-decoration-style`, `box-shadow`, `float`, `vertical-align`

## Пример

```html
<blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cumque."</blockquote>
```

```css
blockquote::first-letter {
  font-size: 1.86rem;
  font-weight: 700;
  font-style: italic;
  letter-spacing: 0.12rem;
}
```
