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
- [ANIMATION](#animation)
- [BACKGROUND](#background)
- [BORDER](#border)
- [LIST-STYLE](#list-style)
- [MARGIN](#margin)
- [STYLES](#styles)

## [ПСЕВДОЭЛЕМЕНТЫ](#оглавление)

- [`::marker`](./ПСЕВДОЭЛЕМЕНТЫ/marker.md) маркеры списка

## [ТЕОРИЯ](#оглавление)

- [`Вложенность селекторов`](<./ТЕОРИЯ/Вложенность селекторов.md>)
- [`Переменные`](./ТЕОРИЯ/Переменные.md)

## [BOOTSTRAP](#оглавление)

- [`Установка`](./BOOTSTRAP/Установка.md)
- [`margin, padding`](<./BOOTSTRAP/margin, padding.md>)

## [SASS](#оглавление)

- [`Установка`](./SASS/Установка.md)
- [`Миксины`](./SASS/Миксины.md)
- [`Наследование и шаблоны`](<./SASS/Наследование и шаблоны.md>)
- [`Переменные`](./SASS/Переменные.md)
- [`Функции`](./SASS/Функции.md)

## [ANIMATION](#оглавление)

- [`animation`](./STYLES/ANIMATION/animation.md) анимация
  - [`animation-delay`](./STYLES/ANIMATION/animation-delay.md) задержка старта анимации
  - [`animation-direction`](./STYLES/ANIMATION/animation-direction.md) порядок воспроизведения
  - [`animation-duration`](./STYLES/ANIMATION/animation-duration.md) длительность одного цикла
  - [`animation-fill-mode`](./STYLES/ANIMATION/animation-fill-mode.md) стили до или после цикла
  - [`animation-iteration-count`](./STYLES/ANIMATION/animation-iteration-count.md) количество циклов
  - [`animation-name`](./STYLES/ANIMATION/animation-name.md) имя анимации
  - [`animation-play-state`](./STYLES/ANIMATION/animation-play-state.md) позволяет поставить на паузу
  - [`animation-timing-function`](./STYLES/ANIMATION/animation-timing-function.md) проигрывание кадров

## [BACKGROUND](#оглавление)

- [`background`](./STYLES/BACKGROUND/background.md) задний фон
  - [`background-attachment`](./STYLES/BACKGROUND/background-attachment.md) прокрутка фона
  - [`background-clip`](./STYLES/BACKGROUND/background-clip.md) блочная модель фона
  - [`background-color`](./STYLES/BACKGROUND/background-color.md) цвет фона
  - [`background-image`](./STYLES/BACKGROUND/background-image.md) картинка, градиент фона
  - [`background-position`](./STYLES/BACKGROUND/background-position.md) позиционирование фона
  - [`background-repeat`](./STYLES/BACKGROUND/background-repeat.md) повтор фона
  - [`background-size`](./STYLES/BACKGROUND/background-size.md) размер фона

## [BORDER](#оглавление)

- [`border`](./STYLES/border.md) границы
  - [`border-width`](./STYLES/border-width.md) толщина границ
    - [`border-top-width`](./STYLES/border-top-width.md) толщина границы сверху
    - [`border-right-width`](./STYLES/border-right-width.md) толщина границы справа
    - [`border-bottom-width`](./STYLES/border-bottom-width.md) толщина границы снизу
    - [`border-left-width`](./STYLES/border-left-width.md) толщина границы слева
  - [`border-style`](./STYLES/border-style.md) стиль границ
    - [`border-top-style`](./STYLES/border-top-style.md) стиль границы сверху
    - [`border-right-style`](./STYLES/border-right-style.md) стиль границы справа
    - [`border-bottom-style`](./STYLES/border-bottom-style.md) стиль границы снизу
    - [`border-left-style`](./STYLES/border-left-style.md) стиль границы слева
  - [`border-color`](./STYLES/border-color.md) цвет границ
    - [`border-top-color`](./STYLES/border-top-color.md) цвет границы сверху
    - [`border-right-color`](./STYLES/border-right-color.md) цвет границы справа
    - [`border-bottom-color`](./STYLES/border-bottom-color.md) цвет границы снизу
    - [`border-left-color`](./STYLES/border-left-color.md) цвет границы слева
- [`border-top`](./STYLES/border-top.md) граница сверху
  - [`border-top-width`](./STYLES/border-top-width.md) толщина границы сверху
  - [`border-top-style`](./STYLES/border-top-style.md) стиль границы сверху
  - [`border-top-color`](./STYLES/border-top-color.md) цвет границы сверху
- [`border-right`](./STYLES/border-right.md) граница справа
  - [`border-right-width`](./STYLES/border-right-width.md) толщина границы справа
  - [`border-right-style`](./STYLES/border-right-style.md) стиль границы справа
  - [`border-right-color`](./STYLES/border-right-color.md) цвет границы справа
- [`border-bottom`](./STYLES/border-bottom.md) граница снизу
  - [`border-bottom-width`](./STYLES/border-bottom-width.md) толщина границы снизу
  - [`border-bottom-style`](./STYLES/border-bottom-style.md) стиль границы снизу
  - [`border-bottom-color`](./STYLES/border-bottom-color.md) цвет границы снизу
- [`border-left`](./STYLES/border-left.md) граница слева
  - [`border-left-width`](./STYLES/border-left-width.md) толщина границы слева
  - [`border-left-style`](./STYLES/border-left-style.md) стиль границы слева
  - [`border-left-color`](./STYLES/border-left-color.md) цвет границы слева
- [`border-block`](./STYLES/border-block.md) границы блочная ось
  - [`border-block-width`](./STYLES/border-block-width.md) толщина границ
    - [`border-block-start-width`](./STYLES/border-block-start-width.md) толщина первой границы
    - [`border-block-end-width`](./STYLES/border-block-end-width.md) толщина второй границы
  - [`border-block-style`](./STYLES/border-block-style.md) стиль границ
    - [`border-block-start-style`](./STYLES/border-block-start-style.md) стиль первой границы
    - [`border-block-end-style`](./STYLES/border-block-end-style.md) стиль второй границы
  - [`border-block-color`](./STYLES/border-block-color.md) цвет границ
    - [`border-block-start-color`](./STYLES/border-block-start-color.md) цвет первой границы
    - [`border-block-end-color`](./STYLES/border-block-end-color.md) цвет второй границы
- [`border-block-start`](./STYLES/border-block-start.md) первая границы блочной оси
  - [`border-block-start-width`](./STYLES/border-block-start-width.md) толщина первой границы
  - [`border-block-start-style`](./STYLES/border-block-start-style.md) стиль первой границы
  - [`border-block-start-color`](./STYLES/border-block-start-color.md) цвет первой границы
- [`border-block-end`](./STYLES/border-block-end.md) вторая граница блочной оси
  - [`border-block-end-width`](./STYLES/border-block-end-width.md) толщина второй границы
  - [`border-block-end-style`](./STYLES/border-block-end-style.md) стиль второй границы
  - [`border-block-end-color`](./STYLES/border-block-end-color.md) цвет второй границы
- [`border-inline`](./STYLES/border-inline.md) границы строчная ось
  - [`border-inline-width`](./STYLES/border-inline-width.md) толщина границ
    - [`border-inline-start-width`](./border-inline-start-width.md) толщина первой границы
    - [`border-inline-end-width`](./STYLES/border-inline-end-width.md) толщина второй границы
  - [`border-inline-style`](./STYLES/border-inline-style.md) стиль границ
    - [`border-inline-start-style`](./STYLES/border-inline-start-style.md) стиль первой границы
    - [`border-inline-end-style`](./STYLES/border-inline-end-style.md) стиль второй границы
  - [`border-inline-color`](./STYLES/border-inline-color.md) цвет границ
    - [`border-inline-start-color`](./STYLES/border-inline-start-color.md) цвет первой границы
    - [`border-inline-end-color`](./STYLES/border-inline-end-color.md) цвет второй границы
- [`border-inline-start`](./STYLES/border-inline-start.md) первая границы строчной оси
  - [`border-inline-start-width`](./border-inline-start-width.md) толщина первой границы
  - [`border-inline-start-style`](./STYLES/border-inline-start-style.md) стиль первой границы
  - [`border-inline-start-color`](./STYLES/border-inline-start-color.md) цвет первой границы
- [`border-inline-end`](./STYLES/border-inline-end.md) вторая границы строчной оси
  - [`border-inline-end-width`](./STYLES/border-inline-end-width.md) толщина второй границы
  - [`border-inline-end-style`](./STYLES/border-inline-end-style.md) стиль второй границы
  - [`border-inline-end-color`](./STYLES/border-inline-end-color.md) цвет второй границы
- [`border-image`](./STYLES/border-image.md) изображение границы
- [`border-radius`](./STYLES/border-radius.md) скругление границ
  - [`border-bottom-left-radius`](./STYLES/border-bottom-left-radius.md) скругление границы снизу слева
  - [`border-bottom-right-radius`](./STYLES/border-bottom-right-radius.md) скругление границы снизу справа
  - [`border-top-left-radius`](./STYLES/border-top-left-radius.md) скругление границы сверху слева
  - [`border-top-right-radius`](./STYLES/border-top-right-radius.md) скругление границы сверху справа

## [LIST-STYLE](#оглавление)

- [`list-style`](./STYLES/LIST-STYLE/list-style.md) маркеры списка
  - [`list-style-image`](./STYLES/LIST-STYLE/list-style-image.md) маркеры в виде картинок
  - [`list-style-position`](./STYLES/LIST-STYLE/list-style-position.md) положение маркеров
  - [`list-style-type`](./STYLES/LIST-STYLE/list-style-type.md) тип маркеров

## [MARGIN](#оглавление)

- [`margin`](./STYLES/margin.md) внешние отступы
  - [`margin-top`](./STYLES/margin-top.md) внешний отступ сверху
  - [`margin-right`](./STYLES/margin-right.md) внешний отступ справа
  - [`margin-bottom`](./STYLES/margin-bottom.md) внешний отступ снизу
  - [`margin-left`](./STYLES/margin-left.md) внешний отступ слева

## [STYLES](#оглавление)

- [`all`](./STYLES/all.md) все свойства
- [`backface-visibility`](./STYLES/backface-visibility.md) обратная сторона элемента
- [`border-collapse`](./STYLES/border-collapse.md) смежные границы ячеек
- [`border-spacing`](./STYLES/border-spacing.md) отступ между ячейками таблицы
- [`box-shadow`](./STYLES/box-shadow.md) тень блока
- [`box-sizing`](./STYLES/box-sizing.md) размер блочной модели
- [`caption-side`](./STYLES/caption-side.md) положение подписи таблицы
- [`clip-path`](./STYLES/clip-path.md) видимая область
- [`columns`](./STYLES/columns.md) колонки
  - [`column-count`](./STYLES/column-count.md) количество колонок
  - [`column-width`](./STYLES/column-width.md) ширина колонок
- [`column-gap`](./STYLES/column-gap.md) отступ между колонками
- [`display`](./STYLES/display.md) тип отображения
- [`fill`](./STYLES/fill.md) цвет заливки svg
- [`float`](./STYLES/float.md) обтекание блока текстом
- [`height`](./STYLES/height.md) высота
- [`max-height`](./STYLES/max-height.md) максимальная высота
- [`min-height`](./STYLES/min-height.md) минимальная высота
- [`resize`](./STYLES/resize.md) изменений размеров элемента
- [`text-align`](./STYLES/text-align.md) горизонтальное выравнивание
- [`text-align-last`](./STYLES/text-align-last.md) выравнивание последней строки
