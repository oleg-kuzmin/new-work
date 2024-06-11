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

- [`all`](./STYLES/all/all.md) все свойства

### animation

- [`animation`](./STYLES/animation/animation.md) анимация
  - [`animation-delay`](./STYLES/animation/animation-delay.md) задержка старта анимации
  - [`animation-direction`](./STYLES/animation/animation-direction.md) порядок воспроизведения
  - [`animation-duration`](./STYLES/animation/animation-duration.md) длительность одного цикла
  - [`animation-fill-mode`](./STYLES/animation/animation-fill-mode.md) стили до или после цикла
  - [`animation-iteration-count`](./STYLES/animation/animation-iteration-count.md) количество циклов
  - [`animation-name`](./STYLES/animation/animation-name.md) имя анимации
  - [`animation-play-state`](./STYLES/animation/animation-play-state.md) позволяет поставить на паузу
  - [`animation-timing-function`](./STYLES/animation/animation-timing-function.md) проигрывание кадров

### backface-visibility

- [`backface-visibility`](./STYLES/backface-visibility/backface-visibility.md) обратная сторона элемента

### background

- [`background`](./STYLES/background/background.md) задний фон
  - [`background-attachment`](./STYLES/background/background-attachment.md) прокрутка фона
  - [`background-clip`](./STYLES/background/background-clip.md) блочная модель фона
  - [`background-color`](./STYLES/background/background-color.md) цвет фона
  - [`background-image`](./STYLES/background/background-image.md) картинка, градиент фона
  - [`background-position`](./STYLES/background/background-position.md) позиционирование фона
  - [`background-repeat`](./STYLES/background/background-repeat.md) повтор фона
  - [`background-size`](./STYLES/background/background-size.md) подстройка размера фона

### border

- [`border`](./STYLES/border/border.md) границы
  - [`border-width`](./STYLES/border/border-width.md) толщина границ
    - [`border-top-width`](./STYLES/border/border-top-width.md) толщина границы сверху
    - [`border-right-width`](./STYLES/border/border-right-width.md) толщина границы справа
    - [`border-bottom-width`](./STYLES/border/border-bottom-width.md) толщина границы снизу
    - [`border-left-width`](./STYLES/border/border-left-width.md) толщина границы слева
  - [`border-style`](./STYLES/border/border-style.md) стиль границ
    - [`border-top-style`](./STYLES/border/border-top-style.md) стиль границы сверху
    - [`border-right-style`](./STYLES/border/border-right-style.md) стиль границы справа
    - [`border-bottom-style`](./STYLES/border/border-bottom-style.md) стиль границы снизу
    - [`border-left-style`](./STYLES/border/border-left-style.md) стиль границы слева
  - [`border-color`](./STYLES/border/border-color.md) цвет границ
    - [`border-top-color`](./STYLES/border/border-top-color.md) цвет границы сверху
    - [`border-right-color`](./STYLES/border/border-right-color.md) цвет границы справа
    - [`border-bottom-color`](./STYLES/border/border-bottom-color.md) цвет границы снизу
    - [`border-left-color`](./STYLES/border/border-left-color.md) цвет границы слева

### border-top

- [`border-top`](./STYLES/border/border-top.md) граница сверху
  - [`border-top-width`](./STYLES/border/border-top-width.md) толщина границы сверху
  - [`border-top-style`](./STYLES/border/border-top-style.md) стиль границы сверху
  - [`border-top-color`](./STYLES/border/border-top-color.md) цвет границы сверху

### border-right

- [`border-right`](./STYLES/border/border-right.md) граница справа
  - [`border-right-width`](./STYLES/border/border-right-width.md) толщина границы справа
  - [`border-right-style`](./STYLES/border/border-right-style.md) стиль границы справа
  - [`border-right-color`](./STYLES/border/border-right-color.md) цвет границы справа

### border-bottom

