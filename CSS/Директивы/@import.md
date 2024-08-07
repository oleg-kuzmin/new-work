# [`@import`](../index.md)

При помощи директивы `@import` можно импортировать один файл со стилями в другой файл со стилями.

Все директивы импорта должны быть в самом верху CSS-файла, до всего остального кода. Иначе не сработает.

Во время загрузки страницы браузер пройдёт по всем указанным в импортах путям и загрузит таблицы стилей. Затем прочитает правила ниже импортов и отрисует страницу на основании комбинации всего CSS.

Желательно не злоупотреблять импортами. Потенциально это может замедлить загрузку страницы.

Поскольку браузер читает медиавыражения, указанные после пути до файла в импорте в последнюю очередь, то он в любом случае сходит по ссылке почитать стили и только потом определит, нужно ли их применять. Эту особенность стоит держать в голове.

CSS работает с `@import` так, что каждая обрабатываемая директива загружается по очереди. Это может плохо отразиться на скорости загрузки сайта. Элемент `<link>` позволяет загружать файлы параллельно.

## Пример

```css
@import 'file.css';
```

## Значения

### `@import "file.css"`

### `@import url("file.css")`

Равнозначные варианты импорта. Технической разницы между этими двумя вариантами нет. Файлы будут импортироваться одинаково в обоих случаях. Путь до файла может быть как абсолютным, так и относительным.

### `@import "print-styles.css" print`

### `@import "screen-styles.css" screen`

Можно указать, для каких типов устройств должны применяться стили из импортируемого файла.

### `@import "file.css" (min-width: 481px) and (max-width: 768px)`

### `@import "file.css" screen and (orientation: landscape)`

Допустимо указывать несколько медиавыражений после пути.

### `@import "file.css" supports(not (display: flex))`

Можно проверить, поддерживается ли какое-то конкретное правило или выражение в браузере пользователя, и загрузить для него конкретные стили. Для этого используется правило supports.
