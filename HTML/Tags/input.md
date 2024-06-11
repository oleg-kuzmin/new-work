# `<input>`

_(input: ввод)_

`<input>` — это контейнер для интерактивных элементов, с помощью которых пользователь может ввести данные, что-то выбрать, поставить галочку или нажать кнопку.

## Пример

### `<input>` внутри `<form>`

```html
<form class="form">
  <input type="text" placeholder="Введите логин" />
</form>
```

### `<input>` снаружи `<form>`

```html
<input type="button" placeholder="Введите логин" form="my-form" />
<form class="form" id="my-form"></form>
```

## Атрибуты

- [`accept`](../Attrubutes/accept.md) тип файла для input file
- [`autocomplete`](../Attrubutes/autocomplete.md) автозаполнени
- [`autofocus`](../Attrubutes/autofocus.md) фокус при загрузке страницы
- [`capture`](../Attrubutes/capture.md) вид камеры для input file
- [`defaultchecked`](../Attrubutes/defaultchecked.md) автовыбор checkbox, radio
- [`disabled`](../Attrubutes/disabled.md) отключает элемент
- [`form`](../Attrubutes/form.md) связь с формой
- [`formenctype`](../Attrubutes/formenctype.md) переопределяет тип шифрования данных
- [`inputmode`](../Attrubutes/inputmode.md) клавиатура для input
- [`list`](../Attrubutes/list.md) ссылка на id datalist
- [`min`](../Attrubutes/min.md) минимальное значение
- [`max`](../Attrubutes/max.md) максимальное значение
- [`minlength, maxlength`](<../Attrubutes/minlength, maxlength.md>) ограничение символов
- [`multiple`](../Attrubutes/multiple.md) выбор нескольких значений
- [`pattern`](../Attrubutes/pattern.md) регулярное выражение
- [`placeholder`](../Attrubutes/placeholder.md) подсказка ввода
- [`readonly`](../Attrubutes/readonly.md) только для чтения
- [`required`](../Attrubutes/required.md) обязательное поле
- [`size`](../Attrubutes/size.md) ширина поля или число опций
- [`step`](../Attrubutes/step.md) шаг изменения input
- [`type`](<../Attrubutes/type (input).md>) тип input
- [`value`](<../Attrubutes/value (input).md>) значение поля ввода
