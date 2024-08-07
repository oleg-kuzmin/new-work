# [`<samp>`](../index.md)

_(sample: пример, образец)_

Тег `<samp>` используется для оформления вывода данных, которые показываются пользователю в результате выполнения программы. Содержимое этого элемента воспринимается устройствами как простой текст.

Внутри тега `<samp>` размещается информация, которую пользователь может получить в процессе взаимодействия с программой:

1. вывод информации о ходе выполнения программы;
2. ошибки, предупреждения и подсказки инструментов разработчика или операционной системы;
3. приглашение к вводу данных.

В браузерах текст внутри `<samp>` по умолчанию отображается моноширинным шрифтом.

Если нужно показать пользователю результат работы программы в реальном времени, лучше использовать тег `<output>`, например:

1. информация, которую пользователь вводит или изменяет в форме;
2. вывод расчётов по данным, которые указал пользователь (калькулятор, гороскоп и т. п.).

К тегу `<samp>` применяются все глобальные атрибуты.

## Пример

```html
<p>
  После завершения всех активных сеансов на экране появится сообщение:
  <samp>Теперь питание компьютера можно отключить.</samp>
</p>
```

### Пример c тегом `<var>`

```html
<div>
  <p>В ходе выполнения программы вам будет предложено указать расстояние:</p>
  <p>
    <samp> Введите значение для переменной <var>Distance</var>: </samp>
  </p>
</div>
```

### Пример c тегом `<code>`

```html
<div>
  <p>Следующая команда выведет в консоли браузера результат сложения двух чисел:</p>
  <pre>
    <code>console.log(2.3 + 2.4)</code>
    <samp>4.699999999999999</samp>
  </pre>
</div>
```

### Пример c тегом `<kbd>`

```html
<div>
  <p>Неправильно введённая команда не будет выполнена и в консоли отобразится ошибка:</p>
  <samp>
    <span class="console-name">user@machine:~$</span> <kbd>ckear</kbd>
    ckear: The term 'ckear' unidentified as a name of a cmdlet, function, script file, or executable program.
    <span class="console-name">user@machine:~$</span> <span class="console-cursor">_</span>
  </samp>
</div>
```