- [`border-bottom`](./STYLES/border/border-bottom.md) граница снизу
  - [`border-bottom-width`](./STYLES/border/border-bottom-width.md) толщина границы снизу
  - [`border-bottom-style`](./STYLES/border/border-bottom-style.md) стиль границы снизу
  - [`border-bottom-color`](./STYLES/border/border-bottom-color.md) цвет границы снизу

### border-left

- [`border-left`](./STYLES/border/border-left.md) граница слева
  - [`border-left-width`](./STYLES/border/border-left-width.md) толщина границы слева
  - [`border-left-style`](./STYLES/border/border-left-style.md) стиль границы слева
  - [`border-left-color`](./STYLES/border/border-left-color.md) цвет границы слева

### border-block

- [`border-block`](./STYLES/border/border-block.md) границы блочная ось
  - [`border-block-width`](./STYLES/border/border-block-width.md) толщина границ
    - [`border-block-start-width`](./STYLES/border/border-block-start-width.md) толщина первой границы
    - [`border-block-end-width`](./STYLES/border/border-block-end-width.md) толщина второй границы
  - [`border-block-style`](./STYLES/border/border-block-style.md) стиль границ
    - [`border-block-start-style`](./STYLES/border/border-block-start-style.md) стиль первой границы
    - [`border-block-end-style`](./STYLES/border/border-block-end-style.md) стиль второй границы
  - [`border-block-color`](./STYLES/border/border-block-color.md) цвет границ
    - [`border-block-start-color`](./STYLES/border/border-block-start-color.md) цвет первой границы
    - [`border-block-end-color`](./STYLES/border/border-block-end-color.md) цвет второй границы

### border-block-start

- [`border-block-start`](./STYLES/border/border-block-start.md) первая границы блочной оси
  - [`border-block-start-width`](./STYLES/border/border-block-start-width.md) толщина первой границы
  - [`border-block-start-style`](./STYLES/border/border-block-start-style.md) стиль первой границы
  - [`border-block-start-color`](./STYLES/border/border-block-start-color.md) цвет первой границы

### border-block-end

- [`border-block-end`](./STYLES/border/border-block-end.md) вторая граница блочной оси
  - [`border-block-end-width`](./STYLES/border/border-block-end-width.md) толщина второй границы
  - [`border-block-end-style`](./STYLES/border/border-block-end-style.md) стиль второй границы
  - [`border-block-end-color`](./STYLES/border/border-block-end-color.md) цвет второй границы

### border-inline

- [`border-inline`](./STYLES/border/border-inline.md) границы строчная ось
  - [`border-inline-width`](./STYLES/border/border-inline-width.md) толщина границ
    - [`border-inline-start-width`](./border/border-inline-start-width.md) толщина первой границы
    - [`border-inline-end-width`](./STYLES/border/border-inline-end-width.md) толщина второй границы
  - [`border-inline-style`](./STYLES/border/border-inline-style.md) стиль границ
    - [`border-inline-start-style`](./STYLES/border/border-inline-start-style.md) стиль первой границы
    - [`border-inline-end-style`](./STYLES/border/border-inline-end-style.md) стиль второй границы
  - [`border-inline-color`](./STYLES/border/border-inline-color.md) цвет границ
    - [`border-inline-start-color`](./STYLES/border/border-inline-start-color.md) цвет первой границы
    - [`border-inline-end-color`](./STYLES/border/border-inline-end-color.md) цвет второй границы

### border-inline-start

- [`border-inline-start`](./STYLES/border/border-inline-start.md) первая границы строчной оси
  - [`border-inline-start-width`](./border/border-inline-start-width.md) толщина первой границы
  - [`border-inline-start-style`](./STYLES/border/border-inline-start-style.md) стиль первой границы
  - [`border-inline-start-color`](./STYLES/border/border-inline-start-color.md) цвет первой границы

### border-inline-end

