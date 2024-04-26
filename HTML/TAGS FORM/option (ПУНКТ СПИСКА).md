# `<option>` (Пункт списка)

_(option: вариант, выбор)_

Тег `<option>` используется в интерактивных элементах управления для вёрстки одиночного пункта списка.

Тегом `<option>` размечается каждый элемент выпадающего списка `<select>`, группы опций `<optgroup>` или перечня `<datalist>`.

## Пример

```html
<form>
  <label for="city-select">Ваш город</label>
  <select name="city" id="city-select">
    <option value="">-- Выберите город --</option>
    <option value="petersburg">Санкт-Петербург</option>
    <option value="moscow">Москва</option>
    <option value="kazan">Казань</option>
    <option value="samara">Самара</option>
    <option value="perm">Пермь</option>
    <option value="novosibirsk">Новосибирск</option>
  </select>
</form>
```

## Атрибуты

- [`disabled`](<../ATTRIBUTES FORM/disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ).md>)
- [`label`](<../ATTRIBUTES FORM/label (ПОДПИСЬ OPTGROUP ИЛИ OPTION).md>)
- [`selected`](<../ATTRIBUTES FORM/selected (АВТОВЫБОР OPTION).md>)

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
