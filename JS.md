<style>
  * {
    user-select: none;
  }
</style>

## ЦИКЛЫ

- [`while (ПРОВЕРКА УСЛОВИЯ ДО ПЕРВОЙ ИТЕРАЦИИ)`](./JS/ЦИКЛЫ/while.md)
- [`do while (ПРОВЕРКА УСЛОВИЯ ПОСЛЕ ПЕРВОЙ ИТЕРАЦИИ)`](<./JS/ЦИКЛЫ/do while.md>)

## SET

- [`new Set (КОЛЛЕКЦИЯ ДЛЯ ХРАНЕНИЯ УНИКАЛЬНЫХ ЗНАЧЕНИЙ)`](<./JS/SET/new Set.md>)
  - [`.add() (ДОБАВЛЯЕТ ЗНАЧЕНИЕ В КОЛЛЕКЦИЮ)`](./JS/SET/add.md)
  - [`.clear() (УДАЛЯЕТ ВСЕ ЗНАЧЕНИЯ)`](./JS/SET/clear.md)
  - [`.delete() (УДАЛЯЕТ ЗНАЧЕНИЕ ИЗ КОЛЛЕКЦИИ)`](./JS/SET/delete.md)
  - [`.forEach() (ОБХОД КОЛЛЕКЦИИ)`](./JS/SET/forEach.md)
  - [`.has() (ПРОВЕРЯЕТ НАЛИЧИЕ ЗНАЧЕНИЯ)`](./JS/SET/has.md)
  - [`.size (КОЛИЧЕСТВО ЗНАЧЕНИЙ)`](./JS/SET/size.md)

## MAP

- [`new Map (КОЛЛЕКЦИЯ ДЛЯ ХРАНЕНИЯ ПАР КЛЮЧ-ЗНАЧЕНИЕ)`](<./JS/MAP/new Map.md>)
  - [`.clear() (УДАЛЯЕТ ВСЕ ЗНАЧЕНИЯ)`](./JS/MAP/clear.md)
  - [`.delete() (УДАЛЯЕТ ЗНАЧЕНИЕ ИЗ КОЛЛЕКЦИИ)`](./JS/MAP/delete.md)
  - [`.entries() (ВОЗВРАЩАЕТ ИТЕРАТОР ПАР КЛЮЧ-ЗНАЧЕНИЕ)`](./JS/MAP/entries.md)
  - [`.forEach() (ОБХОД КОЛЛЕКЦИИ)`](./JS/MAP/forEach.md)
  - [`.get() (ПОЛУЧАЕТ ЗНАЧЕНИЕ)`](./JS/MAP/get.md)
  - [`.has() (ПРОВЕРЯЕТ НАЛИЧИЕ ЗНАЧЕНИЯ)`](./JS/MAP/has.md)
  - [`.keys() (ВОЗВРАЩАЕТ ИТЕРАТОР КЛЮЧЕЙ)`](./JS/MAP/keys.md)
  - [`.set() (СОХРАНЯЕТ ЗНАЧЕНИЕ В КОЛЛЕКЦИЮ)`](./JS/MAP/set.md)
  - [`.size (КОЛИЧЕСТВО ЗНАЧЕНИЙ)`](./JS/MAP/size.md)
  - [`.values() (ВОЗВРАЩАЕТ ИТЕРАТОР ЗНАЧЕНИЙ)`](./JS/MAP/values.md)

## REGEXP

- [`new RegExp (РЕГУЛЯРНОЕ ВЫРАЖЕНИЕ)`](<./JS/REGEXP/new RegExp.md>)
  - [`.exec() (ПОДРОБНЫЙ ПОИСК ОДНОГО СОВПАДЕНИЯ)`](./JS/REGEXP/exec.md)
  - [`.test() (СООТВЕТСТВИЕ)`](./JS/REGEXP/test.md)

## STRING

- [`.match() (ПОИСК ВСЕХ СОВПАДЕНИЙ ПО REGEXP)`](./JS/STRING/match.md)
- [`.replace() (ЗАМЕНА СОВПАДЕНИЯ ПО REGEXP)`](./JS/STRING/replace.md)
- [`.search() (ПОИСК ИНДЕКСА ПО REGEXP)`](./JS/STRING/search.md)
- [`.split() (РАЗДЕЛЕНИЕ НА МАССИВ ПО REGEXP)`](./JS/STRING/split.md)

## ELEMENT

- [`.addEventListener() (ДОБАВЛЕНИЕ СЛУШАТЕЛЯ)`](./JS/ELEMENT/addEventListener.md)
- [`.dispatchEvent() (ЗАПУСКАЕТ КАСТОМНОЕ СОБЫТИЕ)`](./JS/ELEMENT/dispatchEvent.md)
- [`.removeEventListener() (УДАЛЕНИЕ СЛУШАТЕЛЯ)`](./JS/ELEMENT/removeEventListener.md)

## СОБЫТИЯ

