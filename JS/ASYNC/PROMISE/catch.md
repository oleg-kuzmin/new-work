# `.catch()`

Метод `catch()` используют для обработки ошибки при выполнении асинхронной операции.

Отработает ошибку от вышестоящих `.then()`. Если все в порядке, то `catch()` вообще не выполнится. Но если любой из промисов будет отклонён (проблемы с сетью или некорректная json-строка, или что угодно другое), то ошибка будет перехвачена.

Вокруг функции промиса и обработчиков находится "невидимый `try..catch`"

Это работает не только в функции промиса, но и в обработчиках. Если мы бросим ошибку `throw` из обработчика `.then()`, то промис будет считаться отклонённым, и управление перейдёт к ближайшему обработчику ошибок.

`catch()` перехватывает все виды ошибок в промисах: будь то вызов `reject()` или ошибка, созданная в обработчике при помощи `throw`.

Необходимо размещать `.catch()` там, где мы хотим обработать ошибки и знаем, как это сделать. Обработчик может проанализировать ошибку (могут быть полезны пользовательские классы ошибок) и пробросить её, если ничего не знает о ней (возможно, это программная ошибка).

Всегда завершайте свои цепочки промисов вызовом метода `catch()`. Если в одной из операций в цепочке произойдёт ошибка, и она не будет обработана, то JavaScript выведет сообщение `Uncaught (in promise) Error` в консоль разработчика и перестанет работать на всей странице.

## Синтаксис

```js
promise.catch(function onReject(error) {
  // выполнится, если промис завершится ошибкой
});
```

### `onReject`

Функция-колбэк, которая будет вызвана при переходе промиса в состояние «ошибка» `rejected`. Функция имеет один параметр `error`, в который передаётся информация об ошибке.

### `error`

Значение, которое будет передано в `reject(error)` и записано как результат промиса.

## Возвращает

### `object promise`

`.state` - `rejected`

`.result` - `error`

## Пример

_Пример с `then()` и `catch()`_

```js
// getPasswords() — асинхронная функция, которая возвращает промис
getPasswords()
  .then(function (result) {
    // выполнится, если операция успешна
  })
  .catch(function (err) {
    // колбэк выполнится, если getPassword завершится ошибкой
    alert(err.message);
  });
```

_Промис вызывает функцию `reject()` => `catch()` выполняется_

```js
const rejectInSecond = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error('время истекло'));
  }, 1000);
});

rejectInSecond.catch(function (err) {
  console.error(err.message);
  // 'время истекло'
});
```

_Промис выбрасывает ошибку с помощью `throw` => `catch()` выполняется_

```js
const throwInSecond = new Promise(function (resolve, reject) {
  setTimeout(function () {
    throw new Error('время истекло');
  }, 1000);
});

throwInSecond.catch(function (err) {
  console.error(err.message);
  // 'время истекло'
});
```

## Проброс ошибок

Если мы пробросим через `throw` ошибку внутри блока `.catch()`, то управление перейдёт к следующему ближайшему обработчику `.catch()`. А если мы обработаем ошибку и завершим работу обработчика нормально, то продолжит работу ближайший успешный обработчик `.then()`.

### Обработка ошибки

```js
const promise = new Promise((resolve, reject) => {
  throw new Error('Ошибка!');
});

promise
  .catch(function (error) {
    alert('Ошибка обработана, продолжить работу');
  })
  .then(() => alert('Управление перейдёт в следующий then'));
```

### Проброс ошибки

```js
const promise = new Promise((resolve, reject) => {
  throw new Error('Ошибка!');
});

promise
  // ловим ошибку
  .catch(function (error) {
    if (error instanceof URIError) {
      console.log('Какая-то ошибка');
      // обрабатываем ошибку
    } else {
      console.log('Не получилось обработать ошибку');
      // пробрасываем эту или другую ошибку в следующий catch
      throw error;
    }
  })

  // then не выполнится
  .then(function () {})

  // ловим ошибку второй раз
  .catch(error => {
    // если ничего не возвращаем, то выполнение продолжится
    console.log(`Неизвестная ошибка: ${error}`);
  });
```