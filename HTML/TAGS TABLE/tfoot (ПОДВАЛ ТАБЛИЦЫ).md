# `<tfoot>` (Подвал таблицы)

Тег `<tfoot>` нужен для строки «Итого» — некой строки с итогом данных таблицы. В таблице может быть только один блок `<tfoot>`.

Браузер всегда отрисовывает `<tfoot>` внизу таблицы, даже если этот блок идёт в разметке не последним (хоть это и не очень логично).

Если по какой-то причине вы не использовали в таблице `<thead>` или `<tbody>`, то футер будет отрисован после всех `<tr>`.

По семантике этот тег похож на `<footer>`, только в пределах таблицы.

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
  <tfoot>
    <tr>
      <td>Средняя цена:</td>
      <td>$758.8</td>
    </tr>
  </tfoot>
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
