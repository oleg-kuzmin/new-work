# `window.setTimeout()`

`setTimeout()` позволяет исполнить функцию через указанный промежуток времени.

## Синтаксис

```js
const timerId = setTimeout(someFunction, time, arguments);
```

### `someFunction`

Функция - которая выполнится через определенное время.

### `time`

Число - время таймера в миллисекундах

### `arguments` / опционально

Aргументы - которые нужно передать колбэку на вход.

## Возвращает

### `number`

Число - Возвращает идентификатор установленного таймера (`timerId`).

Далее идентификатор можно передать в функцию `clearTimeout()`, чтобы остановить таймер.

## Пример

_Базовый пример_

```js
const timerId = setTimeout(
  () => {
    console.log('Прошла 1 секунда');
  },
  1000,
  argument
);
```

_Aвтоматический выход польователя_

```js
function logOut() {
  // Тут логика выхода пользователя
}
const timer = setTimeout(logOut, 300000);

// Если пользователь переключил вкладку
window.addEventListener('blur', function () {
  clearTimeout(timer); // удаляем таймер
});
```
