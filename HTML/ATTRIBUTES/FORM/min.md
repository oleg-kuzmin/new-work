# `min`

Нижняя граница диапазона.

## Применяется к тегам

- [`<meter>`](../../TAGS/UI/meter.md) статический прогресс-бар
- [`<input>`](../../TAGS/FORM/input.md) поле ввода

## Пример

### `<meter>`

```html
<meter class="meter" min="1" max="10" low="2" value="3"></meter>
```

### `<input>`

Работает для `<input type="number">`, `<input type="range"`>.

А также для даты в формате ГГГГ-ММ-ДД с `<input type="date">` и `<input type="datetime-local">`.

```html
<input min="1" max="10" type="number" />
```

## Значения

Все значения числовые и могут быть целыми (1), дробными (0.1 или .1), положительными (2) и отрицательными (-2).

Должно быть ниже значения max.

### `min="0"` (по умолчанию)
