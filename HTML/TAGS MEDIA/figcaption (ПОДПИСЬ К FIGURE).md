# `<figcaption>` (Подпись к figure)

_(figure caption: подпись к рисунку)_

Разрешено использовать только один тег `<figcaption>` внутри `<figure>`.

Подпись к картинке из `<figcaption>` должна отличаться от описания из alt.

Элемент `<figcaption>`, если он есть, обязательно должен быть первым или последним потомком элемента `<figure>`.

Лучше не вкладывать внутрь `<figure>` тег для цитат `<blockquote>`, хотя спецификация это не запрещает. В этом случае скринридеры будут слишком назойливо озвучивать все роли и повторять несколько раз подпись к цитате, если она завёрнута в `<figcaption>`.

## Пример

### Изображение с подписью

```HTML
<figure>
  <img src="elephant-sunset.jpg" alt="слон на фоне заката задумчиво смотрит в камеру." />
  <figcaption>Слон на фоне заката</figcaption>
</figure>
```

## Глобальные атрибуты

- [`class (ЗАДАЕТ КЛАСС ЭЛЕМЕНТУ)`](<../ATTRIBUTES GLOBAL/class (ЗАДАЕТ КЛАСС ЭЛЕМЕНТУ).md>)
- [`contenteditable (ДЕЛАЕТ РЕДАКТИРУЕМЫМ)`](<../ATTRIBUTES GLOBAL/contenteditable (ДЕЛАЕТ РЕДАКТИРУЕМЫМ).md>)
- [`data (ПОЛЬЗОВАТЕЛЬСКИЙ АТРИБУТ)`](<../ATTRIBUTES GLOBAL/data (ПОЛЬЗОВАТЕЛЬСКИЙ АТРИБУТ).md>)
- [`hidden (СКРЫВАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES GLOBAL/hidden (СКРЫВАЕТ ЭЛЕМЕНТ).md>)
- [`id (ИДЕНТИФИКАТОР)`](<../ATTRIBUTES GLOBAL/id (ИДЕНТИФИКАТОР).md>)
- [`lang (ЯЗЫК)`](<../ATTRIBUTES GLOBAL/lang (ЯЗЫК).md>)
- [`spellcheck (ПРОВЕРКА ПРАВОПИСАНИЯ)`](<../ATTRIBUTES GLOBAL/spellcheck (ПРОВЕРКА ПРАВОПИСАНИЯ).md>)
- [`style (СТИЛИ)`](<../ATTRIBUTES GLOBAL/style (СТИЛИ).md>)
- [`tabindex (ПОРЯДОК ТАБУЛЯЦИИ)`](<../ATTRIBUTES GLOBAL/tabindex (ПОРЯДОК ТАБУЛЯЦИИ).md>)
- [`title (ПОДСКАЗКА ПРИ НАВЕДЕНИИ)`](<../ATTRIBUTES GLOBAL/title (ПОДСКАЗКА ПРИ НАВЕДЕНИИ).md>)
