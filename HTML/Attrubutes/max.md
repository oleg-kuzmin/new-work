# `max`

Верхняя граница диапазона.

## Применяется к тегам

- [`<meter>`](../../TAGS/UI/meter.md) статический прогресс-бар
- [`<progress>`](../../TAGS/UI/progress.md) динамический прогресс-бар
- [`<input>`](../../TAGS/FORM/input.md) поле ввода

## Пример

### `<meter>`

```html
<meter class="meter" min="1" max="10" low="2" value="3"></meter>
```

### `<progress>`

```html
<progress id="progress" value="0" max="100"></progress>
```

### `<input>`

Работает для `<input type="number">`, `<input type="range"`>.

А также для даты в формате ГГГГ-ММ-ДД с `<input type="date">` и `<input type="datetime-local">`.

```html
<input min="1" max="10" type="number" />
```

## Значения

Все значения числовые и могут быть целыми (1), дробными (0.1 или .1), положительными (2) и отрицательными (-2).

Должно быть выше значения min.

### `max="1"` (по умолчанию)
