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

- [`cols (КОЛИЧЕСТВО КОЛОНОК TEXTAREA)`](<../ATTRIBUTES FORM/cols (КОЛИЧЕСТВО КОЛОНОК TEXTAREA).md>)
- [`rows (КОЛИЧЕСТВО СТРОК TEXTAREA)`](<../ATTRIBUTES FORM/rows (КОЛИЧЕСТВО СТРОК TEXTAREA).md>)
- [`autocomplete (АВТОЗАПОЛНЕНИЕ)`](<../ATTRIBUTES FORM/autocomplete (АВТОЗАПОЛНЕНИЕ).md>)
- [`autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ)`](<../ATTRIBUTES FORM/autofocus (ФОКУС ПРИ ЗАГРУЗКЕ СТРАНИЦЫ).md>)
- [`disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES FORM/disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ).md>)
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form (СВЯЗЬ С ФОРМОЙ).md>)
- [`formenctype (ТИП ШИФРОВАНИЯ ДАННЫХ)`](<../ATTRIBUTES FORM/formenctype (ТИП ШИФРОВАНИЯ ДАННЫХ).md>)
- [`inputmode (КЛАВИАТУРА ДЛЯ INPUT)`](<../ATTRIBUTES FORM/inputmode (КЛАВИАТУРА ДЛЯ INPUT).md>)
- [`minlength, maxlength (ОГРАНИЧЕНИЕ СИМВОЛОВ)`](<../ATTRIBUTES FORM/minlength, maxlength (ОГРАНИЧЕНИЕ СИМВОЛОВ).md>)
- [`placeholder (ПОДСКАЗКА ВВОДА)`](<../ATTRIBUTES FORM/placeholder (ПОДСКАЗКА ВВОДА).md>)
- [`readonly (ТОЛЬКО ДЛЯ ЧТЕНИЯ)`](<../ATTRIBUTES FORM/readonly (ТОЛЬКО ДЛЯ ЧТЕНИЯ).md>)
- [`required (ОБЯЗАТЕЛЬНОЕ ПОЛЕ)`](<../ATTRIBUTES FORM/required (ОБЯЗАТЕЛЬНОЕ ПОЛЕ).md>)
- [`wrap (СИМВОЛЫ ПЕРЕНОСА В TEXTAREA)`](<../ATTRIBUTES FORM/wrap (СИМВОЛЫ ПЕРЕНОСА В TEXTAREA).md>)

## Глобальные атрибуты

- [`class (ЗАДАЕТ КЛАСС ЭЛЕМЕНТУ)`](<../ATTRIBUTES GLOBAL/class (ЗАДАЕТ КЛАСС ЭЛЕМЕНТУ).md>)
- [`contenteditable (ДЕЛАЕТ РЕДАКТИРУЕМЫМ)`](<../ATTRIBUTES GLOBAL/contenteditable (ДЕЛАЕТ РЕДАКТИРУЕМЫМ).md>)
- [`data (ПОЛЬЗОВАТЕЛЬСКИЙ АТРИБУТ)`](<../ATTRIBUTES GLOBAL/data (ПОЛЬЗОВАТЕЛЬСКИЙ АТРИБУТ).md>)
- [`hidden (СКРЫВАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES GLOBAL/hidden (СКРЫВАЕТ ЭЛЕМЕНТ).md>)
- [`id (ИДЕНТИФИКАТОР)`](<../ATTRIBUTES GLOBAL/id (ИДЕНТИФИКАТОР).md>)
- [`lang (ЯЗЫК)`](<../ATTRIBUTES GLOBAL/lang (ЯЗЫК).md>)
- [`spellcheck (ПРОВЕРКА ПРАВОПИСАНИЯ)`](<../ATTRIBUTES GLOBAL/spellcheck (ПРОВЕРКА ПРАВОПИСАНИЯ).md>)
- [`style (СТИЛИ)`](<../ATTRIBUTES GLOBAL/style (СТИЛИ).md>)
- [`tabindex (ПОРЯДОК ТАБУЛЯЦИИ)`](<../ATTRIBUTES GLOBAL/tabindex (ПОРЯДОК ТАБУЛЯЦИИ).md>)
- [`title (ПОДСКАЗКА ПРИ НАВЕДЕНИИ)`](<../ATTRIBUTES GLOBAL/title (ПОДСКАЗКА ПРИ НАВЕДЕНИИ).md>)
