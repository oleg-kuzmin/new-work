# `<hr>` (Горизонтальная черта)

*(horizontal rule: горизонтальная черта)*

Та самая горизонтальная черта, которая разделяет смысловые блоки на странице.

Тег `<hr>` помогает отделить независимые друг от друга блоки — например, подразделы в статье. Это блочный элемент, поэтому он встаёт в отдельном ряду, визуально разделяя информацию на странице.

Конечно же, перед заголовком не стоит ставить `<hr>` — заголовок сам по себе является тематическим и визуальным разделителем.

Внешний вид тега `<hr>` по умолчанию обусловлен именно наличием рамки, поэтому для изменения, например, цвета линии достаточно изменить border-color.

Дизайнеры любят пользоваться линией как средством выразительности. Почти никогда такая линия не является смысловым разделителем, и поэтому не стоит верстать её как `<hr>`. Пользуйтесь этим тегом в том случае, когда без разделителя информация теряет смысл или в ней становится трудно разобраться.

Декоративные линии можно сверстать как псевдоэлементы.

## Пример

```html
<p>Слово «динозавр» означает...</p>
<hr />
<p>Среди палеонтологов...</p>
```