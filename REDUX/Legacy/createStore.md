# [`createStore()`](../index.md)

Создает хранилище данных. Как правило хранилище создается один раз.

## Синтаксис

```js
import { createStore } from '@reduxjs/toolkit';
const store = createStore(reducer, defaultValues);
```

### `reducer`

Cозданная функция `reducer` или несколько `reducer`, объединенных с помощью метода `combineReducers()`.

### `defaultValues` (опционально)

Значение по умолчанию, которое может быть каким-либо образом получено.

Обычно в `defaultValues` передаются значения из `localStorage`.

При передаче значения по умолчанию произойдет вызов функции-reducer и передача ей в качестве `state` указанного `defaultValues`. Т.е. никаких `action` не будет, функция-reducer закончится кейсом `default: return state`. Таким образом в функции `const reducer = (state = [], action)` блок `state = []` НЕ СРАБОТАЕТ.

## Пример

### Получение всех данных

```jsx
store.getState();
```

### Передача объекта action в функцию reducer

```jsx
store.dispatch({ type: 'INCREMENT' });
```

### Установка слушателя на событие "изменение/обновление store".

В качестве аргумента передается функция, которая выполнится при наступлении события.

```jsx
store.subscribe(func);
```
