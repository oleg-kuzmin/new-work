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

- [`cols (КОЛИЧЕСТВО КОЛОНОК TEXTAREA)`](<../ATTRIBUTES FORM/cols.md>) количество колонок textarea
- [`rows (КОЛИЧЕСТВО СТРОК TEXTAREA)`](<../ATTRIBUTES FORM/rows.md>) количество строк textarea
- [`autocomplete (АВТОЗАПОЛНЕНИЕ)`](<../ATTRIBUTES FORM/autocomplete.md>) автозаполнение
- [`autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ)`](<../ATTRIBUTES FORM/autofocus.md>) фокус при загрузке страницы
- [`disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES FORM/disabled.md>) отключает элемент
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form.md>) связь с формой
- [`inputmode (КЛАВИАТУРА ДЛЯ INPUT)`](<../ATTRIBUTES FORM/inputmode.md>) клавиатура для input
- [`minlength, maxlength (ОГРАНИЧЕНИЕ СИМВОЛОВ)`](<../ATTRIBUTES FORM/minlength, maxlength.md>) ограничений символов
- [`placeholder (ПОДСКАЗКА ВВОДА)`](<../ATTRIBUTES FORM/placeholder.md>) подсказка ввода
- [`readonly (ТОЛЬКО ДЛЯ ЧТЕНИЯ)`](<../ATTRIBUTES FORM/readonly.md>) только для чтения
- [`required (ОБЯЗАТЕЛЬНОЕ ПОЛЕ)`](<../ATTRIBUTES FORM/required.md>) обязательное поле
- [`wrap (СИМВОЛЫ ПЕРЕНОСА В TEXTAREA)`](<../ATTRIBUTES FORM/wrap.md>) символы переноса в textarea
