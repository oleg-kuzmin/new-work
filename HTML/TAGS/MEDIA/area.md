# `<area>`

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

- [`alt`](../ATTRIBUTES/alt.md) альтернативный текст
- [`coords`](../ATTRIBUTES/coords.md) координаты областей карты
- [`href`](../ATTRIBUTES/href.md) ссылка на url
- [`ping`](../ATTRIBUTES/ping.md) post-запрос при переходе по карте
- [`referrerpolicy`](../ATTRIBUTES/referrerpolicy.md) данные при переходе по карте
- [`rel`](<../ATTRIBUTES/rel (A).md>) связь ссылки со страницей
- [`shape`](../ATTRIBUTES/shape.md) форма областей карты
- [`target`](../ATTRIBUTES/target.md) способ открытия ссылки