# [`applyMiddleware()`](../index.md)

Подключение `middleware` происходит в момент создания `store`. Redux создает цепочку `action` - `middleware` - `reducer`. Вариантов использования много, например создание id, т.к. в `reducer` мы не должны использовать случайные значения, функции должны быть чистыми.

Далее используем `applyMiddleware()`, который принимает в качестве аргумента наши `middleware` как инструкции (без вызова) через запятую.

## Использование

### 1. Создание

Эту сигнатуру ожидает от нас redux чтобы использовать middleware. По сути это 3 функции.

```jsx
const myLogger = store => next => action => {
  console.log('dispatched an action', action.type);
  next(action);
  console.log('updated state is', store.getState());
};
```

- `store` - Это конкретный объект нашего хранилища, который мы создаем (со всеми доступными методами), используется при необходимости.
- `next` - Обязательно должен быть вызван внутри `middleware` с передачей в него `action`. После `next(action)` отработает reducer, изменится state и можно выполнить какую-то еще логику.
- `action` - Текущее событие.

### 2. Импорт applyMiddleware для подключения

```jsx
import { applyMiddleware } from 'redux';
```

`applyMiddleware()` принимает наши функции `middleware` как параметры.

### 3. Передача middleware при создании store

Передаем вторым или третьим параметром. Соответственно он всегда идет последним.

```jsx
export const store = createStore(counter, applyMiddleware(myLogger));
```

## Пример

```jsx
import { createStore, applyMiddleware } from 'redux';

// Чаще всего middleWare выглядит следующим образом. Создается константа - массив
const middleWare = [];

// Если мы находимся в режиме разработки - добавим logger
if (process.env.NODE_ENV === 'development') {
  middleWare.push(myLogger);
}

// Передаем массив в applyMiddleware (спред оператор чтобы разбить массив на аргументы - функции)
// 1 Способ
export const store = createStore(counter, applyMiddleware(myLogger));

// 2 Способ
export const store = createStore(counter, applyMiddleware(...middleWare));
```
