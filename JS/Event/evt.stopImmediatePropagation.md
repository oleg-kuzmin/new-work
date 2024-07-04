# [`evt.stopImmediatePropagation()`](../index.md)

Делает то же самое, что и stopPropagation, но, в том числе, предотвращает вызов обработчиков события, которые были установлены на этом же элементе.

Но есть тонкость. Обработчики событий срабатывают в том же порядке, в каком они описаны в коде. Поэтому если на одном элементе висят два обработчика одного события, они сработают по очереди.

Поэтому `stopImmediatePropagation` остановит только те обработчики, которые описаны после него. Он попросту не знает о тех, которые стоят в коде раньше.

## Синтаксис

```js
evt.stopImmediatePropagation();
```

## Пример

```js
const credit = document.querySelector('#credit');

credit.addEventListener('click', function () {
  console.log('Одолжил 100 рублей');
});

credit.addEventListener('click', function (evt) {
  console.log('Взял микрозайм');
  evt.stopImmediatePropagation();
});

credit.addEventListener('click', function () {
  console.log('Продал квартиру');
});
```
