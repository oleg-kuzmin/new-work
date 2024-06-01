# `keydown`

Клавиша нажата. Сработает на любой клавише в тот момент, когда на неё нажмут. В таких случаях говорят, что клавиша «в нижнем положении».

## Пример

_Событие для addEventListener_

```js
element.addEventListener('keydown', function () {
  console.log('Нажали клавишу');
});
```

_Свойство элемента_

```js
element.onkeydown = function () {
  console.log('Нажали клавишу');
};
```
