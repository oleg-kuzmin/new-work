# [`navigator`](../index.md)

Свойство `window.navigator` возвращает объект описания приложения (user agent), которое выполняет скрипт. В подавляющем большинстве случаев это приложение — браузер. Объект содержит свойства, описывающие браузер, и методы для выполнения действий.

Объект `navigator` содержит множество других свойств, большинство из них экспериментальные или поддерживаются конкретными браузерами.

Методы объекта `navigator` служат для взаимодействия с другими WebAPI. Например, метод `navigator.vibrate()`, который вызывает вибрацию пользовательского устройства, если она поддерживается.

## Синтаксис

```js
navigator;
```

## Возвращает

### `object`

Объект описания приложения.