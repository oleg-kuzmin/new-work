# [`border-block-style`](../index.md)

- [`border-block-start-style`](./border-block-start-style.md) стиль первой границы
- [`border-block-end-style`](./border-block-end-style.md) стиль второй границы

Можно управлять стилем границы каждой стороны в отдельности.

## Пример

```css
.element {
  border-block-style: none;
}
```

## Значения

### `border-block-style: none` (по умолчанию)

Отключает рамку.

### `border-block-style: solid`

Сплошная рамка. Этот стиль используется чаще всего.

### `border-block-style: dotted`

Рамка состоит из точек с пробелами между ними.

### `border-block-style: dashed`

Рамка состоит из коротких чёрточек с пробелами между ними.

### `border-block-style: double`

Рамка состоит из двух сплошных линий с небольшим нерегулируемым отступом между ними.

### `border-block-style: groove`

Рамка объёмная, с тенями от источника света, находящегося в верхнем левом наружном углу.

### `border-block-style: ridge`

Рамка объёмная, с тенями от источника света, находящегося в нижнем правом внешнем углу.

### `border-block-style: inset`

Рамка с тенями от источника света, находящегося в нижнем правом внутреннем углу.

### `border-block-style: outset`

Рамка с тенями от источника света, находящегося в левом верхнем внутреннем углу.
