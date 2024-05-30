# `.addEventListener()`

Добавляет на элемент обработчик события, на которое нужно отреагировать.

Помимо объекта события, внутри функции-обработчик можно использовать ключевое слово `this`. Оно позволяет получить DOM-элемент, на котором сработал обработчик. Это позволяет создать обработчик один раз, но привязать её к нескольким DOM-элементам.

## Синтаксис

```js
element.addEventListener('event', handler, { options });
```

### `event`

Событие, на которое нужно отреагировать.

### `handler`

Функция, которая будет вызвана, когда событие сработает.

### `options`

Объект дополнительных опций.

#### `once: false`

Логическое значение, указывающее, что слушатель следует вызывать не более одного раза после добавления.

- `false`

Значение по умолчанию.

- `true`

Слушатель будет автоматически удален при первом вызове.

## Пример

_Базовое использование_

```js
// handler - aнонимная функция
element.addEventListener('click', evt => {
  console.log('Произошло событие', evt.type);
});

// handler - именованная функция
element.addEventListener('click', handleClick);
```

_Однократная реакция на событие с помощью removeEventListener_

```js
function handleClick() {
  console.log('Клик!');
  element.removeEventListener('click', handleClick);
}

element.addEventListener('click', handleClick);
```

_Однократная реакция на событие с помощью options_

```js
element.addEventListener('click', handleClick, { once: true });
```

_Передача аргументов в функцию handler_

```js
element.addEventListener('click', () => handleClick(args));
```
