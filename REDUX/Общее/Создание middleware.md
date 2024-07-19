# [`Создание middleware`](../index.md)

Подключение `middleware` происходит в момент создания store. Redux создает цепочку `action` - `middleware` - `reducer`. Вариантов использования много, например создание id, т.к. в `reducer` мы не должны использовать случайные значения, функции должны быть чистыми.

Далее используем `applyMiddleware()`.

## Пример

```jsx
import { createStore, applyMiddleware } from 'redux';

// middleware эту сигнатуру ожидает от нас redux
const myLogger = store => next => action => {
  console.log('dispatched an action', action.type);
  next(action);
  console.log('updated state is', store.getState());
};

export const store = createStore(counter, applyMiddleware(myLogger));
```

### `store`

Это конкретный объект нашего хранилища, который мы создаем (со всеми доступными методами), используется при необходимости.

### `next`

Обязательно должен быть вызван внутри `middleware` с передачей в него `action`. После `next(action)` отработает reducer, изменится state и можно выполнить какую-то еще логику.

### `action`

Текущее событие.
