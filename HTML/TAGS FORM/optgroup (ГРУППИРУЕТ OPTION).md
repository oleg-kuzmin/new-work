# `<optgroup>` (Группирует option)

Тег `<optgroup>` позволяет группировать опции внутри элемента `<select>`. Внутри тега `<optgroup>` стандартно используется один или несколько тегов `<option>`.

`label` — обязательный атрибут. Имя группы будет отображено в выпадающем списке. Теоретически мы можем оставить атрибут пустым или не использовать его вообще, но в таком случае над списком будет пустое пространство.

## Пример

```html
<select>
  <optgroup label="Необычные цветы" disabled>
    <option>Ангулоя одноцветковая</option>
    <option>Обезьяний дракула</option>
    <option>Пассифлора инкарнатная</option>
  </optgroup>
</select>

<select name="variants">
  <optgroup label="Группа вариантов 1">
    <option value="1">Вариант 1</option>
    <option value="2">Вариант 2</option>
    <option value="3">Вариант 3</option>
  </optgroup>
  <optgroup label="Группа вариантов 2">
    <option value="4">Вариант 4</option>
    <option value="5">Вариант 5</option>
    <option value="6">Вариант 6</option>
  </optgroup>
</select>
```

## Атрибуты

- [`label (ИМЯ OPTGROUP)`](<../ATTRIBUTES FORM/label (ИМЯ OPTGROUP).md>)
- [`disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ)`](<../ATTRIBUTES FORM/disabled (ОТКЛЮЧАЕТ ЭЛЕМЕНТ).md>)

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
