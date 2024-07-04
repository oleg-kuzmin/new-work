# [`element.getBoundingClientRect()`](../index.md)

Возвращает объект с координатами относительно страницы.

## Синтаксис

```js
element.getBoundingClientRect();
```

## Возвращает

### `DOMRect`

```js
{
  x: number; // координаты начала элемента по горзонтали
  y: number; // координаты начала элемента по вертикали
  width: number; // ширина элемента
  height: number; // высота элемента
  top: number; // отступ сверху от начала страницы
  right: number; // отступ справа от начала страницы
  bottom: number; // отступ снизу от начала страницы
  left: number; // отступ слева от начала страницы
}
```
