# `element.removeEventListener()`

Переданные настройки влияют на удаление обработчика события. Рекомендуется повторять в точности те же параметры, которые использовались в `.addEventListener()`, чтобы браузер точно знал какой обработчик нужно удалить.

На практике обычно используют метод передачи именнованной функции для установления и снятия слушателя.

## Синтаксис

```js
element.removeEventListener('event', handler, { options });
```

## Пример

```js
element.removeEventListener('click', handleClick);
```