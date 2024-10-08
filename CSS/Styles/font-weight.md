# [`font-weight`](../index.md)

Свойство `font-weight` задаёт насыщенность шрифта: от самого тонкого до самого жирного начертания.

Если всё же решишь использовать цифры, но у выбранного шрифта нет такого варианта насыщенности, то для значений от `100` до `500` браузер выберет стандартный вариант `normal`, а от `600` до `900` — жирный шрифт `bold`.

## Пример

```css
.element {
  font-weight: normal;
}
```

## Значения

### `font-weight: normal` (по умолчанию)

400 - Стандартная толщина шрифта.

### `font-weight: bold`

700 - Жирный набор текста.

### `font-weight: lighter`

-100 по отношению к ближайщему родителю.

### `font-weight: bolder`

+100 по отношению к ближайщему родителю

### `font-weight: 100`

Thin (Hairline) / Тонкий (Волосяной)

### `font-weight: 200`

Extra Light (Ultra Light) / Дополнительный Светлый (Сверхсветлый)

### `font-weight: 300`

Light / Светлый

### `font-weight: 400`

Normal (Regular) / Нормальный

### `font-weight: 500`

Medium / Средний

### `font-weight: 600`

Semi Bold (Demi Bold) / Полужирный

### `font-weight: 700`

Bold / Жирный

### `font-weight: 800`

Extra Bold (Ultra Bold) / Дополнительный Жирный (Сверхжирный)

### `font-weight: 900`

Black (Heavy) / Черный (Густой)
