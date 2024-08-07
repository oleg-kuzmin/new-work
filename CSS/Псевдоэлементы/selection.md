# [`::selection`](../index.md)

Псевдоэлемент `::selection` позволяет применить стили к пользовательскому выделению (например, к выделенному с помощью мыши тексту) и изменить его вид. Это полезно, если вы хотите оформить выделение текста в соответствии с вашим дизайном.

Этот псевдоэлемент не поддерживается в Safari на iOS.

Можно оформлять отдельные элементы на странице, задав им псевдоэлемент, или можно оформить всю страницу целиком — оставив `::selection` без селектора слева, как показано в примере выше.

Список свойств, которые можно изменять с помощью `::selection`, ограничен:

- `color`
- `background-color`
- `text-decoration` и отдельные свойства оформления текста
- `text-emphasis-color`
- `text-shadow`
- `stroke-color`, `fill-color` и `stroke-width` для SVG

## Пример

```scss
::selection {
}

// Для Mozilla Firefox версии 61 и ниже нужно использовать вендорный префикс
::-moz-selection {
}
```
