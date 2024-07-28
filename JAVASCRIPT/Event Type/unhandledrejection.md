# [`unhandledrejection`](../index.md)

Всегда завершайте использование промиса методом `catch()`. Если этого не сделать, то следующие промисы в цепочке перестанут работать, и такую ошибку получится поймать только через специальный обработчик – `unhandledrejection`.

Если происходит ошибка, и отсутствует её обработчик, то генерируется событие `unhandledrejection`, и соответствующий объект `evt` содержит информацию об ошибке.

## Пример

_Событие для addEventListener_

```js
window.addEventListener('unhandledrejection', function (evt) {
  console.log(evt.promise); // [object Promise] - промис, который сгенерировал ошибку
  console.log(evt.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
});
```

_Свойство элемента_

```js
window.onunhandledrejection = function (evt) {
  console.log(evt.promise); // [object Promise] - промис, который сгенерировал ошибку
  console.log(evt.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
};
```
