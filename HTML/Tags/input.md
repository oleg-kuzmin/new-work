# [`<input>`](../index.md)

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

- [`accept` (input type="file")](../Attrubutes/accept.md) тип файла
- [`autocomplete`](../Attrubutes/autocomplete.md) автозаполнени
- [`autofocus`](../Attrubutes/autofocus.md) фокус при загрузке страницы
- [`capture` (input type="file")](../Attrubutes/capture.md) вид камеры
- [`defaultchecked` (input type="checkbox, radio")](../Attrubutes/defaultchecked.md) автовыбор
- [`disabled`](../Attrubutes/disabled.md) отключает элемент
- [`form`](../Attrubutes/form.md) связь с формой
- [`formenctype`](../Attrubutes/formenctype.md) переопределяет тип шифрования данных
- [`inputmode`](../Attrubutes/inputmode.md) клавиатура для ввода
- [`list`](../Attrubutes/list.md) ссылка на datalist
- [`max`](../Attrubutes/max.md) максимальное значение
- [`min`](../Attrubutes/min.md) минимальное значение
- [`minlength, maxlength`](<../Attrubutes/minlength, maxlength.md>) ограничение символов
- [`multiple`](../Attrubutes/multiple.md) выбор нескольких значений
- [`name`](<../Attrubutes/name (button, form, input, output).md>) имя
- [`pattern`](../Attrubutes/pattern.md) регулярное выражение
- [`placeholder`](../Attrubutes/placeholder.md) подсказка ввода
- [`readonly`](../Attrubutes/readonly.md) только для чтения
- [`required`](../Attrubutes/required.md) обязательное поле
- [`size`](../Attrubutes/size.md) ширина поля или число опций
- [`step`](../Attrubutes/step.md) шаг изменения
- [`type`](<../Attrubutes/type (input).md>) тип
- [`value`](<../Attrubutes/value (button, input).md>) значение поля ввода
