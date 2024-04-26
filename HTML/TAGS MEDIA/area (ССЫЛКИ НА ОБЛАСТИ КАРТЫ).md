# `<area>` (Ссылки на области карты)

_(area: область)_

С помощью тега `<area>` можно сделать красивую навигацию, разметив обычную картинку областями и указав для них ссылки.

Тег `<area>` помещаем внутрь `<map>` и прописываем два обязательных атрибута: `shape` и `coords`, а также `href`, `target`, `alt`.

Если атрибут `href` отсутствует, то все остальные атрибуты, кроме `shape` и `coords`, должны быть опущены.

Тег `<area>` создаёт на картинке невидимую область по координатам, а потом присваивает ей ссылку. Жмём на область — переходим по ссылке.

Самые ёмкие в записи формы `<area>` — прямоугольник и круг, поскольку они требуют меньше всего координат. Если вам плохо от огромного кода, лучше отказаться от произвольных областей.

Не стоит загружать в фотошоп картинку и выискивать каждую точку координат. В интернете полно бесплатных ресурсов, где можно загрузить изображение и просто кликать мышью по точкам, а программа выдаст готовый код! Искать можно так: «генератор координат HTML».

## Пример

```html
<map name="map">
  <area shape="rect" coords="47,4,319,64" href="/html/" target="_blank" alt="HTML" />
  <area shape="rect" coords="46,69,318,129" href="/css/" target="_blank" alt="CSS" />
  <area shape="rect" coords="46,133,318,193" href="/js/" target="_blank" alt="JS" />
</map>
<img usemap="#map" src="/images/map.svg" />
```

## Атрибуты

- [`alt`](<../ATTRIBUTES/alt (АЛЬТЕРНАТИВНЫЙ ТЕКСТ).md>)
- [`coords`](<../ATTRIBUTES/coords (КООРДИНАТЫ ОБЛАСТЕЙ).md>)
- [`href`](<../ATTRIBUTES/href (ССЫЛКА НА URL).md>)
- [`ping`](<../ATTRIBUTES/ping (POST-ЗАПРОС на сервер).md>)
- [`referrerpolicy`](<../ATTRIBUTES/referrerpolicy (ДАННЫЕ ПРИ ПЕРЕХОДЕ).md>)
- [`rel`](<../ATTRIBUTES/rel (СВЯЗЬ ССЫЛКИ СО СТРАНИЦЕЙ).md>)
- [`shape`](<../ATTRIBUTES/shape (ФОРМА ОБЛАСТИ).md>)
- [`target`](<../ATTRIBUTES/target (СПОСОБ ОТКРЫТИЯ ССЫЛКИ).md>)

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
