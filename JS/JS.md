<style>
  * {
    user-select: none;    
  }
  li, ul {
    padding: 0;
    margin: 0;
  }
</style>

## Async

- [`Статусы запросов`](<./ASYNC/Статусы запросов.md>)

## ООП

- [`Наследование`](./ООП/Наследование.md)
- [`Полиморфизм`](./ООП/Полиморфизм.md)
- [`Приватные поля`](<./ООП/Приватные поля.md>)
- [`Принципы ООП`](<./ООП/Принципы ООП.md>)
- [`Создание класса`](<./ООП/Создание класса.md>)
- [`Создание экземпляра класса`](<./ООП/Создание экземпляра класса.md>)
- [`Теория ООП`](<./ООП/Теория ООП.md>)

## Теория

- [`Деструктуризация`](./ТЕОРИЯ/Деструктуризация.md)
- [`Замыкания`](./ТЕОРИЯ/Замыкания.md)
- [`Ошибки`](./ТЕОРИЯ/Ошибки.md)
- [`Переменные const, let и var`](<./ТЕОРИЯ/Переменные const, let и var.md>)

## Циклы

- [`while`](./ЦИКЛЫ/while.md) проверка условия до первой итерации
- [`do while`](<./ЦИКЛЫ/do while.md>) проверка условия после первой итерации

## Set

- [`new Set`](<./SET/new Set.md>) создает коллекцию для хранения уникальных значений
  - [`.add()`](./SET/add.md) добавляет значение в коллекцию
  - [`.clear()`](./SET/clear.md) удаляет все значения
  - [`.delete()`](./SET/delete.md) удаляет значение из коллекции
  - [`.forEach()`](./SET/forEach.md) обход коллекции
  - [`.has()`](./SET/has.md) проверяет наличие значения
  - [`.size`](./SET/size.md) количество значений

## Map

- [`new Map`](<./MAP/new Map.md>) создает коллекцию для хранения пар ключ-значение
  - [`.clear()`](./MAP/clear.md) удаляет все значения
  - [`.delete()`](./MAP/delete.md) удаляет значение из коллекции
  - [`.entries()`](./MAP/entries.md) возвращает итератор пар ключ-значение
  - [`.forEach()`](./MAP/forEach.md) обход коллекции
  - [`.get()`](./MAP/get.md) получает значение
  - [`.has()`](./MAP/has.md) проверяет наличие значения
  - [`.keys()`](./MAP/keys.md) возвращает итератор ключей
  - [`.set()`](./MAP/set.md) сохраняет значение в коллекцию
  - [`.size`](./MAP/size.md) количество значений
  - [`.values()`](./MAP/values.md) возвращает итератор значений

## RegExp

- [`new RegExp`](<./REGEXP/new RegExp.md>) создает регулярное выражение
  - [`.exec()`](./REGEXP/exec.md) подробный поиск одного совпадения
  - [`.test()`](./REGEXP/test.md) соответствие

## String

- [`.match()`](./STRING/match.md) поиск всех совпадений по regexp
- [`.replace()`](./STRING/replace.md) замена совпадения по regexp
- [`.search()`](./STRING/search.md) поиск индекса по regexp
- [`.split()`](./STRING/split.md) разделение на массив по regexp

## Element

- [`.addEventListener()`](./ELEMENT/addEventListener.md) добавление слушателя
- [`.dispatchEvent()`](./ELEMENT/dispatchEvent.md) запускает кастомное событие
- [`.removeEventListener()`](./ELEMENT/removeEventListener.md) удаление слушателя

## Event

