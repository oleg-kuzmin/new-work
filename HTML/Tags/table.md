# [`<table>`](../index.md)

_(table: таблица)_

Самый важный тег для создания таблицы — это `<table>`. С него всё начинается. Им всё заканчивается. Встречая этот тег в разметке, браузер понимает, что дальше будет таблица.

У таблицы нет встроенных стилей для отображения границ ячеек. Не удивляйтесь, если, написав разметку, вы не увидите рамки. Используйте CSS-свойство border.

Задать границы элементам `<tr>`, `<thead>`, `<tfoot>` и `<tbody>` нельзя, поэтому задавайте их тегам `<table>`, `<th>` или `<td>`.

Внимательно считайте количество ячеек в строках таблицы. Оно должно быть одинаковым. Особенно важно это делать, если растягиваете ячейки по горизонтали или вертикали. Не удивляйтесь, если снизу таблицы или сбоку в одной из строк внезапно будет торчать ячейка, нарушая красоту вашей таблицы. Вы просто где-то забыли удалить лишнюю ячейку.

Средствами CSS можно создать конструкцию, визуально максимально похожую на таблицу, но лучше так не делать. Важно не только внешнее сходство, но и смысловая нагрузка. Проще всего добиться совпадения смысла и визуального сходства, используя теги из этой статьи.

Ширина таблицы по умолчанию подстраивается под контент внутри, если не задавать дополнительные CSS-свойства.

Это приводит к определённым сложностям на адаптивных сайтах. Если контент не помещается на маленький экран, то таблица не сжимается, у неё появляется горизонтальный скролл.

У этой проблемы есть несколько потенциальных решений: скрывать не первостепенную информацию для пользователей мобильных устройств или перестраивать отображение таблицы, например, при помощи свойства `display`.

## Пример

```html
<table>
  <thead>
    <tr>
      <th>Место</th>
      <th>Оценка</th>
      <th>Название фильма</th>
      <th>Год выхода</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>9.1</td>
      <td>Зелёная миля</td>
      <td>1999</td>
    </tr>
    <tr>
      <td>2</td>
      <td>9.1</td>
      <td>Побег из Шоушенка</td>
      <td>1994</td>
    </tr>
    <tr>
      <td>3</td>
      <td>8.6</td>
      <td>Властелин колец: Возвращение Короля</td>
      <td>2003</td>
    </tr>
  </tbody>
</table>
```
