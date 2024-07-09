# [`useReducer()`](../index.md)

Аналог `useState()`. Можно использовать вместо `useState()`, если у нас много логики изменения состояний.

Точно также как и `useState()` возвращает две сущности. Состояние и диспетчерскую функцию, принимающую `action`.

`useReducer()` - используй Reducer (т.е. функцию).

## Синтаксис

```jsx
const [state, dispatch] = useReducer(reducerFunction, initialValue);
```

### `1. reducerFunction`

Функция с логикой обработки действия. Функция принимает два аргумента: состояние state и некое действие action. Возвращает новое состояние приложения.

#### `a. state`

Текущее состояние state нашего приложения.

#### `a. action`

Объект действия, в зависимости от которого функция вернет нам новое состояние приложения.
Содержит ключи type (тип события) и payload (данные для передачи).

### `2. initialValue`

Начальное значение.

## Возвращает

### `3. state`

Состояние, с которым мы будем работать.

### `4. dispatch`

Диспетчерская функция за счет которой обновляются значения (сюда передается объект action с ключами type и payload).

## Пример

```jsx
import React, { useReducer } from 'react';
import './styles.css';

const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, { type, payload = step }) => {
  switch (type) {
    case 'INCREMENT_R':
      return {
        ...state,
        r: limitRGB(state.r + payload),
      };
    case 'DECREMENT_R':
      return {
        ...state,
        r: limitRGB(state.r - payload),
      };
    case 'INCREMENT_G':
      return {
        ...state,
        g: limitRGB(state.g + payload),
      };
    case 'DECREMENT_G':
      return {
        ...state,
        g: limitRGB(state.g - payload),
      };
    case 'INCREMENT_B':
      return {
        ...state,
        b: limitRGB(state.b + payload),
      };
    case 'DECREMENT_B':
      return {
        ...state,
        b: limitRGB(state.b - payload),
      };
    default:
      return state;
  }
};

export default function App() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 150, b: 200 });

  return (
    <div className="App">
      <h1
        style={{
          color: `rgb(${r}, ${g}, ${b})`,
        }}
      >
        Hello CodeSandbox
      </h1>
      <div>
        <span>r </span>
        <button onClick={() => dispatch({ type: 'INCREMENT_R', payload: 100 })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_R' })}>-</button>
      </div>
      <div>
        <span>g </span>
        <button onClick={() => dispatch({ type: 'INCREMENT_G' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_G' })}>-</button>
      </div>
      <div>
        <span>b </span>
        <button onClick={() => dispatch({ type: 'INCREMENT_B' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT_B' })}>-</button>
      </div>
    </div>
  );
}
```

### Пример

```jsx
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

// Использование
function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // Можно создать отдельные функции с dispatch
  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
    </>
  );
}
```
