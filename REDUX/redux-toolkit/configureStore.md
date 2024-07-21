# [`configureStore()`](../index.md)

Метод создает и настраивает хранилище состояния.

Библиотека RTK идет вместе с дополнительными зависимостями (immer, redux, redux-thunk, reselect, nanoid).

- [`Синтаксис`](#cинтаксис)
- [`reducer`](#reducer)
- [`devTools (опционально)`](#devtools)
- [`middleware (опционально)`](#middleware)
- [`preloadedState (опционально)`](#preloadedstate)
- [`enhancers (опционально)`](#enhancers)
- [`Пример`](#пример)

## [Cинтаксис](#configurestore)

```js
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({});
```

В качестве параметра передается объект с ключами.

## [`reducer`](#configurestore)

В качестве значения указывается редюсер. Это может быть один редюсер или rootReduct, сделанный с помощью combineReducers(). Или объект с редюсерами.

```js
reducer: todoSlice.reducer,
```

```js
reducer: {
  todos: todoSlice.reducer
},
```

## [`devTools (опционально)`](#configurestore)

Включает расширение для браузера. По умолчанию уже включено.

```js
devTools: true,
```

## [`middleware (опционально)`](#configurestore)

Подключение `middleware` происходит в момент создания `store`. Redux создает цепочку `action` - `middleware` - `reducer`. Вариантов использования много, например создание id, т.к. в редюсере мы не должны использовать случайные значения, функции должны быть чистыми.

`middleware` представляет собой массив дополнительных функций, которые начинают работать после того, как случилось событие action, но до того, как action передан в редюсер (UI => Action => Middleware => Reducer => Store)

Если мы не используем ключ `middleware`, у нас подключаются `middleware` по умолчанию.

Если мы хотим добавить какой-то свой middleware, то нужно передать как значение функцию, которая принимает параметр `getDefaultMiddleware` и возвращает новый массив.

Вызов `getDefaultMiddleware()` вернет нам массив middleware по умолчанию, далее мы используем метод concat(), и добавляем туда свой middleware.

```js
middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
```

## [`preloadedState (опционально)`](#configurestore)

Предзагруженные данные, которые могут быть каким-либо образом получены.

```js
preloadedState: [{ id: 1, title: 'Redux', completed: true }],
```

## [`enhancers (опционально)`](#configurestore)

Дополнительные усилители - как правило, это какие-то внешние библиотеки.

```js
enhancers: [],
```

## Пример

```js
export const store = configureStore({
  reducer: todoSlice.reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  preloadedState: [{ id: 1, title: 'Redux', completed: true }],
  enhancers: [],
});
```
