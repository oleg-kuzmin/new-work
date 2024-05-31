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

- [`data (ССЫЛКА НА URL MEDIA)`](../ATTRIBUTES/data.md)
- [`type (ТИП MIME)`](<../ATTRIBUTES/type.md>)
- [`name (ИМЯ)`](../ATTRIBUTES/name.md)
- [`usemap (ID КАРТЫ)`](../ATTRIBUTES/usemap.md)
- [`width, height (ШИРИНА, ВЫСОТА)`](<../ATTRIBUTES/width, height.md>)
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form.md>)
