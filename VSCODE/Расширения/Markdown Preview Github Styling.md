# [`Markdown Preview Github Styling`](../index.md)

## Настройка

```json
{
  // цветовая тема по умолчанию
  "markdown-preview-github-styles.colorTheme": "dark",

  // стиль темной темы по умолчанию
  "markdown-preview-github-styles.darkTheme": "dark_dimmed"
}
```

## Дополнительная стилизация

[dark_dimmed](file:///Users/Oleg/.vscode/extensions/bierner.markdown-preview-github-styles-2.0.4/dist/github-markdown-dark-dimmed.css)

### Цвета

- Желтый - `rgb(255, 180, 0)`, `rgb(255, 160, 0)`
- Оранжевый - `#F79A32`

### Файл

```css
:root {
  --main-color: #f79a32;
  scrollbar-width: none;
}

a {
  color: var(--main-color) !important;
}

code:not(pre > code) {
  color: var(--main-color) !important;
}

h1,
h2,
h3,
h4,
h5 {
  scroll-margin-top: 20vh;
  color: var(--main-color) !important;
}

h1 {
  border-bottom: 3px solid var(--main-color) !important;
}

h2 {
  border-bottom: 1px solid var(--main-color) !important;
}

li::marker {
  color: var(--main-color) !important;
}
```
