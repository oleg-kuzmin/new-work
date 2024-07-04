# [`document.forms`](../index.md)

Получить псевдомассив форм на странице. Свойство только для чтения, напрямую перезаписать его нельзя.

## Синтаксис

```js
document.forms;
```

## Возвращает

### `HTMLCollection`

Динамическая колллекция.

## Пример

_Псевдомассив форм_

```js
const collection = document.forms;
```

_Форма по имени_

```js
const myForm = document.forms.name;
```

_Псевдомассив элементов формы_

```js
const elements = document.forms.name.elements;
```

_Элемент по имени_

```js
const element = document.forms.name.elements.name;
```
