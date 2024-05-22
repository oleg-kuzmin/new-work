# `composedPath`

Массив объектов, где будут вызываться слушатели.

Сюда не входят узлы Shadow Dom.

## Синтаксис

```js
event.composedPath;
```

## Возвращает

### `array`

Вернёт массив элементов, на которых сработает событие.

## Пример

```js
function func1(event) {
  alert(event.composedPath());
}
```
