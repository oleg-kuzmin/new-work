# [`value`](../index.md)

Значение поля. Используется при отправке формы.

## Применяется к тегам

- [`<button>`](../Tags/button.md) кнопка
- [`<input>`](../Tags/input.md) поле ввода

## Пример

### `<button>`

Если указать у кнопки атрибут value с каким-то значением, то это значение будет передано на сервер в момент отправки данных из формы. На сервер передаётся пара «имя=значение». Имя кнопки можно задать атрибутом name.

В примере ниже вместе с данными формы на сервер отправится информация «diversion=Нет!».

```html
<form>
  <label>
    Соглашаетесь с нашими правилами?
    <input type="checkbox" name="agreement" />
  </label>
  <button type="submit" value="Нет!" name="diversion">Соглашаюсь</button>
</form>
```

### `<input>`

Атрибут `value` задаёт значение по умолчанию для поля ввода. Это значение будет передано на сервер в момент отправки формы.

Атрибут `value` можно задать для input любого типа, кроме `file`.

Поскольку у тега `<input>` большой список разных типов, то и атрибут в каждом конкретном случае имеет своё значение:

1. Для input с типами `button`, `reset` и `submit` задаёт текст на кнопке.
2. Для input с типами `text`, `password` и `hidden` задаёт начальное значение. В первых двух случаях пользователь сможет стереть его и написать что-то своё.
3. Для input с типами `checkbox`, `radio` и `image` — задаёт отправляемое на сервер значение, которое пользователь поменять не может.

### `<option>`

Если выбран какой-то пункт списка, то при отправке формы на сервер будет передано значение атрибута `value` этого пункта. Если атрибут не задан, то при отправке будет использоваться текстовое содержимое тега `<option>`.