- [`.new Event()`](<./EVENT/new Event.md>) создает кастомное событие
- [`.new CustomEvent()`](<./EVENT/new CustomEvent.md>) создает кастомное событие с данными
- [`Event`](./EVENT/Event.md) объект события
  - [`.bubbles`](./EVENT/bubbles.md) всплывающее событие
  - [`.cancelable`](./EVENT/cancelable.md) отменяемое событие
  - [`.clientX`](./EVENT/clientX.md) координаты X от окна просмотра
  - [`.clientY`](./EVENT/clientY.md) координаты Y от окна просмотра
  - [`.composedPath()`](./EVENT/composedPath.md) элементы где сработало событие
  - [`.currentTarget`](./EVENT/currentTarget.md) элемент на котором висит обработчик
  - [`.defaultPrevented`](./EVENT/defaultPrevented.md) отменено ли событие по умолчанию
  - [`.eventPhase`](./EVENT/eventPhase.md) фаза события
  - [`.isTrusted`](./EVENT/isTrusted.md) пользовательское ли это событие
  - [`.key`](./EVENT/key.md) название нажатой клавиши
  - [`.pageX`](./EVENT/pageX.md) координаты X от угла страницы
  - [`.pageY`](./EVENT/pageY.md) координаты Y от угла страницы
  - [`.preventDefault()`](./EVENT/preventDefault.md) отменяет поведение по умолчанию
  - [`.screenX`](./EVENT/screenX.md) координаты X от угла монитора
  - [`.screenY`](./EVENT/screenY.md) координаты Y от угла монитора
  - [`.stopImmediatePropagation()`](./EVENT/stopImmediatePropagation.md) остановка всплытия и обработчиков
  - [`.stopPropagation()`](./EVENT/stopPropagation.md) остановка всплытия события
  - [`.target`](./EVENT/target.md) элемент где произошло событие
  - [`.timeStamp`](./EVENT/timeStamp.md) время возникновения события
  - [`.type`](./EVENT/type.md) тип события
  - [`.view`](./EVENT/view.md) объект window где произошло событие

## Event.type

- [`blur`](<./EVENT TYPE/blur.md>) снятие фокуса
- [`change`](<./EVENT TYPE/change.md>) изменение и фиксирование значения
- [`click`](<./EVENT TYPE/click.md>) левая кнопка мыши нажата и отпущена
- [`contextmenu`](<./EVENT TYPE/contextmenu.md>) нажатие правой кнопки мыши
- [`dblclick`](<./EVENT TYPE/dblclick.md>) два события click подряд
- [`DOMContentLoaded`](<./EVENT TYPE/DOMContentLoaded.md>) dom подготовлен
- [`focus`](<./EVENT TYPE/focus.md>) установление фокуса
- [`input`](<./EVENT TYPE/input.md>) изменение значения
- [`keydown`](<./EVENT TYPE/keydown.md>) нажатие на любую клавишу
- [`keypress`](<./EVENT TYPE/keypress.md>) нажатие на клавишу не-модификатор
- [`keyup`](<./EVENT TYPE/keyup.md>) отпускание любой клавиши
- [`load`](<./EVENT TYPE/load.md>) html и ресурсы заружены
- [`mousedown`](<./EVENT TYPE/mousedown.md>) нажатие любой кнопки мыши
- [`mousemove`](<./EVENT TYPE/mousemove.md>) движение мыши над элементом
- [`mouseout`](<./EVENT TYPE/mouseout.md>) убирание курсора мыши
- [`mouseover`](<./EVENT TYPE/mouseover.md>) наведение курсора мыши
- [`mouseup`](<./EVENT TYPE/mouseup.md>) отпускание любой кнопки мыши
- [`offline`](<./EVENT TYPE/offline.md>) отключение интернета
- [`orientationchange`](<./EVENT TYPE/orientationchange.md>) изменение ориентации экрана
- [`pointermove`](<./EVENT TYPE/pointermove.md>) движение мыши в любом месте
- [`onresize`](<./EVENT TYPE/resize.md>) изменение окна браузера
- [`scroll`](<./EVENT TYPE/scroll.md>) прокрутка страницы
- [`storage`](<./EVENT TYPE/storage.md>) обновление local или session storage
- [`submit`](<./EVENT TYPE/submit.md>) отправка формы
- [`unhandledrejection`](<./EVENT TYPE/unhandledrejection.md>) отсутствует обработчик ошибки promise
- [`wheel`](<./EVENT TYPE/wheel.md>) прокрутка колеса мыши
