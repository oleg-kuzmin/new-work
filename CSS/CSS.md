<style>
  * {
    user-select: none;    
  }

  h1, h2 {
    scroll-margin: 60px;
  }
</style>

# Оглавление

- [ПСЕВДОЭЛЕМЕНТЫ](#псевдоэлементы)
- [ТЕОРИЯ](#теория)
- [BOOTSTRAP](#bootstrap)
- [SASS](#sass)
- [STYLES](#styles)
- [GRID](#grid)

## [ПСЕВДОЭЛЕМЕНТЫ](#оглавление)

- [`::marker`](./ПСЕВДОЭЛЕМЕНТЫ/marker.md) маркеры списка

## [ТЕОРИЯ](#оглавление)

- [`Вложенность селекторов`](<./ТЕОРИЯ/Вложенность селекторов.md>)
- [`Переменные`](./ТЕОРИЯ/Переменные.md)
- [`Grid`](./ТЕОРИЯ/Grid.md)

## [BOOTSTRAP](#оглавление)

- [`Установка`](./BOOTSTRAP/Установка.md)
- [`margin, padding`](<./BOOTSTRAP/margin, padding.md>)

## [SASS](#оглавление)

- [`Установка`](./SASS/Установка.md)
- [`Миксины`](./SASS/Миксины.md)
- [`Наследование и шаблоны`](<./SASS/Наследование и шаблоны.md>)
- [`Переменные`](./SASS/Переменные.md)
- [`Функции`](./SASS/Функции.md)

## [STYLES](#оглавление)

### all

- [`all`](./STYLES/ALL/all.md) все свойства

### animation

- [`animation`](./STYLES/ANIMATION/animation.md) анимация
  - [`animation-delay`](./STYLES/ANIMATION/animation-delay.md) задержка старта анимации
  - [`animation-direction`](./STYLES/ANIMATION/animation-direction.md) порядок воспроизведения
  - [`animation-duration`](./STYLES/ANIMATION/animation-duration.md) длительность одного цикла
  - [`animation-fill-mode`](./STYLES/ANIMATION/animation-fill-mode.md) стили до или после цикла
  - [`animation-iteration-count`](./STYLES/ANIMATION/animation-iteration-count.md) количество циклов
  - [`animation-name`](./STYLES/ANIMATION/animation-name.md) имя анимации
  - [`animation-play-state`](./STYLES/ANIMATION/animation-play-state.md) позволяет поставить на паузу
  - [`animation-timing-function`](./STYLES/ANIMATION/animation-timing-function.md) проигрывание кадров

### backface-visibility

- [`backface-visibility`](./STYLES/ALL/backface-visibility.md) обратная сторона элемента

### background

- [`background`](./STYLES/BACKGROUND/background.md) задний фон
  - [`background-attachment`](./STYLES/BACKGROUND/background-attachment.md) прокрутка фона
  - [`background-clip`](./STYLES/BACKGROUND/background-clip.md) блочная модель фона
  - [`background-color`](./STYLES/BACKGROUND/background-color.md) цвет фона
  - [`background-image`](./STYLES/BACKGROUND/background-image.md) картинка, градиент фона
  - [`background-position`](./STYLES/BACKGROUND/background-position.md) позиционирование фона
  - [`background-repeat`](./STYLES/BACKGROUND/background-repeat.md) повтор фона
  - [`background-size`](./STYLES/BACKGROUND/background-size.md) подстройка размера фона

### border

- [`border`](./STYLES/BORDER/border.md) границы
  - [`border-width`](./STYLES/BORDER/border-width.md) толщина границ
    - [`border-top-width`](./STYLES/BORDER/border-top-width.md) толщина границы сверху
    - [`border-right-width`](./STYLES/BORDER/border-right-width.md) толщина границы справа
    - [`border-bottom-width`](./STYLES/BORDER/border-bottom-width.md) толщина границы снизу
    - [`border-left-width`](./STYLES/BORDER/border-left-width.md) толщина границы слева
  - [`border-style`](./STYLES/BORDER/border-style.md) стиль границ
    - [`border-top-style`](./STYLES/BORDER/border-top-style.md) стиль границы сверху
    - [`border-right-style`](./STYLES/BORDER/border-right-style.md) стиль границы справа
    - [`border-bottom-style`](./STYLES/BORDER/border-bottom-style.md) стиль границы снизу
    - [`border-left-style`](./STYLES/BORDER/border-left-style.md) стиль границы слева
  - [`border-color`](./STYLES/BORDER/border-color.md) цвет границ
    - [`border-top-color`](./STYLES/BORDER/border-top-color.md) цвет границы сверху
    - [`border-right-color`](./STYLES/BORDER/border-right-color.md) цвет границы справа
    - [`border-bottom-color`](./STYLES/BORDER/border-bottom-color.md) цвет границы снизу
    - [`border-left-color`](./STYLES/BORDER/border-left-color.md) цвет границы слева

### border-top

- [`border-top`](./STYLES/BORDER/border-top.md) граница сверху
  - [`border-top-width`](./STYLES/BORDER/border-top-width.md) толщина границы сверху
  - [`border-top-style`](./STYLES/BORDER/border-top-style.md) стиль границы сверху
  - [`border-top-color`](./STYLES/BORDER/border-top-color.md) цвет границы сверху

### border-right

- [`border-right`](./STYLES/BORDER/border-right.md) граница справа
  - [`border-right-width`](./STYLES/BORDER/border-right-width.md) толщина границы справа
  - [`border-right-style`](./STYLES/BORDER/border-right-style.md) стиль границы справа
  - [`border-right-color`](./STYLES/BORDER/border-right-color.md) цвет границы справа

### border-bottom

- [`border-bottom`](./STYLES/BORDER/border-bottom.md) граница снизу
  - [`border-bottom-width`](./STYLES/BORDER/border-bottom-width.md) толщина границы снизу
  - [`border-bottom-style`](./STYLES/BORDER/border-bottom-style.md) стиль границы снизу
  - [`border-bottom-color`](./STYLES/BORDER/border-bottom-color.md) цвет границы снизу

### border-left

- [`border-left`](./STYLES/BORDER/border-left.md) граница слева
  - [`border-left-width`](./STYLES/BORDER/border-left-width.md) толщина границы слева
  - [`border-left-style`](./STYLES/BORDER/border-left-style.md) стиль границы слева
  - [`border-left-color`](./STYLES/BORDER/border-left-color.md) цвет границы слева

### border-block

- [`border-block`](./STYLES/BORDER/border-block.md) границы блочная ось
  - [`border-block-width`](./STYLES/BORDER/border-block-width.md) толщина границ
    - [`border-block-start-width`](./STYLES/BORDER/border-block-start-width.md) толщина первой границы
    - [`border-block-end-width`](./STYLES/BORDER/border-block-end-width.md) толщина второй границы
  - [`border-block-style`](./STYLES/BORDER/border-block-style.md) стиль границ
    - [`border-block-start-style`](./STYLES/BORDER/border-block-start-style.md) стиль первой границы
    - [`border-block-end-style`](./STYLES/BORDER/border-block-end-style.md) стиль второй границы
  - [`border-block-color`](./STYLES/BORDER/border-block-color.md) цвет границ
    - [`border-block-start-color`](./STYLES/BORDER/border-block-start-color.md) цвет первой границы
    - [`border-block-end-color`](./STYLES/BORDER/border-block-end-color.md) цвет второй границы

### border-block-start

- [`border-block-start`](./STYLES/BORDER/border-block-start.md) первая границы блочной оси
  - [`border-block-start-width`](./STYLES/BORDER/border-block-start-width.md) толщина первой границы
  - [`border-block-start-style`](./STYLES/BORDER/border-block-start-style.md) стиль первой границы
  - [`border-block-start-color`](./STYLES/BORDER/border-block-start-color.md) цвет первой границы

### border-block-end

- [`border-block-end`](./STYLES/BORDER/border-block-end.md) вторая граница блочной оси
  - [`border-block-end-width`](./STYLES/BORDER/border-block-end-width.md) толщина второй границы
  - [`border-block-end-style`](./STYLES/BORDER/border-block-end-style.md) стиль второй границы
  - [`border-block-end-color`](./STYLES/BORDER/border-block-end-color.md) цвет второй границы

### border-inline

- [`border-inline`](./STYLES/BORDER/border-inline.md) границы строчная ось
  - [`border-inline-width`](./STYLES/BORDER/border-inline-width.md) толщина границ
    - [`border-inline-start-width`](./BORDER/border-inline-start-width.md) толщина первой границы
    - [`border-inline-end-width`](./STYLES/BORDER/border-inline-end-width.md) толщина второй границы
  - [`border-inline-style`](./STYLES/BORDER/border-inline-style.md) стиль границ
    - [`border-inline-start-style`](./STYLES/BORDER/border-inline-start-style.md) стиль первой границы
    - [`border-inline-end-style`](./STYLES/BORDER/border-inline-end-style.md) стиль второй границы
  - [`border-inline-color`](./STYLES/BORDER/border-inline-color.md) цвет границ
    - [`border-inline-start-color`](./STYLES/BORDER/border-inline-start-color.md) цвет первой границы
    - [`border-inline-end-color`](./STYLES/BORDER/border-inline-end-color.md) цвет второй границы

### border-inline-start

- [`border-inline-start`](./STYLES/BORDER/border-inline-start.md) первая границы строчной оси
  - [`border-inline-start-width`](./BORDER/border-inline-start-width.md) толщина первой границы
  - [`border-inline-start-style`](./STYLES/BORDER/border-inline-start-style.md) стиль первой границы
  - [`border-inline-start-color`](./STYLES/BORDER/border-inline-start-color.md) цвет первой границы

### border-inline-end

- [`border-inline-end`](./STYLES/BORDER/border-inline-end.md) вторая границы строчной оси
  - [`border-inline-end-width`](./STYLES/BORDER/border-inline-end-width.md) толщина второй границы
  - [`border-inline-end-style`](./STYLES/BORDER/border-inline-end-style.md) стиль второй границы
  - [`border-inline-end-color`](./STYLES/BORDER/border-inline-end-color.md) цвет второй границы

### border-image

- [`border-image`](./STYLES/BORDER/border-image.md) изображение границы

### border-radius

- [`border-radius`](./STYLES/BORDER/border-radius.md) скругление границ
  - [`border-bottom-left-radius`](./STYLES/BORDER/border-bottom-left-radius.md) скругление границы снизу слева
  - [`border-bottom-right-radius`](./STYLES/BORDER/border-bottom-right-radius.md) скругление границы снизу справа
  - [`border-top-left-radius`](./STYLES/BORDER/border-top-left-radius.md) скругление границы сверху слева
  - [`border-top-right-radius`](./STYLES/BORDER/border-top-right-radius.md) скругление границы сверху справа

### border-collapse

- [`border-collapse`](./STYLES/ALL/border-collapse.md) смежные границы ячеек

### border-spacing

- [`border-spacing`](./STYLES/ALL/border-spacing.md) отступ между ячейками таблицы

### box

- [`box-shadow`](./STYLES/ALL/box-shadow.md) тень блока
- [`box-sizing`](./STYLES/ALL/box-sizing.md) размер блочной модели

### caption-side

- [`caption-side`](./STYLES/ALL/caption-side.md) положение подписи таблицы

### clip-path

- [`clip-path`](./STYLES/ALL/clip-path.md) видимая область

### columns

- [`columns`](./STYLES/ALL/columns.md) колонки
  - [`column-count`](./STYLES/ALL/column-count.md) количество колонок
  - [`column-width`](./STYLES/ALL/column-width.md) ширина колонок
- [`column-gap`](./STYLES/ALL/column-gap.md) отступ между колонками

### display

- [`display`](./STYLES/ALL/display.md) тип отображения

### fill

- [`fill`](./STYLES/ALL/fill.md) цвет заливки svg

### float

- [`float`](./STYLES/ALL/float.md) обтекание блока текстом

### height

- [`height`](./STYLES/ALL/height.md) высота
- [`max-height`](./STYLES/ALL/max-height.md) максимальная высота
- [`min-height`](./STYLES/ALL/min-height.md) минимальная высота

### list-style

- [`list-style`](./STYLES/LIST-STYLE/list-style.md) маркеры списка
  - [`list-style-image`](./STYLES/LIST-STYLE/list-style-image.md) маркеры в виде картинок
  - [`list-style-position`](./STYLES/LIST-STYLE/list-style-position.md) положение маркеров
  - [`list-style-type`](./STYLES/LIST-STYLE/list-style-type.md) тип маркеров

### margin

- [`margin`](./STYLES/MARGIN/margin.md) внешние отступы
  - [`margin-top`](./STYLES/MARGIN/margin-top.md) внешний отступ сверху
  - [`margin-right`](./STYLES/MARGIN/margin-right.md) внешний отступ справа
  - [`margin-bottom`](./STYLES/MARGIN/margin-bottom.md) внешний отступ снизу
  - [`margin-left`](./STYLES/MARGIN/margin-left.md) внешний отступ слева

### margin-block

- [`margin-block`](./STYLES/MARGIN/margin-block.md) внешние отступы блочная ось
  - [`margin-block-start`](./STYLES/MARGIN/margin-block-start.md) внешний отступ начало блочной оси
  - [`margin-block-end`](./STYLES/MARGIN/margin-block-end.md) внешний отступ конец блочной оси

### margin-inline

- [`margin-inline`](./STYLES/MARGIN/margin-inline.md) внешние отступы строчная ось
  - [`margin-inline-start`](./STYLES/MARGIN/margin-inline-start.md) внешний отступ начало строчной оси
  - [`margin-inline-end`](./STYLES/MARGIN/margin-inline-end.md) внешний отступ конец строчной оси

### object

- [`object-fit`](./STYLES/ALL/object-fit.md) подстройка размера медиа
- [`object-position`](./STYLES/ALL/object-position.md) позиционирование медиа

### resize

- [`resize`](./STYLES/ALL/resize.md) изменений размеров элемента

### text-align

- [`text-align`](./STYLES/ALL/text-align.md) горизонтальное выравнивание
- [`text-align-last`](./STYLES/ALL/text-align-last.md) выравнивание последней строки

## [GRID](#оглавление)

### grid-container

- [`grid-template`](./GRID/grid-template.md) явные строки и колонки
  - [`grid-template-rows`](./GRID/grid-template-rows.md) явные строки
  - [`grid-template-columns`](./GRID/grid-template-columns.md) явные колонки
  - [`grid-template-areas`](./GRID/grid-template-areas.md) грид-области
- [`gap`](./GRID/gap.md) отступы
  - [`row-gap`](./GRID/row-gap.md) отступы между строками
  - [`column-gap`](./GRID/column-gap.md) отступы между колонками
- [`grid-auto-flow`](./GRID/grid-auto-flow.md) поток элементов
- [`grid-auto-rows`](./GRID/grid-auto-rows.md) неявные строки
- [`grid-auto-columns`](./GRID/grid-auto-columns.md) неявные колонки
- [`place-items`](./GRID/place-items.md) выравнивание контента внутри ячеек
  - [`align-items`](./GRID/align-items.md) выравнивание контента внутри ячеек по вертикали
  - [`justify-items`](./GRID/justify-items.md) выравнивание контента внутри ячеек по горизонтали
- [`place-items`](./GRID/place-content.md) выравнивание элементов
  - [`justify-content`](./GRID/justify-content.md) выравнивание элементов по горизонтали
  - [`align-content`](./GRID/align-content.md) выравнивание элементов по вертикали

### grid-item

- [`grid-column`](./GRID/grid-column.md) расположение элемента по горизонтали
  - [`grid-column-start`](./GRID/grid-column-start.md) начало элемента по горизонтали
  - [`grid-column-end`](./GRID/grid-column-end.md) конец элемента по горизонтали
- [`grid-row`](./GRID/grid-column.md) расположение элемента по вертикали
  - [`grid-row-start`](./GRID/grid-row-start.md) начало элемента по вертикали
  - [`grid-row-end`](./GRID/grid-row-end.md) конец элемента по вертикали
- [`grid-area`](./GRID/grid-area.md) название грид-области
- [`place-self`](./GRID/place-self.md) выравнивание контента внутри ячейки
  - [`align-self`](./GRID/align-self.md) выравнивание контента внутри ячейки по вертикали
  - [`justify-self`](./GRID/justify-self.md) выравнивание контента внутри ячейки по горизонтали
- [`order`](./GRID/order.md) порядок отображения элемента