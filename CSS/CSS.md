<style>
  * {
    user-select: none;    
  }

  h1, h2 {
    scroll-margin: 150px;
  }
</style>

# Оглавление

- [Теория](#теория)
- [Sass](#sass)
- [Bootstrap](#bootstrap)
- [Псевдоэлементы](#псевдоэлементы)
- [Grid](#grid)
- [Styles](#styles)

## [Теория](#оглавление)

- [`Вложенность селекторов`](<./Теория/Вложенность селекторов.md>)
- [`Переменные`](./Теория/Переменные.md)
- [`Grid`](./Теория/Grid.md)

## [Sass](#оглавление)

- [`Установка`](./Sass/Установка.md)
- [`Миксины`](./Sass/Миксины.md)
- [`Наследование и шаблоны`](<./Sass/Наследование и шаблоны.md>)
- [`Переменные`](./Sass/Переменные.md)
- [`Функции`](./Sass/Функции.md)

## [Bootstrap](#оглавление)

- [`Установка`](./Bootstrap/Установка.md)
- [`margin, padding`](<./Bootstrap/margin, padding.md>)

## [Псевдоэлементы](#оглавление)

- [`::marker`](./Псевдоэлементы/marker.md) маркеры списка

## [Grid](#оглавление)

### grid-container

- [`grid-template`](./Grid/grid-template.md) явные строки и колонки
  - [`grid-template-rows`](./Grid/grid-template-rows.md) явные строки
  - [`grid-template-columns`](./Grid/grid-template-columns.md) явные колонки
  - [`grid-template-areas`](./Grid/grid-template-areas.md) грид-области
- [`gap`](./Grid/gap.md) отступы
  - [`row-gap`](./Grid/row-gap.md) отступы между строками
  - [`column-gap`](./Grid/column-gap.md) отступы между колонками
- [`grid-auto-flow`](./Grid/grid-auto-flow.md) поток элементов
- [`grid-auto-rows`](./Grid/grid-auto-rows.md) неявные строки
- [`grid-auto-columns`](./Grid/grid-auto-columns.md) неявные колонки
- [`place-items`](./Grid/place-items.md) выравнивание контента внутри ячеек
  - [`align-items`](./Grid/align-items.md) выравнивание контента внутри ячеек по вертикали
  - [`justify-items`](./Grid/justify-items.md) выравнивание контента внутри ячеек по горизонтали
- [`place-items`](./Grid/place-content.md) выравнивание элементов
  - [`justify-content`](./Grid/justify-content.md) выравнивание элементов по горизонтали
  - [`align-content`](./Grid/align-content.md) выравнивание элементов по вертикали

### grid-item

- [`grid-column`](./Grid/grid-column.md) расположение элемента по горизонтали
  - [`grid-column-start`](./Grid/grid-column-start.md) начало элемента по горизонтали
  - [`grid-column-end`](./Grid/grid-column-end.md) конец элемента по горизонтали
- [`grid-row`](./Grid/grid-column.md) расположение элемента по вертикали
  - [`grid-row-start`](./Grid/grid-row-start.md) начало элемента по вертикали
  - [`grid-row-end`](./Grid/grid-row-end.md) конец элемента по вертикали
- [`grid-area`](./Grid/grid-area.md) название грид-области
- [`place-self`](./Grid/place-self.md) выравнивание контента внутри ячейки
  - [`align-self`](./Grid/align-self.md) выравнивание контента внутри ячейки по вертикали
  - [`justify-self`](./Grid/justify-self.md) выравнивание контента внутри ячейки по горизонтали
- [`order`](./Grid/order.md) порядок отображения элемента

## [Styles](#оглавление)

### all

- [`all`](./Styles/all.md) все свойства

### animation

- [`animation`](./Styles/animation.md) анимация
  - [`animation-delay`](./Styles/animation-delay.md) задержка старта анимации
  - [`animation-direction`](./Styles/animation-direction.md) порядок воспроизведения
  - [`animation-duration`](./Styles/animation-duration.md) длительность одного цикла
  - [`animation-fill-mode`](./Styles/animation-fill-mode.md) стили до или после цикла
  - [`animation-iteration-count`](./Styles/animation-iteration-count.md) количество циклов
  - [`animation-name`](./Styles/animation-name.md) имя анимации
  - [`animation-play-state`](./Styles/animation-play-state.md) позволяет поставить на паузу
  - [`animation-timing-function`](./Styles/animation-timing-function.md) проигрывание кадров

### backface-visibility

- [`backface-visibility`](./Styles/backface-visibility.md) обратная сторона элемента

### background

- [`background`](./Styles/background.md) задний фон
  - [`background-attachment`](./Styles/background-attachment.md) прокрутка фона
  - [`background-clip`](./Styles/background-clip.md) блочная модель фона
  - [`background-color`](./Styles/background-color.md) цвет фона
  - [`background-image`](./Styles/background-image.md) картинка, градиент фона
  - [`background-position`](./Styles/background-position.md) позиционирование фона
  - [`background-repeat`](./Styles/background-repeat.md) повтор фона
  - [`background-size`](./Styles/background-size.md) подстройка размера фона

### border

- [`border`](./Styles/border/border.md) границы
  - [`border-width`](./Styles/border/border-width.md) толщина границ
    - [`border-top-width`](./Styles/border/border-top-width.md) толщина границы сверху
    - [`border-right-width`](./Styles/border/border-right-width.md) толщина границы справа
    - [`border-bottom-width`](./Styles/border/border-bottom-width.md) толщина границы снизу
    - [`border-left-width`](./Styles/border/border-left-width.md) толщина границы слева
  - [`border-style`](./Styles/border/border-style.md) стиль границ
    - [`border-top-style`](./Styles/border/border-top-style.md) стиль границы сверху
    - [`border-right-style`](./Styles/border/border-right-style.md) стиль границы справа
    - [`border-bottom-style`](./Styles/border/border-bottom-style.md) стиль границы снизу
    - [`border-left-style`](./Styles/border/border-left-style.md) стиль границы слева
  - [`border-color`](./Styles/border/border-color.md) цвет границ
    - [`border-top-color`](./Styles/border/border-top-color.md) цвет границы сверху
    - [`border-right-color`](./Styles/border/border-right-color.md) цвет границы справа
    - [`border-bottom-color`](./Styles/border/border-bottom-color.md) цвет границы снизу
    - [`border-left-color`](./Styles/border/border-left-color.md) цвет границы слева

### border-top

- [`border-top`](./Styles/border/border-top.md) граница сверху
  - [`border-top-width`](./Styles/border/border-top-width.md) толщина границы сверху
  - [`border-top-style`](./Styles/border/border-top-style.md) стиль границы сверху
  - [`border-top-color`](./Styles/border/border-top-color.md) цвет границы сверху

### border-right

- [`border-right`](./Styles/border/border-right.md) граница справа
  - [`border-right-width`](./Styles/border/border-right-width.md) толщина границы справа
  - [`border-right-style`](./Styles/border/border-right-style.md) стиль границы справа
  - [`border-right-color`](./Styles/border/border-right-color.md) цвет границы справа

### border-bottom

- [`border-bottom`](./Styles/border/border-bottom.md) граница снизу
  - [`border-bottom-width`](./Styles/border/border-bottom-width.md) толщина границы снизу
  - [`border-bottom-style`](./Styles/border/border-bottom-style.md) стиль границы снизу
  - [`border-bottom-color`](./Styles/border/border-bottom-color.md) цвет границы снизу

### border-left

- [`border-left`](./Styles/border/border-left.md) граница слева
  - [`border-left-width`](./Styles/border/border-left-width.md) толщина границы слева
  - [`border-left-style`](./Styles/border/border-left-style.md) стиль границы слева
  - [`border-left-color`](./Styles/border/border-left-color.md) цвет границы слева

### border-block

- [`border-block`](./Styles/border/border-block.md) границы блочная ось
  - [`border-block-width`](./Styles/border/border-block-width.md) толщина границ
    - [`border-block-start-width`](./Styles/border/border-block-start-width.md) толщина первой границы
    - [`border-block-end-width`](./Styles/border/border-block-end-width.md) толщина второй границы
  - [`border-block-style`](./Styles/border/border-block-style.md) стиль границ
    - [`border-block-start-style`](./Styles/border/border-block-start-style.md) стиль первой границы
    - [`border-block-end-style`](./Styles/border/border-block-end-style.md) стиль второй границы
  - [`border-block-color`](./Styles/border/border-block-color.md) цвет границ
    - [`border-block-start-color`](./Styles/border/border-block-start-color.md) цвет первой границы
    - [`border-block-end-color`](./Styles/border/border-block-end-color.md) цвет второй границы

### border-block-start

- [`border-block-start`](./Styles/border/border-block-start.md) первая границы блочной оси
  - [`border-block-start-width`](./Styles/border/border-block-start-width.md) толщина первой границы
  - [`border-block-start-style`](./Styles/border/border-block-start-style.md) стиль первой границы
  - [`border-block-start-color`](./Styles/border/border-block-start-color.md) цвет первой границы

### border-block-end

- [`border-block-end`](./Styles/border/border-block-end.md) вторая граница блочной оси
  - [`border-block-end-width`](./Styles/border/border-block-end-width.md) толщина второй границы
  - [`border-block-end-style`](./Styles/border/border-block-end-style.md) стиль второй границы
  - [`border-block-end-color`](./Styles/border/border-block-end-color.md) цвет второй границы

### border-inline

- [`border-inline`](./Styles/border/border-inline.md) границы строчная ось
  - [`border-inline-width`](./Styles/border/border-inline-width.md) толщина границ
    - [`border-inline-start-width`](./border/border-inline-start-width.md) толщина первой границы
    - [`border-inline-end-width`](./Styles/border/border-inline-end-width.md) толщина второй границы
  - [`border-inline-style`](./Styles/border/border-inline-style.md) стиль границ
    - [`border-inline-start-style`](./Styles/border/border-inline-start-style.md) стиль первой границы
    - [`border-inline-end-style`](./Styles/border/border-inline-end-style.md) стиль второй границы
  - [`border-inline-color`](./Styles/border/border-inline-color.md) цвет границ
    - [`border-inline-start-color`](./Styles/border/border-inline-start-color.md) цвет первой границы
    - [`border-inline-end-color`](./Styles/border/border-inline-end-color.md) цвет второй границы

### border-inline-start

- [`border-inline-start`](./Styles/border/border-inline-start.md) первая границы строчной оси
  - [`border-inline-start-width`](./border/border-inline-start-width.md) толщина первой границы
  - [`border-inline-start-style`](./Styles/border/border-inline-start-style.md) стиль первой границы
  - [`border-inline-start-color`](./Styles/border/border-inline-start-color.md) цвет первой границы

### border-inline-end

- [`border-inline-end`](./Styles/border/border-inline-end.md) вторая границы строчной оси
  - [`border-inline-end-width`](./Styles/border/border-inline-end-width.md) толщина второй границы
  - [`border-inline-end-style`](./Styles/border/border-inline-end-style.md) стиль второй границы
  - [`border-inline-end-color`](./Styles/border/border-inline-end-color.md) цвет второй границы

### border-image

- [`border-image`](./Styles/border/border-image.md) изображение границы

### border-radius

- [`border-radius`](./Styles/border/border-radius.md) скругление границ
  - [`border-bottom-left-radius`](./Styles/border/border-bottom-left-radius.md) скругление границы снизу слева
  - [`border-bottom-right-radius`](./Styles/border/border-bottom-right-radius.md) скругление границы снизу справа
  - [`border-top-left-radius`](./Styles/border/border-top-left-radius.md) скругление границы сверху слева
  - [`border-top-right-radius`](./Styles/border/border-top-right-radius.md) скругление границы сверху справа

### border-collapse

- [`border-collapse`](./Styles/border/border-collapse.md) смежные границы ячеек

### border-spacing

- [`border-spacing`](./Styles/border/border-spacing.md) отступ между ячейками таблицы

### box

- [`box-shadow`](./Styles/box/box-shadow.md) тень блока
- [`box-sizing`](./Styles/box/box-sizing.md) размер блочной модели

### caption-side

- [`caption-side`](./Styles/caption-side/caption-side.md) положение подписи таблицы

### clip-path

- [`clip-path`](./Styles/clip-path/clip-path.md) видимая область

### columns

- [`columns`](./Styles/columns/columns.md) колонки
  - [`column-count`](./Styles/columns/column-count.md) количество колонок
  - [`column-width`](./Styles/columns/column-width.md) ширина колонок
- [`column-gap`](./Styles/columns/column-gap.md) отступ между колонками

### display

- [`display`](./Styles/display/display.md) тип отображения

### fill

- [`fill`](./Styles/fill/fill.md) цвет заливки svg

### float

- [`float`](./Styles/float/float.md) обтекание блока текстом

### height

- [`height`](./Styles/height/height.md) высота
- [`max-height`](./Styles/height/max-height.md) максимальная высота
- [`min-height`](./Styles/height/min-height.md) минимальная высота

### list-style

- [`list-style`](./Styles/list-style/list-style.md) маркеры списка
  - [`list-style-image`](./Styles/list-style/list-style-image.md) маркеры в виде картинок
  - [`list-style-position`](./Styles/list-style/list-style-position.md) положение маркеров
  - [`list-style-type`](./Styles/list-style/list-style-type.md) тип маркеров

### margin

- [`margin`](./Styles/margin/margin.md) внешние отступы
  - [`margin-top`](./Styles/margin/margin-top.md) внешний отступ сверху
  - [`margin-right`](./Styles/margin/margin-right.md) внешний отступ справа
  - [`margin-bottom`](./Styles/margin/margin-bottom.md) внешний отступ снизу
  - [`margin-left`](./Styles/margin/margin-left.md) внешний отступ слева

### margin-block

- [`margin-block`](./Styles/margin/margin-block.md) внешние отступы блочная ось
  - [`margin-block-start`](./Styles/margin/margin-block-start.md) внешний отступ начало блочной оси
  - [`margin-block-end`](./Styles/margin/margin-block-end.md) внешний отступ конец блочной оси

### margin-inline

- [`margin-inline`](./Styles/margin/margin-inline.md) внешние отступы строчная ось
  - [`margin-inline-start`](./Styles/margin/margin-inline-start.md) внешний отступ начало строчной оси
  - [`margin-inline-end`](./Styles/margin/margin-inline-end.md) внешний отступ конец строчной оси

### object

- [`object-fit`](./Styles/object/object-fit.md) подстройка размера медиа
- [`object-position`](./Styles/object/object-position.md) позиционирование медиа

### opacity

- [`opacity`](./Styles/opacity/opacity.md) прозрачность

### outline

- [`outline`](./Styles/outline/outline.md) обводка
  - [`outline-width`](./Styles/outline/outline-width.md) толщина обводки
  - [`outline-style`](./Styles/outline/outline-style.md) стиль обводки
  - [`outline-color`](./Styles/outline/outline-color.md) цвет обводки
- [`outline-offset`](./Styles/outline/outline-offset.md) отступ до обводки

### overflow

- [`overflow`](./Styles/overflow/overflow.md) переполнение блока
  - [`overflow-x`](./Styles/overflow/overflow-x.md) переполнение блока по горизонтали
  - [`overflow-y`](./Styles/overflow/overflow-y.md) переполнение блока по вертикали
- [`overflow-wrap`](./Styles/overflow/overflow-wrap.md) перенос слов

### padding

- [`padding`](./Styles/padding/padding.md) внутренний отступ
  - [`padding-top`](./Styles/padding/padding-top.md) внутренний отступ сверху
  - [`padding-right`](./Styles/padding/padding-right.md) внутренний отступ справа
  - [`padding-bottom`](./Styles/padding/padding-bottom.md) внутренний отступ снизу
  - [`padding-left`](./Styles/padding/padding-left.md) внутренний отступ слева

### padding-block

- [`padding-block`](./Styles/padding/padding-block.md) внутренние отступы блочная ось
  - [`padding-block-start`](./Styles/padding/padding-block-start.md) внутренний отступ начало блочной оси
  - [`padding-block-end`](./Styles/padding/padding-block-end.md) внутренний отступ конец блочной оси

### padding-inline

- [`padding-inline`](./Styles/padding/padding-inline.md) внутренние отступы строчная ось
  - [`padding-inline-start`](./Styles/padding/padding-inline-start.md) внутренний отступ начало строчной оси
  - [`padding-inline-end`](./Styles/padding/padding-inline-end.md) внутренний отступ конец строчной оси

### pointer-events

- [`pointer-events`](./Styles/pointer-events/pointer-events.md) реагирование на события

### position

- [`position`](./Styles/position/position.md) позиционирование
  - [`top`](./Styles/position/top.md) смещение сверху
  - [`right`](./Styles/position/right.md) смещение справа
  - [`bottom`](./Styles/position/bottom.md) смещение снизу
  - [`left`](./Styles/position/left.md) смещение слева

### quotes

- [`quotes`](./Styles/quotes/quotes.md) кавычки

### resize

- [`resize`](./Styles/resize/resize.md) изменение размеров элемента

### scroll-behavior

- [`scroll-behavior`](./Styles/scroll-behavior/scroll-behavior.md) плавная прокрутка

### stroke

- [`stroke`](./Styles/stroke/stroke.md) цвет обводки svg

### text-align

- [`text-align`](./Styles/text-align/text-align.md) горизонтальное выравнивание
- [`text-align-last`](./Styles/text-align/text-align-last.md) выравнивание последней строки

### transform

- [`transform`](./Styles/transform/transform.md) трансформация
- [`transform-origin`](./Styles/transform/transform-origin.md) точка отсчета
- [`perspective`](./Styles/transform/perspective.md) точка перспективы
- [`translate`](./Styles/transform/translate.md) смещение
- [`scale`](./Styles/transform/scale.md) увеличение
- [`rotate`](./Styles/transform/rotate.md) вращение
- [`skew`](./Styles/transform/skew.md) наклон
- [`matrix`](./Styles/transform/matrix.md) матрица трансформации

### transition

- [`transition-property`](./Styles/transition/transition-property.md) название свойства
- [`transition-duration`](./Styles/transition/transition-duration.md) время анимации
- [`transition-timing-function`](./Styles/transition/transition-timing-function.md) проигрывание анимации
