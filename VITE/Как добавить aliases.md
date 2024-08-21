# [`Как добавить aliases`](./index.md)

Дополнительно нужно установить `@types/node` (т.к `path` есть только в node.js).

## vite.config.ts

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  server: {
    open: true,
  },
});
```

## tsconfig.app.json

```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
}
```