- [`border-inline-end`](./STYLES/border/border-inline-end.md) вторая границы строчной оси
  - [`border-inline-end-width`](./STYLES/border/border-inline-end-width.md) толщина второй границы
  - [`border-inline-end-style`](./STYLES/border/border-inline-end-style.md) стиль второй границы
  - [`border-inline-end-color`](./STYLES/border/border-inline-end-color.md) цвет второй границы

### border-image

- [`border-image`](./STYLES/border/border-image.md) изображение границы

### border-radius

- [`border-radius`](./STYLES/border/border-radius.md) скругление границ
  - [`border-bottom-left-radius`](./STYLES/border/border-bottom-left-radius.md) скругление границы снизу слева
  - [`border-bottom-right-radius`](./STYLES/border/border-bottom-right-radius.md) скругление границы снизу справа
  - [`border-top-left-radius`](./STYLES/border/border-top-left-radius.md) скругление границы сверху слева
  - [`border-top-right-radius`](./STYLES/border/border-top-right-radius.md) скругление границы сверху справа

### border-collapse

- [`border-collapse`](./STYLES/border/border-collapse.md) смежные границы ячеек

### border-spacing

- [`border-spacing`](./STYLES/border/border-spacing.md) отступ между ячейками таблицы

### box

- [`box-shadow`](./STYLES/box/box-shadow.md) тень блока
- [`box-sizing`](./STYLES/box/box-sizing.md) размер блочной модели

### caption-side

- [`caption-side`](./STYLES/caption-side/caption-side.md) положение подписи таблицы

### clip-path

- [`clip-path`](./STYLES/clip-path/clip-path.md) видимая область

### columns

- [`columns`](./STYLES/columns/columns.md) колонки
  - [`column-count`](./STYLES/columns/column-count.md) количество колонок
  - [`column-width`](./STYLES/columns/column-width.md) ширина колонок
- [`column-gap`](./STYLES/columns/column-gap.md) отступ между колонками

### display

- [`display`](./STYLES/display/display.md) тип отображения

### fill

- [`fill`](./STYLES/fill/fill.md) цвет заливки svg

### float

- [`float`](./STYLES/float/float.md) обтекание блока текстом

### height

- [`height`](./STYLES/height/height.md) высота
- [`max-height`](./STYLES/height/max-height.md) максимальная высота
- [`min-height`](./STYLES/height/min-height.md) минимальная высота

### list-style

- [`list-style`](./STYLES/list-style/list-style.md) маркеры списка
  - [`list-style-image`](./STYLES/list-style/list-style-image.md) маркеры в виде картинок
  - [`list-style-position`](./STYLES/list-style/list-style-position.md) положение маркеров
  - [`list-style-type`](./STYLES/list-style/list-style-type.md) тип маркеров

### margin

- [`margin`](./STYLES/margin/margin.md) внешние отступы
  - [`margin-top`](./STYLES/margin/margin-top.md) внешний отступ сверху
  - [`margin-right`](./STYLES/margin/margin-right.md) внешний отступ справа
  - [`margin-bottom`](./STYLES/margin/margin-bottom.md) внешний отступ снизу
  - [`margin-left`](./STYLES/margin/margin-left.md) внешний отступ слева

### margin-block

- [`margin-block`](./STYLES/margin/margin-block.md) внешние отступы блочная ось
  - [`margin-block-start`](./STYLES/margin/margin-block-start.md) внешний отступ начало блочной оси
  - [`margin-block-end`](./STYLES/margin/margin-block-end.md) внешний отступ конец блочной оси

### margin-inline

- [`margin-inline`](./STYLES/margin/margin-inline.md) внешние отступы строчная ось
  - [`margin-inline-start`](./STYLES/margin/margin-inline-start.md) внешний отступ начало строчной оси
  - [`margin-inline-end`](./STYLES/margin/margin-inline-end.md) внешний отступ конец строчной оси

### object

- [`object-fit`](./STYLES/object/object-fit.md) подстройка размера медиа
- [`object-position`](./STYLES/object/object-position.md) позиционирование медиа

### opacity

