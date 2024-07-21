# [`Настройка под rtk`](../index.md)

## 1. Импорт

```jsx
// src/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
```

## 2. Создание конфига

```jsx
// src/store.js
const persistConfig = {
  key: 'root', // создаст в localStorage ключ "persist:root"
  storage,
  // белый лист ключей (опционально), которые мы хотим сохранить
  // обычно используют или whiteList или blackList
  // например whitelist: ['filters', 'positions']
  whitelist: [],

  // черный лист ключей (опционально), которые мы не хотим сохранять
  // обычно используют или whiteList или blackList
  // например blacklist: ['filters', 'positions']
  blacklist: [],
};
```

## 3. Создание специального reducer для store

Нужно создать rootReducer с помощью `combineReducers()` и передать его вместе с `persistConfig` в `persistReducer()`.

```jsx
// src/store.js
const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
```

## 4. Создание и экспорт store

```jsx
// src/store.js
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
```

## 5. Создание persistor

```jsx
// src/store.js
export const persistor = persistStore(store);
```

## 6. Подключение к приложению

Используется провайдер `PersistGate`.

- `loading={null}` - возможный компонент preloader или null
- `persistor={persistor}` - создан на уровне store

```jsx
// src/index.js
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index';

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
```

## Пример

```js
// src/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './features/Filter/filterSlice';
import { todoReducer } from './features/Todo/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
```

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import './styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
```
