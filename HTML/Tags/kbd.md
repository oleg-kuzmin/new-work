# `<kbd>`

_(keyboard: клавиатура)_

Тег `<kbd>` обозначает пользовательский ввод: с клавиатуры, голосом, указателем или другим образом.

По умолчанию браузеры выводят `<kbd>` моноширинным шрифтом.

При создании справочной информации по компьютерной тематике, часто бывает необходимо показать пользователю, как будет выглядеть программный код. В таких случаях на помощь приходят теги `<code>`, `<samp>`, `<var>` и `<pre>` в сочетании с `<kbd>`.

К тегу `<kbd>` применяются все глобальные атрибуты.

`<kbd>` никак не влияет на скринридеры и другие вспомогательные технологии. Они рассказывают о содержимом тега как об обычном тексте без роли.

Если нужно рассказать о сочетании клавиш только пользователям скринридеров, используйте специальный атрибут aria-keyshortcuts.

При совместном использовании тегов `<code>` и `<pre>` необходимо соблюдать порядок вложенности: тег `<code>` можно размещать внутри тега `<pre>`. А вот `<pre>` внутри тега `<code>` — это уже нарушение правила вложенности, в чём можно убедиться на сайте Can I Include.

## Пример

```html
<p>Для вызова справки нажмите <kbd>?</kbd>.</p>
```

Например, в ходе выполнения программы надо подсказать пользователю о вводе переменной. Для отображения выходных данных используется тег `<samp>`, а для переменной внутри него — теги `<var>` и `<kbd>`.

```html
<p>В ходе работы программы вам надо указать необходимое количество итераций:</p>
<p>
  <samp>
    Укажите значение переменной
    <var>
      <kbd>TmplRepeat</kbd>
    </var>
  </samp>
</p>
```

Для вывода сложных комбинаций клавиш, каждая отдельная клавиша оборачивается в свой тег `<kbd>`. При желании, всю комбинацию можно обернуть в ещё один `<kbd>` для группировки. В этом примере символ плюса не является клавишей, которую нужно нажать, поэтому он не обёрнут в `<kbd>`.

```html
<p>
  Эту страницу можно распечатать, если нажать
  <kbd> <kbd>Ctrl</kbd><kbd>P</kbd></kbd>
</p>
```

Также `<kbd>` используется для вывода команд в интерфейсе

```html
<p>
  Для поиска по проекту откройте меню
  <kbd>Find in Files…</kbd>.
</p>
```