# `background`

- [`background-attachment`](./background-attachment.md) прокрутка фона
- [`background-clip`](./background-clip.md) блочная модель фона
- [`background-color`](./background-color.md) цвет фона
- [`background-image`](./background-image.md) картинка, градиент фона
- [`background-repeat`](./background-repeat.md) повтор фона

Пишется через слеш `/`

- [`background-position`](./background-position.md) позиционирование фона
- [`background-size`](./background-size.md) размер фона

Шорткат, позволяющий задать все свойства фона разом.

Ни одно из значений не является обязательным, поэтому ненужные можно смело опустить.

Как и с любым шорткатом, со свойством `background` нужно обращаться осторожно. Если потребуется переопределить всего одно из заданных значений, то нужно будет переписать и все остальные.

Если в рамках шортката не задано значение для какого-то из свойств и в коде ниже оно не прописано, то свойству устанавливается значение по умолчанию.

Записанные выше отдельные свойства переопределяются заданным ниже свойством `background`.

## Пример

```css
.element {
  background: #000000 url('bkg.png') no-repeat center / cover;
}
```

## Значения

### `background: #000000 url('bkg.png') no-repeat center / cover`

Можно указать одно или несколько значений для разных свойств, разделяя их пробелами. Значения можно писать в любом порядке, браузер сам определит, какое значение к какому свойству относится.

### `background: url("bkg.png") center / cover`

В произвольном порядке записи свойств есть исключение: в паре `background-position` / `background-size` порядок записи только такой, через слэш. А ещё, если опустить `background-size`, то `background-position` сработает, но если опустить `background-position`, то `background-size` не сработает.
