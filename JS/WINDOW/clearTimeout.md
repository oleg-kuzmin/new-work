# `clearTimeout()`

Когда таймер не нужен, его следует удалить, чтобы не тратить ресурсы браузера.

## Синтаксис

```js
clearTimeout(timerId);
```

### `timerId (Число)`

Идентификатор таймера

## Пример

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
