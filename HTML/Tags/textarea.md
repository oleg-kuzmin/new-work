## [`<textarea>`](../index.md)

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

- [`autocomplete`](../Attrubutes/autocomplete.md) автозаполнение
- [`autofocus`](../Attrubutes/autofocus.md) фокус при загрузке страницы
- [`cols`](../Attrubutes/cols.md) количество колонок
- [`disabled`](../Attrubutes/disabled.md) отключает элемент
- [`form`](../Attrubutes/form.md) связь с формой
- [`inputmode`](../Attrubutes/inputmode.md) клавиатура для ввода
- [`minlength, maxlength`](<../Attrubutes/minlength, maxlength.md>) ограничений символов
- [`placeholder`](../Attrubutes/placeholder.md) подсказка ввода
- [`readonly`](../Attrubutes/readonly.md) только для чтения
- [`required`](../Attrubutes/required.md) обязательное поле
- [`rows`](../Attrubutes/rows.md) количество строк
- [`wrap`](../Attrubutes/wrap.md) символы переноса
