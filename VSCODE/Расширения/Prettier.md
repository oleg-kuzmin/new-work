# [`Prettier`](../index.md)

## Настройка

```json
{
  // скобки вокруг единственного параметра стрелочной функции (Prettier)
  "prettier.arrowParens": "avoid",

  // помещает > в конец строки или на следующую строку
  "prettier.bracketSameLine": false,

  // пробелы в объектах между скобками (Prettier)
  "prettier.bracketSpacing": true,

  // двойные кавычки в jsx (Prettier)
  "prettier.jsxSingleQuote": false,

  // максимальная ширина кода (Prettier)
  "prettier.printWidth": 120,

  // требует файл конфига для форматирования (Prettier)
  "prettier.requireConfig": false,

  // всегда точка с запятой (Prettier)
  "prettier.semi": true,

  // одиночные кавычки (Prettier)
  "prettier.singleQuote": true
}
```

## .prettierrc

```json
{
  "importOrder": [
    "<TYPES>",
    "<TYPES>^[.]",
    "react",
    "<THIRD_PARTY_MODULES>",
    "^app(/.*)$",
    "^pages(/.*)$",
    "^widgets(/.*)$",
    "^features(/.*)$",
    "^entities(/.*)$",
    "^shared(/.*)$",
    // 1 вариант
    "(?<!.module).scss",
    ".module.scss",

    // 2 вариант
    "^(?!.*[.module.]scss$)[./].*$",
    ".module.scss$"
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
