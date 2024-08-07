# [`background-image`](../index.md)

Свойство `background-image` задаёт элементу фоновую картинку.

Разные браузеры могут отображать фоновую картинку по-разному. Например, если вы задаёте фоновую картинку внутри таблицы для одной строки целиком, то Chrome и Safari продублируют эту картинку в каждой ячейке, тогда как остальные растянут картинку на всю строку.

Если задаём фоновую картинку для блока со светлым текстом, то обязательно задаём и фоновый цвет, если при загрузке страницы картинка будет долго загружаться или вообще не загрузится, то светлый текст на белом будет совершенно не виден.

Элементу желательно задать одновременно и цвет фона `background-color`, и фоновую картинку `background-image`. Если картинка не загрузится, то вместо неё пользователь увидит хотя бы фоновый цвет.

## Пример

```css
.element {
  background-image: url('******');
}
```

## Значения

### `background-image: none` (по умолчанию)

Сбрасывает фоновую картинку

### `background-image: url('******')`

Адрес картинки, он пишется в кавычках внутри скобок.

### `background-image: url('******'), url('******')`

Фоновых картинок можно задать сколько угодно. Они будут накладываться друг на друга, причём сверху будет та, которая указана в списке первой. Если у картинки прозрачный фон, то под ней будет видна следующая. И так до бесконечности.

## Значения linear-gradient

Цвет меняется вдоль линии, задающей направление.

### `background-image: linear-gradient(#0078ff, #c2e3e3)`

В самом простом случае указывают два цвета — начальный и конечный (браузер сделает между ними плавный переход). Направление можно не указывать, тогда будет использовано значение по умолчанию — сверху вниз.

### `background-image: linear-gradient(to top, #0078ff, #53f675)`

Направление вверх.

### `background-image: linear-gradient(to left, #0078ff, #53f675)`

Направление налево.

### `background-image: linear-gradient(to right, #0078ff, #53f675)`

Направление направо.

### `background-image: linear-gradient(to bottom, #0078ff, #53f675)`

Направление вниз.

### `background-image: linear-gradient(to right top, #0078ff, #53f675)`

Направление по диагонали в правый верхний угол.

### `background-image: linear-gradient(to right bottom, #0078ff, #53f675)`

Направление по диагонали в правый нижний угол.

### `background-image: linear-gradient(to left top, #0078ff, #53f675)`

Направление по диагонали в левый верхний угол.

### `background-image: linear-gradient(to left bottom, #0078ff, #53f675)`

Направление по диагонали в левый нижний угол.

### `background-image: linear-gradient(90deg, #0078ff, #c2e3e3)`

Направление - градусы [0 +- 360]deg

### `background-image: linear-gradient(#0b2337, #126ddc, #76c2e0, #d1dc9d, #f09174)`

Несколько цветов - для построения более сложных градиентов можно использовать более одного цвета.

### `background-image: linear-gradient(#0078ff 50%, #c2e3e3 50%)`

Можно определять точки перелома в процентах или пикселях.

### `background-image: linear-gradient(#0078ff 0px 100px, #b4deef 100px 200px, #ff5a0a 200px 300px)`

После указания каждого цвета можно задать интервал, в котором нужно применить цвет (первое значение - начальная точка указанного направления, второе - финальная точка указанного направления).

## Значения radial-gradient

Изменения цвета расходятся от заданного центра, а сам градиент может принимать форму круга или эллипса

### `background-image: radial-gradient(#0078ff, #c2e3e3)`

Самый простой радиальный градиент.

### `background-image: radial-gradient(at 40px 50px, #0078ff, #c2e3e3)`

По умолчанию центр градиента находится в середине блока (его можно сместить, задав позицию ключевым словом `at` (в такой-то точке), в примере поместим центр градиента на 40 пикселей правее левого края блока и на 50 пикселей ниже верхнего края).

### `background-image: radial-gradient(#0078ff 0px 100px, #b4deef 100px 200px, #ff5a0a 200px 300px)`

После указания каждого цвета можно задать интервал, в котором нужно применить цвет (первое значение - начальная точка указанного направления, второе - финальная точка указанного направления).

### `background-image: radial-gradient(#0078ff 20%, #c2e3e3 100%)`

Можно определять точки перелома в процентах или пикселях.

### `background-image: radial-gradient(40px 100px, #0078ff, #c2e3e3)`

Можно задать ширину и высоту первыми параметрами в скобках, эллипс растянется или сожмётся.
