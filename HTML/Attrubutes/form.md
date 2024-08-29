# [`form`](../index.md)

Cвязывает контролы внутри тега с формой (будто они располагаются внутри) — для этого в значении атрибута следует указать ID формы. Если атрибут не указать, элемент будет связан с ближайшей формой.

## Применяется к тегам

- [`<button>`](../Tags/button.md) кнопка
- [`<fieldset>`](../Tags/fieldset.md) группировка элементов
- [`<input>`](../Tags/input.md) поле ввода
- [`<meter>`](../Tags/meter.md) статический прогресс-бар
- [`<object>`](../Tags/object.md) встраивание медиа
- [`<output>`](../Tags/output.md) результат вычислений, действий
- [`<select>`](../Tags/select.md) выпадающий список
- [`<textarea>`](../Tags/textarea.md) многострочное поле ввода

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
  <input type="number" id="people-num" name="people" oninput="eggs.value = (parseInt(people.value) * 2)" />
  <p>Необходимое количество яиц:</p>
  <output role="status" form="my-form" name="eggs" for="people-num"></output>
</form>
```

### `<button>`

```html
<button type="submit" form="login">Отправить</button>
```

### `<input>`

```html
<input type="submit" form="login">Отправить</button>
```

### `<fieldset>`

```html
<fieldset form="special-form"></fieldset>
```

### `<select>`

```html
<form>
  <label for="city-select">Ваш город</label>
  <select name="city" id="city-select" form="special-form">
    <option value="">-- Выберите город --</option>
    <option value="petersburg">Санкт-Петербург</option>
    <option value="samara">Самара</option>
    <option value="perm">Пермь</option>
    <option value="novosibirsk">Новосибирск</option>
  </select>
</form>
```

### `<textarea>`

```html
<textarea form="my-form"></textarea>
```
