# [`float`](../index.md)

Свойство помогает «обтекать» блоки текстом.

Элемент, для которого указано это свойство, частично выходит из потока: все элементы блочного контекста, прописанные в коде после элемента с `float`, занимают его место, а элементы строчного контекста — «обтекают» его.

Применяя `float` к элементу, мы неявно делаем его блочным.

## Пример

```css
.element {
  float: none;
}
```

## значения

### `float: none` (по умолчанию)

Элемент останется в потоке.

### `float: left`

Элемент встанет у левого края родительского блока.

### `float: right`

Элемент встанет у правого края родительского блока.
