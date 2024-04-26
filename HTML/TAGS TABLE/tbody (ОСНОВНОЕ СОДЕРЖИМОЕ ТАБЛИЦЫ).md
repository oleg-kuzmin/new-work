# `<tbody>` (Основное содержимое таблицы)

Этот тег предназначен для основной части таблицы. Внутрь него помещаются строки с данными.
Можно использовать несколько `<tbody>` внутри таблицы, разделяя тем самым данные на отдельные блоки.

Этот тег схож по семантике с `<main>`, но в пределах таблицы.

Не имеет дефолтных стилей и не влияет на внешний вид таблицы. Только на семантику.

Если вы не используете ни один из тегов `<thead>`, `<tbody>`, `<tfoot>`, то браузер самостоятельно добавит `<tbody>` при отрисовке таблицы.

## Пример

```html
<table>
  <thead>
    <tr>
      <th>Модель</th>
      <th>Цена</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iPhone 12 Pro</td>
      <td>$999</td>
    </tr>
    <tr>
      <td>iPhone 12</td>
      <td>$799</td>
    </tr>
    <tr>
      <td>iPhone 12 mini</td>
      <td>$699</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td>Xiaomi Mi 10</td>
      <td>$768</td>
    </tr>
    <tr>
      <td>Xiaomi Black Shark 3 128 Gb</td>
      <td>$529</td>
    </tr>
  </tbody>
</table>
```

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
