<style>
  * {
    user-select: none;    
  }
  li, ul {
    padding: 0;
    margin: 0;
  }
</style>

## Циклы

- [`while`](./JS/ЦИКЛЫ/while.md) проверка условия до первой итерации
- [`do while`](<./JS/ЦИКЛЫ/do while.md>) проверка условия после первой итерации

## Set

- [`new Set`](<./JS/SET/new Set.md>) создает коллекцию для хранения уникальных значений
  - [`.add()`](./JS/SET/add.md) добавляет значение в коллекцию
  - [`.clear()`](./JS/SET/clear.md) удаляет все значения
  - [`.delete()`](./JS/SET/delete.md) удаляет значение из коллекции
  - [`.forEach()`](./JS/SET/forEach.md) обход коллекции
  - [`.has()`](./JS/SET/has.md) проверяет наличие значения
  - [`.size`](./JS/SET/size.md) количество значений

## Map

- [`new Map`](<./JS/MAP/new Map.md>) создает коллекцию для хранения пар ключ-значение
  - [`.clear()`](./JS/MAP/clear.md) удаляет все значения
  - [`.delete()`](./JS/MAP/delete.md) удаляет значение из коллекции
  - [`.entries()`](./JS/MAP/entries.md) возвращает итератор пар ключ-значение
  - [`.forEach()`](./JS/MAP/forEach.md) обход коллекции
  - [`.get()`](./JS/MAP/get.md) получает значение
  - [`.has()`](./JS/MAP/has.md) проверяет наличие значения
  - [`.keys()`](./JS/MAP/keys.md) возвращает итератор ключей
  - [`.set()`](./JS/MAP/set.md) сохраняет значение в коллекцию
  - [`.size`](./JS/MAP/size.md) количество значений
  - [`.values()`](./JS/MAP/values.md) возвращает итератор значений

## RegExp

- [`new RegExp`](<./JS/REGEXP/new RegExp.md>) создает регулярное выражение
  - [`.exec()`](./JS/REGEXP/exec.md) подробный поиск одного совпадения
  - [`.test()`](./JS/REGEXP/test.md) соответствие

## String

- [`.match()`](./JS/STRING/match.md) поиск всех совпадений по regexp
- [`.replace()`](./JS/STRING/replace.md) замена совпадения по regexp
- [`.search()`](./JS/STRING/search.md) поиск индекса по regexp
- [`.split()`](./JS/STRING/split.md) разделение на массив по regexp

## Element

- [`.addEventListener()`](./JS/ELEMENT/addEventListener.md) добавление слушателя
- [`.dispatchEvent()`](./JS/ELEMENT/dispatchEvent.md) запускает кастомное событие
- [`.removeEventListener()`](./JS/ELEMENT/removeEventListener.md) удаление слушателя

## Event

- [`.new Event()`](<./JS/EVENT/new Event.md>) создает кастомное событие
- [`.new CustomEvent()`](<./JS/EVENT/new CustomEvent.md>) создает кастомное событие с данными
- [`Event`](./JS/EVENT/Event.md) объект события
  - [`.bubbles`](./JS/EVENT/bubbles.md) всплывающее событие
  - [`.cancelable`](./JS/EVENT/cancelable.md) отменяемое событие
  - [`.clientX`](./JS/EVENT/clientX.md) координаты X от окна просмотра
  - [`.clientY`](./JS/EVENT/clientY.md) координаты Y от окна просмотра
  - [`.composedPath()`](./JS/EVENT/composedPath.md) элементы где сработало событие
  - [`.currentTarget`](./JS/EVENT/currentTarget.md) элемент на котором висит обработчик
  - [`.defaultPrevented`](./JS/EVENT/defaultPrevented.md) отменено ли событие по умолчанию
  - [`.eventPhase)`](./JS/EVENT/eventPhase.md) фаза события
  - [`.isTrusted`](./JS/EVENT/isTrusted.md) пользовательское ли это событие
  - [`.key`](./JS/EVENT/key.md) название нажатой клавиши
  - [`.pageX`](./JS/EVENT/pageX.md) координаты X от угла страницы
  - [`.pageY`](./JS/EVENT/pageY.md) координаты Y от угла страницы
  - [`.preventDefault()`](./JS/EVENT/preventDefault.md) отменяет поведение по умолчанию
  - [`.screenX`](./JS/EVENT/screenX.md) координаты X от угла монитора
  - [`.screenY`](./JS/EVENT/screenY.md) координаты Y от угла монитора
  - [`.stopImmediatePropagation()`](./JS/EVENT/stopImmediatePropagation.md) остановка всплытия и обработчиков
  - [`.stopPropagation()`](./JS/EVENT/stopPropagation.md) остановка всплытия события
  - [`.target`](./JS/EVENT/target.md) элемент где произошло событие
  - [`.timeStamp`](./JS/EVENT/timeStamp.md) время возникновения события
  - [`.type`](./JS/EVENT/type.md) тип события
  - [`.view`](./JS/EVENT/view.md) объект window где произошло событие

## Event.type

- [`blur`](<./JS/EVENT TYPE/blur.md>) снятие фокуса
- [`change`](<./JS/EVENT TYPE/change.md>) изменение и фиксирование значения
- [`click`](<./JS/EVENT TYPE/click.md>) левая кнопка мыши нажата и отпущена
- [`contextmenu`](<./JS/EVENT TYPE/contextmenu.md>) нажатие правой кнопки мыши
- [`dblclick`](<./JS/EVENT TYPE/dblclick.md>) два события click подряд
- [`DOMContentLoaded`](<./JS/EVENT TYPE/DOMContentLoaded.md>) dom подготовлен
- [`focus`](<./JS/EVENT TYPE/focus.md>) установление фокуса
- [`input`](<./JS/EVENT TYPE/input.md>) изменение значения
- [`keydown`](<./JS/EVENT TYPE/keydown.md>) нажатие на любую клавишу
- [`keypress`](<./JS/EVENT TYPE/keypress.md>) нажатие на клавишу не-модификатор
- [`keyup`](<./JS/EVENT TYPE/keyup.md>) отпускание любой клавиши
- [`load`](<./JS/EVENT TYPE/load.md>) html и ресурсы заружены
- [`mousedown`](<./JS/EVENT TYPE/mousedown.md>) нажатие любой кнопки мыши
- [`mousemove`](<./JS/EVENT TYPE/mousemove.md>) движение мыши над элементом
- [`mouseout`](<./JS/EVENT TYPE/mouseout.md>) убирание курсора мыши
- [`mouseover`](<./JS/EVENT TYPE/mouseover.md>) наведение курсора мыши
- [`mouseup`](<./JS/EVENT TYPE/mouseup.md>) отпускание любой кнопки мыши
- [`offline`](<./JS/EVENT TYPE/offline.md>) отключение интернета
- [`orientationchange`](<./JS/EVENT TYPE/orientationchange.md>) изменение ориентации экрана
- [`pointermove`](<./JS/EVENT TYPE/pointermove.md>) движение мыши в любом месте
- [`onresize`](<./JS/EVENT TYPE/resize.md>) изменение окна браузера
- [`scroll`](<./JS/EVENT TYPE/scroll.md>) прокрутка страницы
- [`storage`](<./JS/EVENT TYPE/storage.md>) обновление local или session storage
- [`submit`](<./JS/EVENT TYPE/submit.md>) отправка формы
- [`unhandledrejection`](<./JS/EVENT TYPE/unhandledrejection.md>) отсутствует обработчик ошибки promise
- [`wheel`](<./JS/EVENT TYPE/wheel.md>) прокрутка колеса мыши
