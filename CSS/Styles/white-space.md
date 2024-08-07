# [`white-space`](../index.md)

Свойство white-space указывает браузеру, как обрабатывать пробелы в тексте.

## Пример

```css
.element {
  white-space: nowrap;
}
```

## Значения

### `white-space: normal` (по умолчанию)

Лишние пробелы и переносы строк схлопываются, текст переносится, пробелы в конце строк удаляются. Если в строке есть несколько подряд идущих пробелов, то браузер схлопывает их в один пробел. Все переносы строк в HTML внутри тега также заменяются на пробел. В итоге текст на странице переносится по пробелам, учитывая границы элемента.

### `white-space: nowrap`

Cхлопывает лишние пробелы и отображает весь текст одной строкой без переносов. Подряд идущие пробелы и переносы строк обрабатываются так же, как и с normal, но браузер перестаёт учитывать границы элемента и выводит весь текст в одну строку.

### `white-space: pre`

Cохраняет пробелы и переносы как в исходном коде аналогично тегу `<pre>`. Сохраняется всё форматирование из HTML, включая переносы строк и последовательности пробелов. Границы элемента игнорируются, и текст может выходить за них.

### `white-space: pre-wrap`

Работает как значение `<pre>`, но добавляет автоматические переносы, если текст не помещается в контейнер. Сохраняется всё форматирование из HTML, включая переносы строк и последовательности пробелов. В отличие от pre текст переносится автоматически при достижении границы элемента.

### `white-space: pre-line`

Как `normal`, лишние пробелы схлопываются, но строки переносятся на символе переноса строки, на `<br>` и по мере заполнения строки. Подряд идущие пробелы схлопываются, но остальное форматирование из HTML сохраняется, текст переносится в местах переноса строк в HTML. Текст переносится автоматически при достижении границ элемента.

### `white-space: break-spaces`

Поведение идентично `pre-wrap`, но при схлопывании пробелов остаются нетронутыми зарезервированные пробелы, такие как пробелы в конце строки. Поведение аналогично `pre-wrap`, за исключением одного отличия. Мы помним, что при значении `pre-wrap` слова переносятся, учитывая границы элемента, но если за крайним словом у границы следуют несколько пробелов, то они сохраняются в той же строке. В варианте с break-spaces эти пробелы поведут себя сложнее. Какая-то их часть останется на той же строке, дополняя ширину элемента до максимально допустимой, а вторая часть пробелов перенесётся на новую строку.
