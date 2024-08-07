# [`<code>`](../index.md)

_(code: код)_

Тег `<code>` используется для вывода фрагментов программного кода.

`<code>` используется для вывода любой информации, которая может быть обработана компьютером как программный код. Помимо непосредственно кода, сюда также относятся названия файлов, конфигурационные файлы, XML-элементы и т. д.

Тег `<code>` по умолчанию строчный и браузеры не применяют к тексту внутри него никакого форматирования, кроме font-family: monospace, и не подсвечивают синтаксис. Они не анализируют содержимое и не делают никаких предположений, на каком языке программирования написан вставленный код.

Изначально `<code>` предназначен для вывода информации во фразовом контексте. Например, мы можем вставить код в середину предложения.

Если мы хотим красивого форматирования и подсветки синтаксиса, мы должны использовать сторонние инструменты и дополнительно пометить код, например, при помощи атрибута class. Для этого обычно используются библиотеки, такие как `highlight.js` и `prism.js.`

У `<code>` есть встроенная роль code. Хотя скринридеры пока не рассказывают о ней пользователям и не изменяют режим взаимодействия с таким содержимым, роль добавляет тегу семантический вес.

Тег `<code>` можно вкладывать внутрь тега `<pre>`, а наоборот делать нельзя.

## Пример

```html
<code>const element = document.getElementById('some-id')</code>

<p>Пожалуй, <code>i</code> — самое часто встречающееся имя переменной.</p>
```
