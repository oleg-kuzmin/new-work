# [`React.createElement()`](../index.md)

Создает react-компонент, который возвращает разметку html (react-element).

## Синтаксис

```js
React.createElement('h1', {}, 'Привет, React!');
```

### `1. Строка`

Имя HTML-тега.

### `2. Объект props`

Дополнительные свойства, которые прикреплены к этому тегу. Например CSS-идентификатор `class` или `id` либо другие.

### `3. Содержимое`

Содержимое, которое попадёт в HTML-тег (дочерние элементы). Содержимым может быть не только текст, но и другие элементы или массив.

### `4. Другие аргументы`

После третьего аргумента могут идти и другие. Все они будут добавлены друг за другом внутрь создаваемого элемента, как если бы мы использовали метод `appendChild`.

## Возвращает

### `React element object`

Сам объект возвращает разметку html.

## Пример

```js
ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement('h1', {}, 'Текущее время:'),
    React.createElement('h2', { id: 'date' }, new Date().toLocaleTimeString())
  ),
  document.getElementById('root')
);
```
