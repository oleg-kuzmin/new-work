# `border-image` (Изображение границы)

Свойство `border-image` пригодится в том случае, если вы хотите задать блоку необычную рамку, а не просто сплошную или прерывистую линию одного цвета.

Это свойство позволяет использовать картинку в качестве «заливки» рамки.

Обязательно задаётся ширина рамки. Либо в этом свойстве, либо при помощи шортката `border`, либо при помощи отдельного свойства `border-width`.

Рамка — стильная штука. Без значения для свойства стиля рамка не покажется. Соответственно, нужно либо указать значение в шорткате `border`, либо при помощи отдельного свойства `border-style`.

Можно сбросить картинку рамки при помощи ключевого слова `none` в качестве значения.

Помимо картинки, в качестве рамки можно задать градиент. Для этого вместо `url()` пишется `linear-gradient()` либо `radial-gradient()`. Остальные значения указываются так же, как если бы была указана картинка.

## Пример

```css
.element {
  border-image: url('custom-border.svg') 10 / 10px 0 10px 10px / 0px 0 stretch;
}
```

## Синтаксис

Браузер делит изначальную картинку на девять частей:
1,2,3,4 - четыре угла; 5 - верх; 6 - низ; 7 - лево; 8 - право; 9 - центр.

После этого он вставляет углы на свои места, а вот поведением вертикальных и горизонтальных сторон мы можем управлять при помощи ключевых слов.

### `border-image: url([источник]) [фрагмент] [центральная часть] / [ширина] / [повторение]`

### `[источник] (обязательный параметр)`

Первым значением указывается ссылка на картинку, которая будет использована в качестве рамки для элемента. Обратите внимание, что ссылку нужно обернуть в круглые скобки и написать перед открывающей скобкой `url`.

Картинка может быть в любом формате. В том числе в SVG.

Можно использовать отдельное свойство `border-image-source`.

### `[фрагмент] (необязательный параметр)`

Размер одного фрагмента в пикселях. Важный момент: единицы измерения не пишутся, указывается только число.

Значение может быть указано в процентах.

Значение по умолчанию — `100%`.

Можно указать от одного до четырёх числовых или процентных значений. Значения разделяются пробелами.

Можно использовать отдельное свойство `border-image-slice`.

### `[центральная часть] (необязательный параметр)`

Центральная часть по умолчанию пустая. Чтобы заполнить её фрагментами, можно задать ключевое слово `fill` после значения размера фрагмента. Но для этого трюка нужно, чтобы картинка рамки включала в себя центральную часть.

Фрагментами будет заполнена и центральная часть.

### `[ширина] (необязательный параметр)`

Для отображения рамки её ширина должна быть указана либо в свойстве `border`, либо в свойстве `border-image`. Если ширина рамки нигде не указана, то рамка не отображается.

Если указываете ширину в свойстве `border-image`, то её значение отделяется от предыдущих слэшем `/`.

При указании ширины нужно указать единицы измерения.

Можно задать от одного до четырёх значений. Значения разделяются пробелами.

Можно использовать отдельное свойство `border-image-width`.

### `[повторение] (необязательный параметр)`

Описывает при помощи ключевых слов, как именно браузер должен поступить с фрагментами при создании рамки.

Можно указать до двух значений: для горизонтали и для вертикали. Если указать одно значение, то оно применится ко всем сторонам рамки.

По горизонтали будет целое количество фрагментов, а по вертикали будет один фрагмент, растянутый на всю ширину.

У этого свойства есть и другие скрытые возможности. Например, управление центральной частью блока.

Можно использовать отдельное свойство `border-image-repeat`

Ключевые слова, которые можно задать:

- `stretch`
  Значение по умолчанию. Фрагмент рамки растягивается так, чтобы заполнить промежуток между углами.

- `repeat`
  Фрагменты повторяются до тех пор, пока области между углами не будут заполнены. Фрагмент может быть обрезан.

- `round`
  Браузер повторяет фрагменты для заполнения пространства между углами, но не обрезает их. При этом, если целое число фрагментов не закрывает всю площадь, то они равномерно распределяются, так что возможно появление промежутков между фрагментами.

- `space`
  Фрагменты повторяются, а свободное место, оставшееся после повторения целого количества фрагментов, распределяется равномерно.