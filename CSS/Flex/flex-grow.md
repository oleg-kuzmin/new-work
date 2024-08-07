# [`flex-grow`](../index.md)

_(grow: рост)_

Это свойство указывает, может ли вырастать флекс-элемент при наличии свободного места, и на сколько.

Если у всех флекс-элементов будет прописано flex-grow: 1, то свободное пространство в контейнере будет равномерно распределено между
ними всеми.

Если при этом одному из элементов мы зададим flex-grow: 2, то он постарается занять в два раза больше свободного места, чем его соседи.

Свойство работает с пропорциональным разделением пространства, не с конкретными размерами.

## Пример

```css
.element {
  flex-grow: 0;
}
```

## Значения

### `flex-grow: 0` (по умолчанию)

По умолчанию значение равно `0`. Значением может быть любое положительное целое число (включая `0`).

### `flex-grow: 1`, `flex-grow: 1`

Очень удобно задать всем флекс-элементам `flex-grow: 1`, и тогда они будут равного размера и займут всё внутреннее пространство родителя.

### `flex-grow: 1`, `flex-grow: 3`

Первый элемент получит `1/4` свободного места, второй элемент получит `3/4` свободного места.

### `flex-grow: 0`, `flex-grow: 1`

Первый элемент получит `0%` свободного места, второй элемент получит `100%` свободного места.
