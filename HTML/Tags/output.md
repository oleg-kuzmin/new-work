# [`<output>`](../index.md)

_(output: выход, вывод)_

Тег `<output>` позволяет выводить результаты вычислений или действий пользователя. Относится к элементам семантической вёрстки.

Элемент `<output>` используется в тех случаях, когда пользователю надо показать результат работы программы в реальном времени, например:

1. информация, которую пользователь вводит или изменяет в форме;
2. вывод расчётов по данным, которые указал пользователь (калькулятор, гороскоп и тому подобное);
3. всплывающие уведомления — тосты.

`<output>` — парный тег. Допустимо вставлять пустой тег в разметку и класть выводимое значение внутрь него при помощи JavaScript.

К тегу `<output>` также применяются все глобальные атрибуты.

`<output>` можно связать с рейтингом, чтобы увидеть числовой результат.

Также тег можно использовать для вывода всплывающих уведомлений.

## Пример

```html
<form>
  <label for="people-num">Для скольких людей приготовить яичницу:</label>
  <input type="number" id="people-num" name="people" oninput="eggs.value = (parseInt(people.value) * 2)" />
  <p>Необходимое количество яиц:</p>
  <output role="status" name="eggs" for="people-num"></output>
</form>
```

## Атрибуты

- [`for`](../Attrubutes/for.md) связь с элементом формы
- [`form`](../Attrubutes/form.md) связь с формой
- [`name`](<../Attrubutes/name (button, form, input, output).md>) имя