- [`blur (СНЯТИЕ ФОКУСА)`](<./JS/EVENT TYPE/blur.md>)
- [`change (ИЗМЕНЕНИЕ И ФИКСИРОВАНИЕ ЗНАЧЕНИЯ)`](<./JS/EVENT TYPE/change.md>)
- [`click (ЛЕВАЯ КНОПКА МЫШИ НАЖАТА И ОТПУЩЕНА)`](<./JS/EVENT TYPE/click.md>)
- [`contextmenu (НАЖАТИЕ ПРАВОЙ КНОПКИ МЫШИ)`](<./JS/EVENT TYPE/contextmenu.md>)
- [`dblclick (ДВА СОБЫТИЯ CLICK ПОДРЯД)`](<./JS/EVENT TYPE/dblclick.md>)
- [`DOMContentLoaded (DOM ПОДГОТОВЛЕН)`](<./JS/EVENT TYPE/DOMContentLoaded.md>)
- [`focus (УСТАНОВЛЕНИЕ ФОКУСА)`](<./JS/EVENT TYPE/focus.md>)
- [`input (ИЗМЕНЕНИЕ ЗНАЧЕНИЯ)`](<./JS/EVENT TYPE/input.md>)
- [`keydown (НАЖАТИЕ НА ЛЮБУЮ КЛАВИШУ)`](<./JS/EVENT TYPE/keydown.md>)
- [`keypress (НАЖАТИЕ НА КЛАВИШУ НЕ-МОДИФИКАТОР)`](<./JS/EVENT TYPE/keypress.md>)
- [`keyup (ОТПУСКАНИЕ ЛЮБОЙ КЛАВИШИ)`](<./JS/EVENT TYPE/keyup.md>)
- [`load (HTML И РЕСУРСЫ ЗАГРУЖЕНЫ)`](<./JS/EVENT TYPE/load.md>)
- [`mousedown (НАЖАТИЕ ЛЮБОЙ КНОПКИ МЫШИ)`](<./JS/EVENT TYPE/mousedown.md>)
- [`mousemove (ДВИЖЕНИЕ МЫШИ НАД ЭЛЕМЕНТОМ)`](<./JS/EVENT TYPE/mousemove.md>)
- [`mouseout (УБИРАНИЕ КУРСОРА МЫШИ)`](<./JS/EVENT TYPE/mouseout.md>)
- [`mouseover (НАВЕДЕНИЕ КУРСОРА МЫШИ)`](<./JS/EVENT TYPE/mouseover.md>)
- [`mouseup (ОТПУСКАНИЕ ЛЮБОЙ КНОПКИ МЫШИ)`](<./JS/EVENT TYPE/mouseup.md>)
- [`offline (ОТКЛЮЧЕНИЕ ИНТЕРНЕТА)`](<./JS/EVENT TYPE/offline.md>)
- [`orientationchange (ИЗМЕНЕНИЕ ОРИЕНТАЦИИ ЭКРАНА)`](<./JS/EVENT TYPE/orientationchange.md>)
- [`pointermove (ДВИЖЕНИЕ МЫШИ В ЛЮБОМ МЕСТЕ)`](<./JS/EVENT TYPE/pointermove.md>)
- [`onresize (ИЗМЕНЕНИЕ ОКНА БРАУЗЕРА)`](<./JS/EVENT TYPE/resize.md>)
- [`scroll (ПРОКРУТКА СТРАНИЦЫ)`](<./JS/EVENT TYPE/scroll.md>)
- [`storage (ОБНОВЛЕНИЕ LOCAL ИЛИ SESSION STORAGE)`](<./JS/EVENT TYPE/storage.md>)
- [`submit (ОТПРАВКА ФОРМЫ)`](<./JS/EVENT TYPE/submit.md>)
- [`unhandledrejection (ОТСУТСТВУЕТ ОБРАБОТЧИК ОШИБКИ PROMISE)`](<./JS/EVENT TYPE/unhandledrejection.md>)
- [`wheel (ПРОКРУТКА КОЛЕСА МЫШИ)`](<./JS/EVENT TYPE/wheel.md>)

## EVENT

- [`.new Event() (КАСТОМНОЕ СОБЫТИЕ)`](<./JS/EVENT/new Event.md>)
- [`.new CustomEvent() (КАСТОМНОЕ СОБЫТИЕ С ДАННЫМИ)`](<./JS/EVENT/new CustomEvent.md>)
- [`Event (ОБЪЕКТ СОБЫТИЯ)`](./JS/EVENT/Event.md)

  - [`.bubbles (ВСПЛЫВАЮЩЕЕ СОБЫТИЕ)`](./JS/EVENT/bubbles.md)
  - [`.cancelable (ОТМЕНЯЕМОЕ СОБЫТИЕ)`](./JS/EVENT/cancelable.md)
  - [`.currentTarget (ЭЛЕМЕНТ НА КОТОРОМ ВИСИТ ОБРАБОТЧИК)`](./JS/EVENT/currentTarget.md)
  - [`.defaultPrevented (СОБЫТИЕ ПО УМОЛЧАНИЮ ОТМЕНЕНО)`](./JS/EVENT/defaultPrevented.md)
  - [`.eventPhase (ФАЗА СОБЫТИЯ)`](./JS/EVENT/eventPhase.md)
  - [`.isTrusted (ПОЛЬЗОВАТЕЛЬСКОЕ СОБЫТИЕ)`](./JS/EVENT/isTrusted.md)

  - [`.stopPropagation() (ОСТАНОВКА ВСПЛЫТИЯ СОБЫТИЯ)`](./JS/EVENT/stopPropagation.md)
