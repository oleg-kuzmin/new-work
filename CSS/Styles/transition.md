# [`transition`](../index.md)

- [`transition-property`](./transition-property.md) название свойства
- [`transition-duration`](./transition-duration.md) длительность перехода
- [`transition-timing-function`](./transition-timing-function.md) проигрывание перехода
- [`transition-delay`](./transition-delay.md) задержка до старта

Свойство `transition` используется, когда нам нужно плавно изменить CSS-свойства между двумя состояниями элемента. Например, при наведении мышкой.

С помощью `transition` можно плавно изменять любое свойство, у которого значение записывается с помощью чисел (например, `margin`). Исключения: `visibility`, `z-index`.

По возможности старайтесь не использовать слово `all` для описания перехода (`transition: all .3s`). Да, это проще на первоначальном этапе, но позже из-за этого в какой-то момент могут начать плавно изменяться свойства, которые не должны этого делать. Ну и вообще, когда браузер встречает слово `all`, он начинает перебирать каждое свойство элемента в поисках необходимого. Это ненужная нагрузка.

Старайтесь использовать для анимации в первую очередь свойства `transform` и `opacity` — они самые производительные, потому что не приводят к перезапуску процессов Layout и Paint. Изменяйте свойства `left`, `top`, `inset`, `margin`, `padding`, `width`, `inline-size`, `height`, `block-size` и прочие с осторожностью, только когда без этого никак не обойтись.

Мы можем настроить `transition` таким образом, что при изменении состояния переход будет выполняться с одной скоростью, а при обратном изменении состояния — с другой. Для этого нужно указать два `transition`.

## Пример

```css
.element {
  transition: transform 4s;
}
```

## Синтаксис

### `transition: [property] [duration]`

### `transition: [property] [duration] [delay]`

### `transition: [property] [duration] [timing-function] [delay]`

## Значения

### `transition: transform 4s`

Порядок записи: property, duration.

### `transition: transform 4s 1s`

Порядок записи: property, duration, delay.

### `transition: transform 4s ease-in-out 1s`

Порядок записи: property, duration, timing-function, delay.

### `transition: transform 4s, color 1s`

Применить к двум свойствам.

### `transition: all 0.5s ease-out`

Применить ко всем свойствам, которые будут меняться.
