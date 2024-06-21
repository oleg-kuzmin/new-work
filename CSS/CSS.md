# CSS

- [Псевдоэлементы](#псевдоэлементы)
- [Теория](#теория)
- [Bootstrap](#bootstrap)
- [Grid](#grid)
- [Sass](#sass)
- [Styles](#styles)

## [Псевдоэлементы](#оглавление)

- [`::marker`](./Псевдоэлементы/marker.md) маркеры списка

## [Теория](#оглавление)

- [`Вложенность селекторов`](<./Теория/Вложенность селекторов.md>)
- [`Переменные`](./Теория/Переменные.md)
- [`Grid`](./Теория/Grid.md)

## [Bootstrap](#оглавление)

- [`Установка`](./Bootstrap/Установка.md)
- [`margin, padding`](<./Bootstrap/margin, padding.md>)

## [Grid](#оглавление)

### grid-container

- [`gap`](./Grid/gap.md) отступы
  - [`column-gap`](./Grid/column-gap.md) отступы между колонками
  - [`row-gap`](./Grid/row-gap.md) отступы между строками
- [`grid-auto-columns`](./Grid/grid-auto-columns.md) неявные колонки
- [`grid-auto-flow`](./Grid/grid-auto-flow.md) поток элементов
- [`grid-auto-rows`](./Grid/grid-auto-rows.md) неявные строки
- [`grid-template`](./Grid/grid-template.md) явные строки и колонки
  - [`grid-template-areas`](./Grid/grid-template-areas.md) грид-области
  - [`grid-template-columns`](./Grid/grid-template-columns.md) явные колонки
  - [`grid-template-rows`](./Grid/grid-template-rows.md) явные строки
- [`place-content`](./Grid/place-content.md) выравнивание элементов
  - [`align-content`](./Grid/align-content.md) выравнивание элементов по вертикали
  - [`justify-content`](./Grid/justify-content.md) выравнивание элементов по горизонтали
- [`place-items`](./Grid/place-items.md) выравнивание контента внутри ячеек
  - [`align-items`](./Grid/align-items.md) выравнивание контента внутри ячеек по вертикали
  - [`justify-items`](./Grid/justify-items.md) выравнивание контента внутри ячеек по горизонтали

### grid-item

- [`grid-area`](./Grid/grid-area.md) название грид-области
- [`grid-column`](./Grid/grid-column.md) расположение элемента по горизонтали
  - [`grid-column-start`](./Grid/grid-column-start.md) начало элемента по горизонтали
  - [`grid-column-end`](./Grid/grid-column-end.md) конец элемента по горизонтали
- [`grid-row`](./Grid/grid-column.md) расположение элемента по вертикали
  - [`grid-row-start`](./Grid/grid-row-start.md) начало элемента по вертикали
  - [`grid-row-end`](./Grid/grid-row-end.md) конец элемента по вертикали
- [`order`](./Grid/order.md) порядок отображения элемента
- [`place-self`](./Grid/place-self.md) выравнивание контента внутри ячейки
  - [`align-self`](./Grid/align-self.md) выравнивание контента внутри ячейки по вертикали
  - [`justify-self`](./Grid/justify-self.md) выравнивание контента внутри ячейки по горизонтали

## [Sass](#оглавление)

- [`Миксины`](./Sass/Миксины.md)
- [`Наследование и шаблоны`](<./Sass/Наследование и шаблоны.md>)
- [`Переменные`](./Sass/Переменные.md)
- [`Установка`](./Sass/Установка.md)
- [`Функции`](./Sass/Функции.md)

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

- [`border`](./Styles/border.md) границы
  - [`border-width`](./Styles/border-width.md) толщина границ
    - [`border-bottom-width`](./Styles/border-bottom-width.md) толщина границы снизу
    - [`border-left-width`](./Styles/border-left-width.md) толщина границы слева
    - [`border-right-width`](./Styles/border-right-width.md) толщина границы справа
    - [`border-top-width`](./Styles/border-top-width.md) толщина границы сверху
  - [`border-style`](./Styles/border-style.md) стиль границ
    - [`border-bottom-style`](./Styles/border-bottom-style.md) стиль границы снизу
    - [`border-left-style`](./Styles/border-left-style.md) стиль границы слева
    - [`border-right-style`](./Styles/border-right-style.md) стиль границы справа
    - [`border-top-style`](./Styles/border-top-style.md) стиль границы сверху
  - [`border-color`](./Styles/border-color.md) цвет границ
    - [`border-bottom-color`](./Styles/border-bottom-color.md) цвет границы снизу
    - [`border-left-color`](./Styles/border-left-color.md) цвет границы слева
    - [`border-right-color`](./Styles/border-right-color.md) цвет границы справа
    - [`border-top-color`](./Styles/border-top-color.md) цвет границы сверху

### border-top

- [`border-top`](./Styles/border-top.md) граница сверху
  - [`border-top-width`](./Styles/border-top-width.md) толщина границы сверху
  - [`border-top-style`](./Styles/border-top-style.md) стиль границы сверху
  - [`border-top-color`](./Styles/border-top-color.md) цвет границы сверху

### border-right

- [`border-right`](./Styles/border-right.md) граница справа
  - [`border-right-width`](./Styles/border-right-width.md) толщина границы справа
  - [`border-right-style`](./Styles/border-right-style.md) стиль границы справа
  - [`border-right-color`](./Styles/border-right-color.md) цвет границы справа

### border-bottom

- [`border-bottom`](./Styles/border-bottom.md) граница снизу
  - [`border-bottom-width`](./Styles/border-bottom-width.md) толщина границы снизу
  - [`border-bottom-style`](./Styles/border-bottom-style.md) стиль границы снизу
  - [`border-bottom-color`](./Styles/border-bottom-color.md) цвет границы снизу

### border-left

- [`border-left`](./Styles/border-left.md) граница слева
  - [`border-left-width`](./Styles/border-left-width.md) толщина границы слева
  - [`border-left-style`](./Styles/border-left-style.md) стиль границы слева
  - [`border-left-color`](./Styles/border-left-color.md) цвет границы слева

### border-block

- [`border-block`](./Styles/border-block.md) границы блочная ось
  - [`border-block-width`](./Styles/border-block-width.md) толщина границ
    - [`border-block-start-width`](./Styles/border-block-start-width.md) толщина первой границы
    - [`border-block-end-width`](./Styles/border-block-end-width.md) толщина второй границы
  - [`border-block-style`](./Styles/border-block-style.md) стиль границ
    - [`border-block-start-style`](./Styles/border-block-start-style.md) стиль первой границы
    - [`border-block-end-style`](./Styles/border-block-end-style.md) стиль второй границы
  - [`border-block-color`](./Styles/border-block-color.md) цвет границ
    - [`border-block-start-color`](./Styles/border-block-start-color.md) цвет первой границы
    - [`border-block-end-color`](./Styles/border-block-end-color.md) цвет второй границы

### border-block-start

- [`border-block-start`](./Styles/border-block-start.md) первая границы блочной оси
  - [`border-block-start-width`](./Styles/border-block-start-width.md) толщина первой границы
  - [`border-block-start-style`](./Styles/border-block-start-style.md) стиль первой границы
  - [`border-block-start-color`](./Styles/border-block-start-color.md) цвет первой границы

### border-block-end

- [`border-block-end`](./Styles/border-block-end.md) вторая граница блочной оси
  - [`border-block-end-width`](./Styles/border-block-end-width.md) толщина второй границы
  - [`border-block-end-style`](./Styles/border-block-end-style.md) стиль второй границы
  - [`border-block-end-color`](./Styles/border-block-end-color.md) цвет второй границы

### border-inline

- [`border-inline`](./Styles/border-inline.md) границы строчная ось
  - [`border-inline-width`](./Styles/border-inline-width.md) толщина границ
    - [`border-inline-start-width`](./Styles/border-inline-start-width.md) толщина первой границы
    - [`border-inline-end-width`](./Styles/border-inline-end-width.md) толщина второй границы
  - [`border-inline-style`](./Styles/border-inline-style.md) стиль границ
    - [`border-inline-start-style`](./Styles/border-inline-start-style.md) стиль первой границы
    - [`border-inline-end-style`](./Styles/border-inline-end-style.md) стиль второй границы
  - [`border-inline-color`](./Styles/border-inline-color.md) цвет границ
    - [`border-inline-start-color`](./Styles/border-inline-start-color.md) цвет первой границы
    - [`border-inline-end-color`](./Styles/border-inline-end-color.md) цвет второй границы

### border-inline-start

- [`border-inline-start`](./Styles/border-inline-start.md) первая границы строчной оси
  - [`border-inline-start-width`](./Styles/border-inline-start-width.md) толщина первой границы
  - [`border-inline-start-style`](./Styles/border-inline-start-style.md) стиль первой границы
  - [`border-inline-start-color`](./Styles/border-inline-start-color.md) цвет первой границы

### border-inline-end

- [`border-inline-end`](./Styles/border-inline-end.md) вторая границы строчной оси
  - [`border-inline-end-width`](./Styles/border-inline-end-width.md) толщина второй границы
  - [`border-inline-end-style`](./Styles/border-inline-end-style.md) стиль второй границы
  - [`border-inline-end-color`](./Styles/border-inline-end-color.md) цвет второй границы

### border-image

- [`border-image`](./Styles/border-image.md) изображение границы

### border-radius

- [`border-radius`](./Styles/border-radius.md) скругление границ
  - [`border-bottom-left-radius`](./Styles/border-bottom-left-radius.md) скругление границы снизу слева
  - [`border-bottom-right-radius`](./Styles/border-bottom-right-radius.md) скругление границы снизу справа
  - [`border-top-left-radius`](./Styles/border-top-left-radius.md) скругление границы сверху слева
  - [`border-top-right-radius`](./Styles/border-top-right-radius.md) скругление границы сверху справа

### border-collapse

- [`border-collapse`](./Styles/border-collapse.md) смежные границы ячеек

### border-spacing

- [`border-spacing`](./Styles/border-spacing.md) отступ между ячейками таблицы

### box

- [`box-shadow`](./Styles/box-shadow.md) тень блока
- [`box-sizing`](./Styles/box-sizing.md) размер блочной модели

### caption-side

- [`caption-side`](./Styles/caption-side.md) положение подписи таблицы

### clip-path

- [`clip-path`](./Styles/clip-path.md) видимая область

### color

- [`color`](./Styles/color.md) цвет текста

### columns

- [`columns`](./Styles/columns.md) колонки
  - [`column-count`](./Styles/column-count.md) количество колонок
  - [`column-width`](./Styles/column-width.md) ширина колонок
- [`column-gap`](./Styles/column-gap.md) отступ между колонками

### display

- [`display`](./Styles/display.md) тип отображения

### fill

- [`fill`](./Styles/fill.md) цвет заливки svg

### float

- [`float`](./Styles/float.md) обтекание блока текстом

### height

- [`height`](./Styles/height.md) высота
- [`max-height`](./Styles/max-height.md) максимальная высота
- [`min-height`](./Styles/min-height.md) минимальная высота

### list-style

- [`list-style`](./Styles/list-style.md) маркеры списка
  - [`list-style-image`](./Styles/list-style-image.md) маркеры в виде картинок
  - [`list-style-position`](./Styles/list-style-position.md) положение маркеров
  - [`list-style-type`](./Styles/list-style-type.md) тип маркеров

### margin

- [`margin`](./Styles/margin.md) внешние отступы
  - [`margin-top`](./Styles/margin-top.md) внешний отступ сверху
  - [`margin-right`](./Styles/margin-right.md) внешний отступ справа
  - [`margin-bottom`](./Styles/margin-bottom.md) внешний отступ снизу
  - [`margin-left`](./Styles/margin-left.md) внешний отступ слева

### margin-block

- [`margin-block`](./Styles/margin-block.md) внешние отступы блочная ось
  - [`margin-block-start`](./Styles/margin-block-start.md) внешний отступ начало блочной оси
  - [`margin-block-end`](./Styles/margin-block-end.md) внешний отступ конец блочной оси

### margin-inline

- [`margin-inline`](./Styles/margin-inline.md) внешние отступы строчная ось
  - [`margin-inline-start`](./Styles/margin-inline-start.md) внешний отступ начало строчной оси
  - [`margin-inline-end`](./Styles/margin-inline-end.md) внешний отступ конец строчной оси

### object

- [`object-fit`](./Styles/object-fit.md) подстройка размера медиа
- [`object-position`](./Styles/object-position.md) позиционирование медиа

### opacity

- [`opacity`](./Styles/opacity.md) прозрачность

### outline

- [`outline`](./Styles/outline.md) обводка
  - [`outline-width`](./Styles/outline-width.md) толщина обводки
  - [`outline-style`](./Styles/outline-style.md) стиль обводки
  - [`outline-color`](./Styles/outline-color.md) цвет обводки
- [`outline-offset`](./Styles/outline-offset.md) отступ до обводки

### overflow

- [`overflow`](./Styles/overflow.md) переполнение блока
  - [`overflow-x`](./Styles/overflow-x.md) переполнение блока по горизонтали
  - [`overflow-y`](./Styles/overflow-y.md) переполнение блока по вертикали
- [`overflow-wrap`](./Styles/overflow-wrap.md) перенос слов

### padding

- [`padding`](./Styles/padding.md) внутренний отступ
  - [`padding-top`](./Styles/padding-top.md) внутренний отступ сверху
  - [`padding-right`](./Styles/padding-right.md) внутренний отступ справа
  - [`padding-bottom`](./Styles/padding-bottom.md) внутренний отступ снизу
  - [`padding-left`](./Styles/padding-left.md) внутренний отступ слева

### padding-block

- [`padding-block`](./Styles/padding-block.md) внутренние отступы блочная ось
  - [`padding-block-start`](./Styles/padding-block-start.md) внутренний отступ начало блочной оси
  - [`padding-block-end`](./Styles/padding-block-end.md) внутренний отступ конец блочной оси

### padding-inline

- [`padding-inline`](./Styles/padding-inline.md) внутренние отступы строчная ось
  - [`padding-inline-start`](./Styles/padding-inline-start.md) внутренний отступ начало строчной оси
  - [`padding-inline-end`](./Styles/padding-inline-end.md) внутренний отступ конец строчной оси

### pointer-events

- [`pointer-events`](./Styles/pointer-events.md) реагирование на события

### position

- [`position`](./Styles/position.md) позиционирование
  - [`top`](./Styles/top.md) смещение сверху
  - [`right`](./Styles/right.md) смещение справа
  - [`bottom`](./Styles/bottom.md) смещение снизу
  - [`left`](./Styles/left.md) смещение слева

### quotes

- [`quotes`](./Styles/quotes.md) кавычки

### resize

- [`resize`](./Styles/resize.md) изменение размеров элемента

### scroll-behavior

- [`scroll-behavior`](./Styles/scroll-behavior.md) плавная прокрутка

### stroke

- [`stroke`](./Styles/stroke.md) цвет обводки svg

### text-align

- [`text-align`](./Styles/text-align.md) горизонтальное выравнивание
- [`text-align-last`](./Styles/text-align-last.md) выравнивание последней строки

### transform

- [`matrix`](./Styles/matrix.md) матрица трансформации
- [`perspective`](./Styles/perspective.md) точка перспективы
- [`rotate`](./Styles/rotate.md) вращение
- [`scale`](./Styles/scale.md) увеличение
- [`skew`](./Styles/skew.md) наклон
- [`transform-origin`](./Styles/transform-origin.md) точка отсчета
- [`transform`](./Styles/transform.md) трансформация
- [`translate`](./Styles/translate.md) смещение

### transition

- [`transition`](./Styles/transition.md) переход
  - [`transition-property`](./Styles/transition-property.md) название свойства
  - [`transition-duration`](./Styles/transition-duration.md) длительность перехода
  - [`transition-timing-function`](./Styles/transition-timing-function.md) проигрывание перехода
  - [`transition-delay`](./Styles/transition-delay.md) задержка до старта

### vertical-align

- [`vertical-align`](./Styles/vertical-align.md) вертикальное выравнивание inline-элементов

### visibility

- [`visibility`](./Styles/visibility.md) видимость

### width

- [`width`](./Styles/width.md) ширина
- [`max-width`](./Styles/max-width.md) максимальная ширина
- [`min-width`](./Styles/min-width.md) минимальная ширина

### writing-mode

- [`writing-mode`](./Styles/writing-mode.md) направление потока

### z-index

- [`z-index`](./Styles/z-index.md) порядок наложения элементов

<style>
  * {
    user-select: none;    
  }

  h1, h2 {
    scroll-margin: 25vh;
  }
</style>
