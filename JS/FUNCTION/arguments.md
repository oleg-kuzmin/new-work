# `arguments`

В старом коде, до появления оператора `spread`, можно встретить переменную `arguments`.

Внутри любой функции, кроме стрелочной, доступна переменная `arguments`. Она создаётся автоматически.

## Синтаксис

```js
function nameFunc() {
  console.log(arguments);
}
```

## Возвращает

### `array`

Псевдомассив всех аргументов, которые были переданы функции.

## Пример

```js
function gimmeSomeArguments() {
  console.log(arguments);
}

gimmeSomeArguments(1, 2); // [1, 2]
```
