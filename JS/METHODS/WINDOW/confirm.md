# `confirm()`

При помощи функции `confirm()` можно вывести на экран пользователя модальное окно с текстом и кнопками `Ок` и `Отмена`.

Из-за того, что окно модальное — работа с интерфейсом браузера и страницами будет заблокирована. Это неудобно, плюс может восприниматься пользователем как попытка ограничивать его свободу. Модальное окно для пользователя — окно, которое блокирует работу пользователя с браузером до тех пор, пока пользователь это окно не закроет.

Это крайне быстрый вариант кода, который взаимодействует с пользователем, но окно созданное таким образом не изменяется через CSS, а значит использовать его лучше только для прототипирования интерфейса. В финальном варианте веб-страницы использовать модальное окно нежелательно.

## Синтаксис

```js
confirm(message);
```

### `message`

Строка - текст вопроса, который появится в модальном окне.

Аргумент должен быть строкой. Если это не так, то JavaScript автоматически приведёт его к строке. Такое поведение не доставляет проблем, пока аргумент является примитивом или встроенным типом, имеющим правила приведения к строке. Если же в функцию передать объект, то получится непонятно.

## Возвращает

### `boolean`

- `true` результат ответа на вопрос - если нажать `Ок`
- `false` результат ответа на вопрос - если нажать `Отмена`

## Пример

```js
confirm('Ты здесь главный?');

// Результат работы confirm() можно записать в переменную
const answer = confirm('Подтвердите удаление');
```