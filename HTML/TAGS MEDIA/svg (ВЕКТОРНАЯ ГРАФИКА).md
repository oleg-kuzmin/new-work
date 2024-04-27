# `<svg>` (Векторая графика)

SVG — векторный формат графики, доступный в вебе. Формат основан на технологии XML.

При способе подключения через html мы можем управлять SVG через стили.

Это даёт возможность даже анимировать векторное изображение и/или использовать JS.

Если захотите внести какие-то сложные правки в SVG, то можно использовать:
https://github.com/SVG-Edit/svgedit
https://svgedit.netlify.app/editor/index.html
https://inkscape.org/

Всегда перед использованием SVG в проекте прогоняйте его через оптимизатор SVGO. Он удалит всё ненужное, код станет приятнее и будет меньше весить. https://jakearchibald.github.io/svgomg/.

## Пример

```html
<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24">
  <path
    d="M16 12a3.001 3.001 0 016 0 3.001 3.001 0 01-6 0zm1 0a2 2 0
      114.001.001A2 2 0 0117 12zm-8 0a3.001 3.001 0 016 0 3.001 3.001 0
      01-6 0zm1 0a2 2 0 114.001.001A2 2 0 0110 12zm-8 0a3.001 3.001 0 016
      0 3.001 3.001 0 01-6 0zm1 0a2 2 0 114.001.001A2 2 0 013 12z"
  />
</svg>
```

## Атрибуты

- [`fill (ЦВЕТ ЗАЛИВКИ SVG)`](<../ATTRIBUTES/fill (ЦВЕТ ЗАЛИВКИ SVG).md>)
- [`preserveAspectRatio (ПРОПОРЦИИ SVG)`](<../ATTRIBUTES/preserveAspectRatio (ПРОПОРЦИИ SVG).md>)
- [`stroke (ТОЛЩИНА И ЦВЕТ ОБВОДКИ SVG)`](<../ATTRIBUTES/stroke (ТОЛЩИНА И ЦВЕТ ОБВОДКИ SVG).md>)
- [`viewBox (РАЗМЕРЫ ОКНА ОТОБРАЖЕНИЯ SVG)`](<../ATTRIBUTES/viewBox (РАЗМЕРЫ ОКНА ОТОБРАЖЕНИЯ SVG).md>)

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
