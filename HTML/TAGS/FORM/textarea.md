## `<textarea>`

Тег `<textarea>` используется для создания многострочного поля ввода. Например, поля ввода комментария.

Нужно отметить, что в этом поле можно писать только чистый текст.

Поле `<textarea>` стилизуется так же, как и поле ввода `<input>`. К нему применимы все свойства блочной модели.

По умолчанию поле ввода `<textarea>` может изменять свой размер, если потянуть за нижний правый угол. Это поведение можно изменить, управляя CSS-свойством resize.

Атрибут value у многострочного поля отсутствует, а значение по умолчанию задаётся по-другому. Текст, расположенный между открывающим и закрывающим тегом `<textarea>` и является значением по умолчанию.

## Пример

```html
<label for="story">Расскажите о себе:</label>;
<textarea id="story" name="story" rows="5" cols="33">
  Frontend-разработчик со стажем
</textarea>
```

## Атрибуты

- [`cols`](../../ATTRIBUTES/FORM/cols.md) количество колонок textarea
- [`rows`](../../ATTRIBUTES/FORM/rows.md) количество строк textarea
- [`autocomplete`](../../ATTRIBUTES/FORM/autocomplete.md) автозаполнение
- [`autofocus`](../../ATTRIBUTES/FORM/autofocus.md) фокус при загрузке страницы
- [`disabled`](../../ATTRIBUTES/FORM/disabled.md) отключает элемент
- [`form`](../../ATTRIBUTES/FORM/form.md) связь с формой
- [`inputmode`](../../ATTRIBUTES/FORM/inputmode.md) клавиатура для input
- [`minlength, maxlength`](<../../ATTRIBUTES/FORM/minlength, maxlength.md>) ограничений символов
- [`placeholder`](../../ATTRIBUTES/FORM/placeholder.md) подсказка ввода
- [`readonly`](../../ATTRIBUTES/FORM/readonly.md) только для чтения
- [`required`](../../ATTRIBUTES/FORM/required.md) обязательное поле
- [`wrap`](../../ATTRIBUTES/FORM/wrap.md) символы переноса в textarea
