# `window.scroll()`

Прокрутит страницу в нужное место.

Если прокрутить страницу до указанных координат не получается, браузер прокрутит её так далеко, как сможет, но увеличивать страницу не будет. Если страница помещается в окно целиком и полосы прокрутки нет, то браузер проигнорирует эту инструкцию.

`window.scroll()` аналогичен методу `window.scrollTo()`.

## Синтаксис

```js
window.scroll(Х, Y);
```

Когда браузер выполнит инструкцию, указанная точка `(Х, Y)` окажется в левом верхнем углу окна. Координаты задаются в пикселях, но указывать единицы измерения не нужно.

### `Х (Число)`

Координата Х. Указывает, куда нужно прокрутить страницу по горизонтали.

### `Y (Число)`

Координата Y. Указывает, куда нужно прокрутить страницу по вертикали.

## Возвращает

### `undefined`

## Пример

```js
// Прокрутит страницу на 100px вправо и на 50px вниз
window.scroll(100, 50);
```