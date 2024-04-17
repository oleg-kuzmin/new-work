# form (СВЯЗЬ С ФОРМОЙ)

Cвязывает контролы внутри тега с формой (будто они располагаются внутри) — для этого в значении атрибута следует указать ID формы. Если атрибут не указать, элемент будет связан с ближайшей формой.

## Применяется к тегам:

- [`<object>`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>)
  <!-- - [`<button>`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>) -->
  <!-- - [`<fieldset>`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>) -->
  <!-- - [`<select>`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>) -->
  <!-- - [`<textarea>`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>) -->
  <!-- - [`<input>`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>) -->

## Пример

### `<object>`

```html
<object form="special-form" type="application/pdf" data="example.pdf" width="600" height="700">
  <a href="example.pdf">Лунная соната № 14 PDF</a>
</object>
```
