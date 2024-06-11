# `window.clearInterval()`

Когда интервал не нужен, его следует удалить, чтобы не тратить ресурсы браузера.

## Синтаксис

```js
clearInterval(intervalId);
```

### `intervalId`

Число - идентификатор интервала.

## Пример

```js
function checkEmail() {
  // Тут логика проверки почты
}
const interval = setInterval(checkEmail, 10000);

// Если пользователь переключил вкладку
window.addEventListener('blur', function () {
  clearInterval(interval); // удаляем таймер
});
```
