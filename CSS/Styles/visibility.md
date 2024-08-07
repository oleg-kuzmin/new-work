# [`visibility`](../index.md)

Есть ещё одно CSS-свойство, которое используется для сокрытия элементов. Это свойство `visibility` со значением `hidden`. Оно «прячет» элемент — он становится невидимым, но занимает место на странице.

Свойство `visibility` прячет элемент от глаз пользователя. Практически так же, как это делает `opacity`. И в том, и в другом случае элемент не виден, но механизм работы этих свойств разный.

Если при помощи `opacity` можно гибко изменять прозрачность элемента и делать его, например, видимым на 33%, то свойство `visibility` имеет только два состояния: видимый и невидимый.

Важный момент: при значении `hidden` элемент становится невидимым для программ чтения с экрана (скринридеров), а также на него нельзя будет попасть при навигации с помощью клавиатуры. Стоит помнить об этом при разработке, если вам важна доступность сайта.

Свойство нельзя анимировать при помощи `transform`.

Спрятанный элемент скрывается из так называемого accessability tree — становится недоступен для скринридеров и не может получить фокус при перемещении с помощью клавиатуры.

## Пример

```css
.element {
  visibility: hidden;
}
```

## Значения

Ещё есть устаревшее значение `collapse`, которое нужно только при работе с таблицами. Современными браузерами оно не поддерживается и обрабатывается как `hidden`.

Так же можно применять в качестве значения стандартные ключевые слова: `inherit`, `initial` и `unset`.

### `visibility: visible` (по умолчанию)

Элемент видим.

### `visibility: hidden`

Элемент не виден на странице, но занимает отведённое ему место, влияет на поток документа.
