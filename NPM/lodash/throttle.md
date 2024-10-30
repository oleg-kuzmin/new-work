# [`throttle`](../index.md)

## Синтаксис

```js
throttle(myFunction, time);
```

### `myFunction`

Функция для тротлинга.

### `time: number`

Ограничение по времени в мс.

### Пример

```js
import throttle from 'lodash/throttle';

const myFunction = () => {};
throttle(myFunction, 1000);
```
