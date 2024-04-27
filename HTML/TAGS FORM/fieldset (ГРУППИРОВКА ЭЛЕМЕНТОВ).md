# `<fieldset>` (Группировка элементов)

Тег `<fieldset>` группирует элементы формы (поля ввода `<input>`, `<textarea>`, выпадающие списки `<select>` и другие) в блок с характерным выделением границ. Опционально с помощью тега `<legend>` внутри `<fieldset>` можно задать заголовок для создаваемой группы (он может быть только один и обязательно должен идти первым вложенным элементом).

Для добавления подписи внутри `<fieldset>` следует использовать `<legend>`.

## Пример

```html
<form>
  <fieldset>
    <legend>Прозвище Дракса из «Стражей Галактики»?</legend>
    <label>
      <input type="radio" name="answer" value="Exterminator" />
      Уничтожитель
    </label>
    <label>
      <input type="radio" name="answer" value="Destroyer" />
      Разрушитель
    </label>
    <label>
      <input type="radio" name="answer" value="Accuser" />
      Обвинитель
    </label>
    <label>
      <input type="radio" name="answer" value="Sweet-tooth" />
      Сладкоежка
    </label>
  </fieldset>
</form>
```

## Атрибуты

- [`disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES FORM/disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ).md>)
- [`form (СВЯЗЬ С ФОРМОЙ)`](<../ATTRIBUTES FORM/form (СВЯЗЬ С ФОРМОЙ).md>)

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
