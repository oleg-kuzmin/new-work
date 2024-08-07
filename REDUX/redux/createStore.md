# [`createStore()`](../index.md)

Создает хранилище данных. Как правило хранилище создается один раз.

## Синтаксис

```js
import { createStore } from 'redux';
const store = createStore(reducer, defaultValues, enhancer);
```

### `reducer`

Cозданная функция `reducer` или несколько `reducer`, объединенных с помощью метода `combineReducers()`.

### `defaultValues` (опционально)

Значение по умолчанию, которое может быть каким-либо образом получено.

Обычно в `defaultValues` передаются значения из `localStorage`.

При передаче значения по умолчанию произойдет вызов функции-reducer и передача ей в качестве `state` указанного `defaultValues`. Т.е. никаких `action` не будет, функция-reducer закончится кейсом `default: return state`. Таким образом в функции `const reducer = (state = [], action)` блок `state = []` НЕ СРАБОТАЕТ.

### `enhancer`, `devtools` (опционально)

Усилитель `enhancer` передается вторым или третьим параметром. Если используется и `enhancer` и `devtools`, то нужно использовать метод `compose`.

## Пример

### Reducer, начальное состояние и расширение

```jsx
export const store = createStore(
  todos,
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

### Reducer и enhancer

```jsx
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWare = [];

if (process.env.NODE_ENV === 'development') {
  middleWare.push(logger);
}

export const store = createStore(counter, composeEnhancers(applyMiddleware(...middleWare)));
```

## Методы

### `getState()`

Функция получения всех данных состояния. Возвращает текущее состояние `state`.

```jsx
store.getState();
```

### `dispatch()`

Функция какого-то события. Принимает объект `action` и передает его в функцию `reducer`.

```jsx
store.dispatch({ type: 'INCREMENT' });
```

### `subscribe()`

Подписка на событие "изменение/обновление store". В качестве аргумента передается функция, которая выполнится при наступлении события.

```jsx
store.subscribe(func);
```