- [`opacity`](./STYLES/opacity/opacity.md) прозрачность

### outline

- [`outline`](./STYLES/outline/outline.md) обводка
  - [`outline-width`](./STYLES/outline/outline-width.md) толщина обводки
  - [`outline-style`](./STYLES/outline/outline-style.md) стиль обводки
  - [`outline-color`](./STYLES/outline/outline-color.md) цвет обводки
- [`outline-offset`](./STYLES/outline/outline-offset.md) отступ до обводки

### overflow

- [`overflow`](./STYLES/overflow/overflow.md) переполнение блока
  - [`overflow-x`](./STYLES/overflow/overflow-x.md) переполнение блока по горизонтали
  - [`overflow-y`](./STYLES/overflow/overflow-y.md) переполнение блока по вертикали
- [`overflow-wrap`](./STYLES/overflow/overflow-wrap.md) перенос слов

### padding

- [`padding`](./STYLES/padding/padding.md) внутренний отступ
  - [`padding-top`](./STYLES/padding/padding-top.md) внутренний отступ сверху
  - [`padding-right`](./STYLES/padding/padding-right.md) внутренний отступ справа
  - [`padding-bottom`](./STYLES/padding/padding-bottom.md) внутренний отступ снизу
  - [`padding-left`](./STYLES/padding/padding-left.md) внутренний отступ слева

### padding-block

- [`padding-block`](./STYLES/padding/padding-block.md) внутренние отступы блочная ось
  - [`padding-block-start`](./STYLES/padding/padding-block-start.md) внутренний отступ начало блочной оси
  - [`padding-block-end`](./STYLES/padding/padding-block-end.md) внутренний отступ конец блочной оси

### padding-inline

- [`padding-inline`](./STYLES/padding/padding-inline.md) внутренние отступы строчная ось
  - [`padding-inline-start`](./STYLES/padding/padding-inline-start.md) внутренний отступ начало строчной оси
  - [`padding-inline-end`](./STYLES/padding/padding-inline-end.md) внутренний отступ конец строчной оси

### pointer-events

- [`pointer-events`](./STYLES/pointer-events/pointer-events.md) реагирование на события

### position

- [`position`](./STYLES/position/position.md) позиционирование
  - [`top`](./STYLES/position/top.md) смещение сверху
  - [`right`](./STYLES/position/right.md) смещение справа
  - [`bottom`](./STYLES/position/bottom.md) смещение снизу
  - [`left`](./STYLES/position/left.md) смещение слева

### quotes

- [`quotes`](./STYLES/quotes/quotes.md) кавычки

### resize

- [`resize`](./STYLES/resize/resize.md) изменение размеров элемента

### scroll-behavior

- [`scroll-behavior`](./STYLES/scroll-behavior/scroll-behavior.md) плавная прокрутка

### stroke

- [`stroke`](./STYLES/stroke/stroke.md) цвет обводки svg

### text-align

- [`text-align`](./STYLES/text-align/text-align.md) горизонтальное выравнивание
- [`text-align-last`](./STYLES/text-align/text-align-last.md) выравнивание последней строки

### transform

- [`transform`](./STYLES/transform/transform.md) трансформация
- [`transform-origin`](./STYLES/transform/transform-origin.md) точка отсчета
- [`perspective`](./STYLES/transform/perspective.md) точка перспективы
- [`translate`](./STYLES/transform/translate.md) смещение
- [`scale`](./STYLES/transform/scale.md) увеличение
- [`rotate`](./STYLES/transform/rotate.md) вращение
- [`skew`](./STYLES/transform/skew.md) наклон
- [`matrix`](./STYLES/transform/matrix.md) матрица трансформации

### transition

- [`transition-property`](./STYLES/transition/transition-property.md) название свойства
- [`transition-duration`](./STYLES/transition/transition-duration.md) время анимации
- [`transition-timing-function`](./STYLES/transition/transition-timing-function.md) проигрывание анимации
