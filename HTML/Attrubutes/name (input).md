# [`name`](../index.md)

Имя. Используется при отправке формы.

## Применяется к тегам

- [`<button>`](../Tags/button.md) кнопка
- [`<form>`](../Tags/form.md) форма
- [`<input>`](../Tags/input.md) поле ввода
- [`<output>`](../Tags/output.md) результат вычислений, действий

## Пример

### `<output>`

```html
<form>
  <label for="people-num">Для скольких людей приготовить яичницу:</label>
  <input type="number" id="people-num" name="people" oninput="eggs.value = (parseInt(people.value) * 2)" />
  <p>Необходимое количество яиц:</p>
  <output role="status" name="eggs" for="people-num"></output>
</form>
```

### `<button>`

```html
<button name="button">Нажми меня</button>
```

### `<form>`

Уникальное имя формы. Пользователь его не увидит, зато скрипты смогут найти нужную форму. Например, по этому имени, можно получить доступ к форме из коллекции `document.forms`.

```html
<form name="my-form"></form>
```
