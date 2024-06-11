# `element.contentEditable`

Свойство `contentEditable` элемента - признак, указывающий можно или нет редактировать содержимое элемента.

## Синтаксис

```js
element.contentEditable;
```

## Возвращает

### `boolean` || `string`

- `true` || `''` - содержимое элемента доступно для редактирования
- `false` - содержимое элемента не доступно для редактирования
- `inherit` - наследуется значение данного свойства от родительского элемента

## Пример

```js
element.contentEditable = 'true';
element.contentEditable = true;
```
