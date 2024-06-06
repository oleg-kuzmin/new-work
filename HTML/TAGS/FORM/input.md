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

- [`accept`](../../ATTRIBUTES/FORM/accept.md) тип файла для input file
- [`autocomplete`](../../ATTRIBUTES/FORM/autocomplete.md) автозаполнени
- [`autofocus`](../../ATTRIBUTES/FORM/autofocus.md) фокус при загрузке страницы
- [`capture`](../../ATTRIBUTES/FORM/capture.md) вид камеры для input file
- [`defaultchecked`](../../ATTRIBUTES/FORM/defaultchecked.md) автовыбор checkbox, radio
- [`disabled`](../../ATTRIBUTES/FORM/disabled.md) отключает элемент
- [`form`](../../ATTRIBUTES/FORM/form.md) связь с формой
- [`formenctype`](../../ATTRIBUTES/FORM/formenctype.md) переопределяет тип шифрования данных
- [`inputmode`](../../ATTRIBUTES/FORM/inputmode.md) клавиатура для input
- [`list`](../../ATTRIBUTES/FORM/list.md) ссылка на id datalist
- [`min`](../../ATTRIBUTES/FORM/min.md) минимальное значение
- [`max`](../../ATTRIBUTES/FORM/max.md) максимальное значение
- [`minlength, maxlength`](<../../ATTRIBUTES/FORM/minlength, maxlength.md>) ограничение символов
- [`multiple`](../../ATTRIBUTES/FORM/multiple.md) выбор нескольких значений
- [`pattern`](../../ATTRIBUTES/FORM/pattern.md) регулярное выражение
- [`placeholder`](../../ATTRIBUTES/FORM/placeholder.md) подсказка ввода
- [`readonly`](../../ATTRIBUTES/FORM/readonly.md) только для чтения
- [`required`](../../ATTRIBUTES/FORM/required.md) обязательное поле
- [`size`](../../ATTRIBUTES/FORM/size.md) ширина поля или число опций
- [`step`](../../ATTRIBUTES/FORM/step.md) шаг изменения input
- [`type`](<../../ATTRIBUTES/FORM/type (INPUT).md>) тип input
- [`value`](../../ATTRIBUTES/FORM/value.md) значение поля ввода
