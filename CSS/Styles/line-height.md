# [`line-height`](../index.md)

`line-height` задаёт интервал между строчками текста, который называют интерлиньяж.

С помощью`line-height` можно выбрать, насколько большое расстояние будет между строчками текста. Обычно это расстояние немного больше, чем высота шрифта.

Браузеры понимают `line-height` по-своему: как высоту контейнера строки. Символы внутри образуют область контента, а участки между этой областью и границей контейнера и есть интерлиньяж. Такая особенность может легко запутать, ведь обычно расстояние между строчками измеряется по базовым линиям текста.

Самый надёжный способ задать интервал между строчками — с помощью числа, например, `1.5`. При увеличении масштаба страницы этот интервал увеличится соответствующим образом.

Для обычного текста чаще всего используют полуторный интервал `line-height: 1.5`. С таким интервалом текст удобнее читать.

## Пример

```css
.element {
  line-height: normal;
}
```

## Значения

### `line-height: normal` (по умолчанию)

Стандартный интервал. Немного отличается в разных браузерах, но, как правило, равно `1.2`.

### `line-height: 3.5`

Множитель (число без единиц измерения) — расстояние будет в `3.5` раза больше, чем размер текста.

### `line-height: 3em`

Условные единицы — значение, относительно стандартного интервала. В данном случае, интервал будет в `3` раза больше интервала родительского элемента.

### `line-height: 34%`

Проценты — размер интервала высчитывается относительно размера шрифта. За `100%` берётся размера шрифта `font-size`.

### `line-height: 18px`

Длина — например, пиксели `px`, условные единицы шрифта `em`, дюймы `in`, пункты `pt` и так далее.
