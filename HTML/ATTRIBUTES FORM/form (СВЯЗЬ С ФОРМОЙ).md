# `form` (Связь с формой)

Cвязывает контролы внутри тега с формой (будто они располагаются внутри) — для этого в значении атрибута следует указать ID формы. Если атрибут не указать, элемент будет связан с ближайшей формой.

## Применяется к тегам:

- [`<object>`](<../TAGS MEDIA/object (ВСТРАИВАНИЕ МЕДИА).md>)
- [`<meter>`](<../TAGS UI/meter (СТАТИЧЕСКИЙ ПРОГРЕСС-БАР).md>)
- [`<output>`](<../TAGS UI/output (РЕЗУЛЬТАТ ВЫЧИСЛЕНИЙ, ДЕЙСТВИЙ).md>)

## Пример

### `<object>`

```html
<object form="special-form" type="application/pdf" data="example.pdf" width="600" height="700">
  <a href="example.pdf">Лунная соната № 14 PDF</a>
</object>
```

### `<meter>`

Нужен для связи формы со счётчиком, когда он не вложен внутрь `<form>`

```html
<meter class="meter" form="my-form" min="1" max="10" low="2" high="10" value="3"></meter>
```

### `<output>`

Указывается ID формы в этом же документе, с которой связывается поле вывода.

```html
<form id="my-form">
  <label for="people-num">Для скольких людей приготовить яичницу:</label>
  <input
    type="number"
    id="people-num"
    name="people"
    oninput="eggs.value = (parseInt(people.value) * 2)"
  />
  <p>Необходимое количество яиц:</p>
  <output role="status" form="my-form" name="eggs" for="people-num"></output>
</form>
```
