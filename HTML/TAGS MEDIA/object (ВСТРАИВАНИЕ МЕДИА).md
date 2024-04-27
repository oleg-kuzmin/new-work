# `<object>` (Встраивание медиа)

Тег `<object>` используется для встраивания на страницу других страниц или мультимедийных элементов (PDF, Flash, видео- или аудио-плееров).

## Пример

### `youtube`

Обычно поле type нужно указывать, но для YouTube-видео это необязательно.

```html
<object type="video/mp4" data="https://www.youtube.com/watch?v=dQw4w9WgXcQ" width="1280" height="720"></object>
```

### `pdf`

Если браузер не поддерживает тип встроенного файла, то он покажет вложенное содержимое в качестве фолбэка. В нашем примере, если встраивание PDF-инструкции не поддерживается, то мы увидим ссылку на её скачивание.

```html
<object class="pdf_example" type="application/pdf" data="example.pdf" width="600" height="700">
  <a href="example.pdf">Лунная соната № 14 PDF</a>
</object>
```

## Атрибуты

- [`data (ССЫЛКА НА URL MEDIA)`](<../ATTRIBUTES/data (ССЫЛКА НА URL MEDIA).md>)
- [`type (ТИП MIME)`](<../ATTRIBUTES/type (ТИП MIME).md>)
- [`name (ИМЯ)`](<../ATTRIBUTES/name (ИМЯ).md>)
- [`usemap (ID КАРТЫ)`](<../ATTRIBUTES/usemap (ID КАРТЫ).md>)
- [`width, height (ШИРИНА, ВЫСОТА)`](<../ATTRIBUTES/width, height (ШИРИНА, ВЫСОТА).md>)
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form (СВЯЗЬ С ФОРМОЙ).md>)

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
