# [`createStore()`](../index.md)

Создает хранилище данных. Как правило хранилище создается один раз.

## Синтаксис

```js
import { createStore } from 'redux';
const store = createStore(reducer, defaultValues, devtools);
```

### `reducer`

Cозданная функция `reducer` или несколько `reducer`, объединенных с помощью метода `combineReducers()`.

### `defaultValues` (опционально)

Значение по умолчанию, которое может быть каким-либо образом получено.

Обычно в `defaultValues` передаются значения из `localStorage`.

При передаче значения по умолчанию произойдет вызов функции-reducer и передача ей в качестве `state` указанного `defaultValues`. Т.е. никаких `action` не будет, функция-reducer закончится кейсом `default: return state`. Таким образом в функции `const reducer = (state = [], action)` блок `state = []` НЕ СРАБОТАЕТ.

### `devtools` (опционально)

Включит расширение redux devtools для chrome.

## Пример

```jsx
export const store = createStore(
  todos,
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
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
