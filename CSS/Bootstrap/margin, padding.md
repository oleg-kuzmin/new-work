# [`margin, padding`](../index.md)

После указания параметров 1 и 2 параметры 3 и 4 пишут с разделителем `-`.

## Синтаксис

```js
[Тип отступа][Сторона][-Медиа][-Коэффициент]
```

### 1. Тип отступа

`m` - margin

`p` - padding

### 2. Сторона

`t` - top

`b` - bottom

`r` - right

`l` - left

`x` - left + right

`y` - top + bottom

### 3. Медиа, размер экрана (опционально)

Если не указан, то автоматически применится параметр `xs`

`xs` - не возвращает медиа-запрос

`sm` - @media (min-width: 576px)

`md` - @media (min-width: 768px)

`lg` - @media (min-width: 992px)

`xl` - @media (min-width: 1200px)

### 4. Коэффициент

`0` - 0rem

`1` - 0.25rem

`2` - 0.5rem

`3` - 1rem

`4` - 1.5rem

`5` - 3rem

## Пример

### 3 параметра

```html
<div class="mx-5"></div>
```

```css
.mx-5 {
  margin-left: 3rem !important;
  margin-right: 3rem !important;
}
```

### 4 параметра

```html
<div class="mx-md-5"></div>
```

```css
@media (min-width: 768px) {
  .mx-5 {
    margin-left: 3rem !important;
    margin-right: 3rem !important;
  }
}
```
