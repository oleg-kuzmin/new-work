# `<search>` (Семантическая секция для поиска)

_(search: поиск)_

Семантический тег-обёртка для блока с поиском или фильтром.

Этот семантический тег пришёл на замену ARIA-атрибуту role="search". Им можно обернуть форму с поиском или блок на странице с результатами фильтрации.

В стандарте HTML появился новый семантический элемент `<search>`. Он обозначает раздел страницы, который используется для поиска или фильтрации. Он должен содержать элементы управления формой (например, текстовые поля, выпадающие меню, кнопки и так далее), а область поиска или фильтрации может быть любой: от одного документа до всего интернета.

Мы можем использовать тег `<search>`, чтобы обернуть им форму.

Область поиска не обязательно должна представлять собой текстовый ввод с кнопкой для поиска на сайте или в Интернете. Можно использовать `<search>` для фильтрации результатов или строк таблицы. Его применение выходит за рамки простого ввода текста и полей для поиска.

## Пример

```html
<search>
  <form method="get" action="/search">
    <input type="search" name="search-text" />
    <button>Search</button>
  </form>
</search>
```

```html
<search>
  <h4>Поиск по фильтрам</h4>
  <form>
    <label>
      цвет
      <select name="color">
        <option value="red">Красный</option>
        <option value="green">Зелёный</option>
        <option value="blue">Синий</option>
      </select>
    </label>
  </form>
</search>
```

```html
<search>
  <h2>Фильтрация результатов</h2>
  <form>
    <label for="cartype">Класс автомобиля</label>
    <select id="cartype">
      <option value="coupe">Купе</option>
      <option value="sedan">Седан</option>
    </select>
    <label for="electric">Электрический?</label>
    <input type="checkbox" id="electric" />
  </form>
</search>
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
