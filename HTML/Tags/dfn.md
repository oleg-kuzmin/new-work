# `<dfn>`

_(definition: определение)_

Тег `<dfn>` используется для вывода терминов или расшифровки сокращений.

У `<dfn>` есть встроенная роль term. Скринридеры не рассказывают о роли, но зачитывают саму аббревиатуру и её расшифровку из title.

В тег `<dfn>` оборачиваются сами термины, а их определения должны содержаться в ближайшем родительском теге `<p>`, `<dl>` или `<section>`.

По умолчанию браузеры применяют к тексту внутри `<dfn>` курсивное начертание с помощью font-style: italic.

`<dfn>` часто комбинируется с тегом `<abbr>` для раскрытия смысла аббревиатуры. В примере ниже оборачиваем «ЧАВО» в `<abbr>`, а при первом появлении нового термина добавляем `<dfn>`, указывая более точное определение. Для ссылок на это определение можно использовать тег `<a>`.

## Пример

```html
<!-- 1 Вариант -->
<dfn title="Часто задаваемые вопросы">ЧАВО</dfn>

<!-- 2 Вариант -->
<p>
  <dfn id="chavo">
    <abbr title="Часто задаваемые вопросы">ЧАВО</abbr>
  </dfn>
  — сокращённая форма фразы «Часто задаваемые вопросы».
</p>

<!-- 3 Вариант -->
<dfn>Часто задаваемые вопросы</dfn>
```

## Атрибуты

- [`title`](<../Attrubutes/title (abbr).md>) расшифровка аббревиатуры, термина