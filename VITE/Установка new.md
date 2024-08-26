# [`Установка new`](./index.md)

## Зависимости

```bash
# установка Vite
npm create vite@latest .

# типы для node
npm i -D @types/node

# sass
npm i -D sass

# плагин для сортировки импортов модулей
npm i -D @trivago/prettier-plugin-sort-imports

# плагин для сортировки стилей css
npm i -D postcss prettier-plugin-css-order

# плагин для подстановки путей
npm i -D pkg-dir

# плагин для создания файлов
npm i -D generate-react-cli

# плагин для проверки fsd
npm i -D steiger

# библиотека
npm i react-transition-group
npm i -D @types/react-transition-group
```

## Удаление файлов

- tsconfig.app.json

## Конфигурация

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "allowJs": false,
    "allowSyntheticDefaultImports": true,
    "baseUrl": "src",
    "esModuleInterop": false,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "moduleResolution": "Node",
    "noEmit": true,
    "resolveJsonModule": true,
    "skipLibCheck": false,
    "strict": true,
    "target": "ESNext",
    "useDefineForClassFields": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "composite": true,
    "module": "esnext",
    "moduleResolution": "node"
  },
  "include": ["vite.config.ts"]
}
```

### `vite.config.ts`

```ts
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { packageDirectorySync } from 'pkg-dir';
import { defineConfig } from 'vite';

const packageRoot = packageDirectorySync();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      app: path.resolve(packageRoot, './src/app'),
      pages: path.resolve(packageRoot, './src/pages'),
      widgets: path.resolve(packageRoot, './src/widgets'),
      features: path.resolve(packageRoot, './src/features'),
      entities: path.resolve(packageRoot, './src/entities'),
      shared: path.resolve(packageRoot, './src/shared'),
    },
  },
});
```

## Создание файлов

### `.prettierrc`

```json
{
  "importOrder": [
    "<THIRD_PARTY_MODULES>",
    "^@core/(.*)$",
    "^@server/(.*)$",
    "^@ui/(.*)$",
    "^@/(.*)$",
    "^[../]",
    "^[./]"
  ],
  "importOrderSeparation": false,
  "importOrderSortSpecifiers": true,
  "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-css-order"],
  "arrowParens": "avoid",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "semi": true,
  "jsxSingleQuote": false,
  "printWidth": 120,
  "singleQuote": true
}
```

### `generate-react-cli.json`

```json
{
  "usesTypeScript": true,
  "usesStyledComponents": false,
  "usesCssModule": true,
  "cssPreprocessor": "scss",
  "testLibrary": "None",
  "component": {
    "default": {
      "customTemplates": {
        "component": "templates/default/TemplateName.tsx",
        "style": "templates/default/TemplateName.module.scss",
        "index": "templates/default/index.ts"
      },
      "path": "src",
      "withLazy": false,
      "withStory": false,
      "withStyle": true,
      "withTest": false,
      "withIndex": true
    }
  }
}
```

## Добавить скрипты

```json
{
  "create": "generate-react component --flat",
  "fsd": "steiger ./src"
}
```
