# [`gh-pages`](./index.md)

Если во время скрипта `gh-pages` появилась ошибка ввести `npx gh-pages-clean`.

Возможно необходимо указание `homepage` в `package.json` для корректной работы.

```json
{
  "homepage": "https://oleg-kuzmin.github.io/project",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
