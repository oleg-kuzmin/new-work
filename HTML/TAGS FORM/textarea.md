## `<textarea>` (Многострочное поле ввода)

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

- [`cols (КОЛИЧЕСТВО КОЛОНОК TEXTAREA)`](<../ATTRIBUTES FORM/cols.md>)
- [`rows (КОЛИЧЕСТВО СТРОК TEXTAREA)`](<../ATTRIBUTES FORM/rows.md>)
- [`autocomplete (АВТОЗАПОЛНЕНИЕ)`](<../ATTRIBUTES FORM/autocomplete.md>)
- [`autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ)`](<../ATTRIBUTES FORM/autofocus.md>)
- [`disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES FORM/disabled.md>)
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form.md>)
- [`formenctype (ТИП ШИФРОВАНИЯ ДАННЫХ)`](<../ATTRIBUTES FORM/formenctype.md>)
- [`inputmode (КЛАВИАТУРА ДЛЯ INPUT)`](<../ATTRIBUTES FORM/inputmode.md>)
- [`minlength, maxlength (ОГРАНИЧЕНИЕ СИМВОЛОВ)`](<../ATTRIBUTES FORM/minlength, maxlength.md>)
- [`placeholder (ПОДСКАЗКА ВВОДА)`](<../ATTRIBUTES FORM/placeholder.md>)
- [`readonly (ТОЛЬКО ДЛЯ ЧТЕНИЯ)`](<../ATTRIBUTES FORM/readonly.md>)
- [`required (ОБЯЗАТЕЛЬНОЕ ПОЛЕ)`](<../ATTRIBUTES FORM/required.md>)
- [`wrap (СИМВОЛЫ ПЕРЕНОСА В TEXTAREA)`](<../ATTRIBUTES FORM/wrap.md>)
