# `animation`

- [`animation-name`](./animation-name.md) имя анимации
- [`animation-duration`](./animation-duration.md) длительность одного цикла
- [`animation-delay`](./animation-delay.md) задержка старта анимации
- [`animation-direction`](./animation-direction.md) порядо воспроизведения
- [`animation-timing-function`](./animation-timing-function.md) проигрывание кадров
- [`animation-iteration-count`](./animation-iteration-count.md) количество циклов
- [`animation-fill-mode`](./animation-fill-mode.md) стили до или после цикла
- [`animation-play-state`](./animation-play-state.md) позволяет поставить на паузу

Мега-шорткат, в котором можно за раз указать значения для всех свойств, начинающихся на `animation`.

Значения указываются через пробел. Порядок указания значений не важен. Из-за того, что значения этих свойств очень разные, браузер сам догадывается, какое значение к какому свойству относится. Важно только помнить, что первое значение времени будет воспринято как значение `animation-duration` (длительность анимации), а второе — `animation-delay` (задержка воспроизведения).

Для работы анимации совсем не обязательно перечислять все значения. Достаточно указать имя анимации и её длительность. Для остальных свойств будут установлены значения по умолчанию.

Есть возможность применить к одному элементу сразу несколько анимаций. Для этого нужно перечислить несколько значений через запятую. Возможно указать любое количество значений для любого из свойств анимации. Анимации будут воспроизводиться одновременно.

## Пример

```css
.element {
  animation: circle-to-square 2s infinite alternate-reverse ease-in 1s;
}
```