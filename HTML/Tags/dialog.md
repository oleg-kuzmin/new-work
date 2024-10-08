# [`<dialog>`](../index.md)

_(dialog: диалог, всплывающее окно)_

Тег создаёт всплывающее окно или диалог. По умолчанию не показывается на странице.

Может открываться в двух режимах:

1. Всплывающее окно — не блокирует взаимодействие со страницей.
2. Модальное окно — откроется поверх страницы, имеет фоновое затемнение, остальной контент не доступен для взаимодействия.

Тег `<dialog>` появился как альтернатива. Хорошее диалоговое окно — это не просто логика «Показать» и «Скрыть». В `<dialog>` реализовано то, о чём часто забывают:

1. Для вспомогательных технологий `<dialog>` — аналог `role="dialog"`. Если окно открыто в режиме модального, то и аналог `aria-modal="true"`. Также у тега есть `aria-live="assertive"`, поэтому скринридеры сразу же зачитывают его содержимое.
2. Модальные диалоги закрываются по нажатию на Esc.
3. У модального диалога при открытии появляется «ловушка фокуса»: для клавиатурной навигации доступны только интерактивные элементы только текущего диалога.
4. Браузер запоминает какой элемент был в фокусе до открытия окна и после закрытия окна снова переводит его в фокус. Вся это логика реализована в самом браузере «из коробки». А значит пользователю не отправляется лишний трафик.

Google Chrome при закрытии модального окна клавишей Esc ставит предыдущий элемент не просто в :focus, а в :focus-visible. Подразумевая, что пользователь перешёл на клавиатурную навигацию.

По нажатию Esc сначала запускается событие cancel, а затем close. Это может быть полезно, если мы хотим отгородить пользователя от случайного нажатия клавиши, сначала предупредив, что изменённые данные не сохранятся, и только при повторном нажатии закрывать окно.

Контент `<dialog>` по умолчанию скрыт с помощью display: none. Можно переписать это поведение в стилях и анимировать открытие и закрытие. Намного легче, чем аналогичная задача в `<details>` например.

Модальные окна «ускользают» от контекста: даже если в HTML-разметке после модального окна указан тег `<div>` с `z-index: 99999`, то модальное окно всё равно отобразится поверх этого `<div>`. Или если родитель наклонён с помощью skew(), то дочернее модальное окно всё равно откроется без наклона.

## Пример

### Открытие модального окна

Как и у элемента `<details>`, по умолчанию содержимое окна скрыто от пользователя, но его можно отобразить через атрибут open.

```html
<dialog open>Я виден. Привет!</dialog>
<dialog>Я скрыт от пользователя</dialog>
```

Также окно можно открыть с помощью JavaScript-методов:

1. `show()` — добавляет атрибуты open и `aria-modal="false"`.
2. `showModal()` — открывает в режиме «модального окна». Добавляет атрибуты open и `aria-modal="true"`. Появляется подложка в виде псевдоэлемента `::backdrop`, который можно стилизовать.

```html
<button type="button" onclick="window.myDialog.show()">Просто открыть</button>
<button type="button" onclick="window.myDialog.showModal()">Открыть как модалку</button>
<dialog id="myDialog">🖖 Живи долго и процветай!</dialog>
```

### Закрытие модального окна

Закрыть можно из JavaScript с помощью метода `close()` или из HTML по событию `submit` (например по нажатию кнопки `<button type="submit">`), если в `<dialog>` есть тег `<form>` с атрибутом `method="dialog"`.

```html
<dialog open="open" id="closeMe">
  <h2>Закрой меня! 🙏</h2>
  <p>Результат этих кнопок одинаковый.</p>
  <button type="button" onclick="window.closeMe.close()">Закрыть с помощью JavaScript</button>
  <form method="dialog">
    <button>Закрыть с помощью формы</button>
  </form>
</dialog>
```

### Возвращаемое значение

Если кнопкам в форме задать value, то при закрытии диалога это значение будет присваиваться dialog.returnValue.

```html
<form class="options" method="dialog">
  <button class="button button--dark" value="debug">Дави его!</button>
  <button class="button button--light" value="reproduction">Каждая жизнь священна</button>
</form>
```

Если всплывающее окно закрыто по кнопке Дави его!, то количество 🐞 уменьшается. А если по кнопке Каждая жизнь священна, то увеличивается:

```js
if (dialog.returnValue === 'debug') {
  bugs.innerText = bugs.innerText.substring(0, bugs.innerText.length - 2);
} else {
  bugs.innerText += '🐞';
}
```

## Атрибуты

- [`open`](../Attrubutes/open.md) открывает окно
