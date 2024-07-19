# [`process.env`](./index.md)

Переменная окружения.

## `process.env.NODE_ENV`

Содержит информацию о режиме в котором запущен сборщик.

- `'development'` - режим разработки
- `'production'` - режим продакшн
- `'test'` - режим тестирования

```js
if (process.env.NODE_ENV === 'production') {
  doSomeThing();
}
```

## `process.env.API_KEY`

Содержит ключ, сохраненный в файле `.env.local` в корне проекта.

```bash
# .env.local
API_KEY=27871955
```

```jsx
// index.js
const API_KEY = process.env.API_KEY;
```
