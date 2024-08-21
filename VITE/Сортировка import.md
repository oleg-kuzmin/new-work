# [`Сортировка import`](./index.md)

https://github.com/trivago/prettier-plugin-sort-imports

## Установка плагина

```bash
npm i -D @trivago/prettier-plugin-sort-imports
```

## Настройка плагина

##### .prettierrc

```js
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
  "plugins": ["@trivago/prettier-plugin-sort-imports"]
}
```
