# `evt.composedPath()`

Метод возвращает массив объектов, где будут вызываться слушатели.

Сюда не входят узлы Shadow Dom.

## Синтаксис

```js
evt.composedPath();
```

## Возвращает

### `array`

Вернёт массив элементов, на которых сработает событие.

## Пример

```js
function func(evt) {
  alert(evt.composedPath());
}
```
