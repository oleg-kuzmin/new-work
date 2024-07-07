# [`useImperativeHandle()`](../index.md)

Дает возможность изменить существующий порядок передачи `props` сверху вниз.

Добавляет функционал передачи `props` снизу вверх.

Примеры использования: сброс неуправляемой формы.

## Синтаксис

```jsx
useImperativeHandle(ref, createHandle, dependecies);
```

### `1. ref`

В него будут записаны методы.

### `2. createHandle`

Функция для создания объекта (должна возвращать объект), в котором будут методы, которые мы хотим сохранить.

### `3. dependecies`

Массив зависимостей.

## Пример

```jsx
import { useState, useRef, useImperativeHandle } from 'react';

const TextInput = React.forwardRef((props, ref) => {
  const { hasError, placeholder, value, update } = props;
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
    };
  });

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => update(e.target.value)}
      placeholder={placeholder}
      style={{
        borderColor: hasError ? 'red' : 'black',
      }}
    />
  );
});

const Form = () => {
  const [card, setCard] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const cardEl = useRef();
  const phoneEl = useRef();

  const validate = () => {
    if (card.length < 16) {
      setError('card');
      cardEl.current.focus();
      return;
    }
    if (phone.length < 11) {
      setError('phone');
      phoneEl.current.focus();
      return;
    }
    setError('');
  };

  return (
    <div>
      <h2>useImperativeHandle hook</h2>
      <TextInput hasError={error === 'card'} placeholder={'Card'} ref={cardEl} value={card} update={setCard} />
      <TextInput hasError={error === 'phone'} placeholder={'Phone'} value={phone} update={setPhone} ref={phoneEl} />
      <button onClick={validate}>Validate</button>
    </div>
  );
};
```
