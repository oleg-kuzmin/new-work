# [`background-repeat`](../index.md)

Свойство `background-repeat` управляет повтором фонового изображения.

Ключевые слова `repeat` и `no-repeat` можно комбинировать, чтобы управлять повторениями по горизонтали (первое значение) и по вертикали (второе значение). Но проще указывать специальные ключевые слова `repeat-x` и `repeat-y`.

Свойство не наследуется.

Чаще всего для полноэкранных фонов указывается значение `no-repeat`.

Свойство `background-repeat` нельзя анимировать.

## Пример

```css
.element {
  background-repeat: repeat;
}
```

## Значения

### `background-repeat: repeat` (по умолчанию)

Повторяется и по горизонтали, и по вертикали до тех пор, пока не заполнит всю площадь элемента

### `background-repeat: no-repeat`

Фоновое изображение не повторяется, остаётся только одно внутри элемента.

### `background-repeat: repeat-x`

Фон повторяется по горизонтали

### `background-repeat: repeat-y`

Фон повторяется по вертикали

### `background-repeat: space`

Изображение повторяется до тех пор, пока не заполнит весь элемент. При этом, если по размерам не удаётся повторить изображение без обрезки, то между картинками добавляется равное пространство. Крайне редко требуется в работе.

### `background-repeat: round`

Изображение повторяется так, чтобы заполнить весь элемент. Но картинка не обрезается, повторяется целое количество раз. Если это не удаётся, то картинка масштабируется. Крайне редко требуется в работе.
