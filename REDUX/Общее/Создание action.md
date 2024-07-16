# [`Создание action`](../index.md)

`action` - это отдельная переменная, объект действия для передачи в `dispatch` или функция `action-creator`, которая вернет объект `action`. Функции `action-creator` обычно используют если нужно передать параметры.

У объекта `action` обычно есть ключи `type` (тип события) и `payload` (данные для загрузки).

## Пример

Передача в `dispatch` объекта `action` без отдельной переменной.

```jsx
store.dispatch({ type: 'INCREMENT' });
```

Создание переменной `action increment` и передача `action` в `dispatch`.

```jsx
const increment = {
  type: 'INCREMENT',
};

store.dispatch(increment);
```

Создание функции `action-creator` (которая создает и возвращает `action`) и передача результат вызова функции в `dispatch`

```jsx
const addTodo = title => ({
  type: 'ADD_TODO',
  title,
});

store.dispatch(addTodo('clear car'));
```
