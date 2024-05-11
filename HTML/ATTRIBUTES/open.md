# `open` (Открывает details, dialog)

По умолчанию аккордеон закрыт, но если мы хотим, чтобы его содержание показывалось сразу при загрузке страницы или открывать его из JavaScript, нужно добавить к нему атрибут open.

## Применяется к тегам

- [`<details> (АККОРДЕОН)`](<../TAGS UI/details.md>)
- [`<dialog> (МОДАЛЬНОЕ ОКНО)`](<../TAGS UI/dialog.md>)

## Пример

### `<details>`

```html
<details open>
  <summary>Легенда</summary>
  <p>Раскрывающийся текст</p>
</details>
```

### `<dialog>`

```html
<dialog open>Я виден. Привет!</dialog>
```
