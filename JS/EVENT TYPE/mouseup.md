# `mouseup`

Возникает при щелчке мышью, когда кнопка отпущена.

При этом важно, только где она была отпущена, а не где нажата.

Поэтому событие сработает, если щёлкнуть в произвольном месте, удерживать кнопку, навести на элемент и затем её отпустить.

Событие `mouseup` сработает по-особенному для клика правой кнопкой: по умолчанию оно вызывает контекстное меню, в котором пользователь может скопировать текст, изображение или посмотреть код.

События `mousedown` и `mouseup` срабатывают на все кнопки мыши: левую, правую и нажатие на колёсико. Они полезны для создания Drag'n'Drop — интерфейса, в котором элемент можно схватить и перетащить на другое место.

## Пример

_Событие для addEventListener_

```js
document.addEventListener('mouseup', function () {
  console.log('Отпустили кнопку');
});
```

_Свойство элемента_

```js
document.onmouseup = function () {
  console.log('Отпустили кнопку');
};
```