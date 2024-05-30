<style>
  * {
    user-select: none;    
  }

  h1, h2 {
    scroll-margin: 60px;
  }
</style>

# Оглавление

- [Асинхронные действия](#асинхронные-действия)
- [ООП](#ооп)
- [Теория](#теория)
- [Циклы](#циклы)
- [Array](#array)
- [Date](#date)
- [Document](#document)
- [Element](#element)
- [Event](#event)
- [Event.type](#eventtype)
- [Function](#function)
- [Map](#map)
- [Number](#number)
- [Object](#object)
- [RegExp](#regexp)
- [Set](#set)
- [String](#string)
- [Window](#window)

## [Асинхронные действия](#оглавление)

- [`async await`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/async await.md>) асинхронные функции
- [`fetch()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/FETCH/fetch.md>) запрос на сервер
  - [`responce.ok`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/FETCH/responce.ok.md>) успешность ответа
  - [`responce.status`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/FETCH/responce.status.md>) статус ответа
  - [`responce.statusText`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/FETCH/responce.statusText.md>) сообщение статуса ответа
  - [`responce.json()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/FETCH/responce.json.md>) преобразует json-ответ в объект js
  - [`responce.text()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/FETCH/responce.text.md>) преобразует json-ответ в текст
  - [`responce.blob()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/FETCH/responce.blob.md>) преобразует json-ответ в бинарные данные
  - [`responce.headers.get()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/FETCH/responce.headers.get.md>) получает значение заголовка
- [`new Promise()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/new Promise.md>) создает promise
  - [`.then()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/then.md>) обработчик выполненного promise
  - [`.catch()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/catch.md>) обработчик отклоненного promise
  - [`.finally()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/finally.md>) обработчик завершенного promise
- [`Promise.resolve()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/Promise.resolve.md>) создает выполненный promise
- [`Promise.reject()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/Promise.reject.md>) создает отклоненный promise
- [`Promise.all()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/Promise.all.md>) все promise выполнены
- [`Promise.allSettled()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/Promise.allSettled.md>) все promise завершены
- [`Promise.any()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/Promise.any.md>) первый выполненный promise
- [`Promise.race()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/PROMISE/Promise.race.md>) первый завершенный promise
- [`JSON`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/JSON/JSON.md>) формат обмена данными
  - [`JSON.stringify()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/JSON/JSON.stringify.md>) преобразует объект в JSON
  - [`JSON.parse()`](<./АСИНХРОННЫЕ ДЕЙСТВИЯ/JSON/JSON.parse.md>) преобразует JSON в объект

## [ООП](#оглавление)

- [`Наследование`](./ООП/Наследование.md)
- [`Полиморфизм`](./ООП/Полиморфизм.md)
- [`Приватные поля`](<./ООП/Приватные поля.md>)
- [`Принципы ООП`](<./ООП/Принципы ООП.md>)
- [`Создание класса`](<./ООП/Создание класса.md>)
- [`Создание экземпляра класса`](<./ООП/Создание экземпляра класса.md>)
- [`Теория ООП`](<./ООП/Теория ООП.md>)
- [`Что такое this`](<./ООП/Что такое this.md>)

## [Теория](#оглавление)

- [`Деструктуризация`](./ТЕОРИЯ/Деструктуризация.md)
- [`Замыкания`](./ТЕОРИЯ/Замыкания.md)
- [`Операторы`](./ТЕОРИЯ/Операторы.md)
- [`Определение типа`](<./ТЕОРИЯ/Определение типа.md>)
- [`Ошибки`](./ТЕОРИЯ/Ошибки.md)
- [`Переменные const, let и var`](<./ТЕОРИЯ/Переменные const, let и var.md>)
- [`Преобразование (логическое)`](<./ТЕОРИЯ/Преобразование (логическое).md>)
- [`Преобразование (строковое)`](<./ТЕОРИЯ/Преобразование (строковое).md>)
- [`Преобразование (численное)`](<./ТЕОРИЯ/Преобразование (численное).md>)
- [`Словарь`](./ТЕОРИЯ/Словарь.md)
- [`Тип BigInt`](<./ТЕОРИЯ/Тип BigInt.md>)
- [`Тип Boolean`](<./ТЕОРИЯ/Тип Boolean.md>)
- [`Тип Null`](<./ТЕОРИЯ/Тип Null.md>)
- [`Тип Number`](<./ТЕОРИЯ/Тип Number.md>)
- [`Тип Object`](<./ТЕОРИЯ/Тип Object.md>)
- [`Тип String`](<./ТЕОРИЯ/Тип String.md>)
- [`Тип Symbol`](<./ТЕОРИЯ/Тип Symbol.md>)
- [`Тип Undefined`](<./ТЕОРИЯ/Тип Undefined.md>)
- [`Условные конструкции`](<./ТЕОРИЯ/Условные конструкции.md>)
- [`Функции`](./ТЕОРИЯ/Функции.md)
- [`Экспорт и импорт`](<./ТЕОРИЯ/Экспорт и импорт.md>)

## [Циклы](#оглавление)

- [`while`](./ЦИКЛЫ/while.md) проверка условия до первой итерации
- [`do while`](<./ЦИКЛЫ/do while.md>) проверка условия после первой итерации
- [`for`](./ЦИКЛЫ/for.md) цикл со счетчиком
- [`for of`](<./ЦИКЛЫ/for of.md>) обход свойств итерируемого объекта, не включая пользовательские прототипы
- [`for in`](<./ЦИКЛЫ/for in.md>) обход свойств объекта, включая пользовательские прототипы

## [Array](#оглавление)

### Иммутабельные методы

- [`Array.from()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/Array.from.md>) создает массив из коллекции
- [`Array.isArray()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/Array.isArray.md>) проверка аргумента на массив
- [`Array()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/Array.md>) создает массив
- [`.concat()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/concat.md>) объединяет элементы
- [`.every()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/every.md>) проверяет все ли элементы соответствуют условию
- [`.filter()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/filter.md>) оставляет те элементы, которые соответствуют условию
- [`.find()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/find.md>) ищет значение элемента, который соответствуют условию
- [`.findindex()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/findindex.md>) поиск индекса элемента, который соответствуют условию
- [`.forEach()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/forEach.md>) перебирает элементы массива
- [`.includes()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/includes.md>) проверяет наличие в массиве аргумента
- [`.indexOf()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/indexOf.md>) поиск индекса переданного аргумента
- [`.join()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/join.md>) преобразует в строку
- [`.lastIndexOf()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/lastIndexOf.md>) поиск последнего индекса переданного аргумента
- [`.length`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/length.md>) размер массива
- [`.map()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/map.md>) создание массива из другого
- [`.reduce()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/reduce.md>) сведение массива к одному значению
- [`.slice()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/slice.md>) создает копию массива из нужных элементов
- [`.some()`](<./ARRAY/ИММУТАБЕЛЬНЫЕ МЕТОДЫ/some.md>) проверяет один элемент соответствуют условию

### Мутабельные методы

- [`.fill()`](<./ARRAY/МУТАБЕЛЬНЫЕ МЕТОДЫ/fill.md>) заполняет значениями
- [`.flat()`](<./ARRAY/МУТАБЕЛЬНЫЕ МЕТОДЫ/flat.md>) разворачивает вложенные массивы
- [`.pop()`](<./ARRAY/МУТАБЕЛЬНЫЕ МЕТОДЫ/pop.md>) удаляет последний элемент
- [`.push()`](<./ARRAY/МУТАБЕЛЬНЫЕ МЕТОДЫ/push.md>) добавляет в конец массива
- [`.reverse()`](<./ARRAY/МУТАБЕЛЬНЫЕ МЕТОДЫ/reverse.md>) инвертирует порядок элементов
- [`.shift()`](<./ARRAY/МУТАБЕЛЬНЫЕ МЕТОДЫ/shift.md>) удаляет первый элемент
- [`.sort()`](<./ARRAY/МУТАБЕЛЬНЫЕ МЕТОДЫ/sort.md>) сортирует элементы массива
- [`.splice()`](<./ARRAY/МУТАБЕЛЬНЫЕ МЕТОДЫ/splice.md>) заменяет часть элементов
- [`.unshift()`](<./ARRAY/МУТАБЕЛЬНЫЕ МЕТОДЫ/unshift.md>) добавляет в начало массива

### Преобразование

- [`Object.fromEntries()`](./OBJECT/Object.fromEntries.md) преобразует в объект

## [Date](#оглавление)

- [`Date.now()`](./DATE/Date.now.md) миллисекунды с 01 января 1970
- [`Date.parse()`](./DATE/Date.parse.md) преобразует строку в миллисекунды с 01 января 1970
- [`.getDate()`](./DATE/getDate.md) возвращает день месяца (1-31)
- [`.getDay()`](./DATE/getDay.md) возвращает день недели (0-6)
- [`.getFullYear()`](./DATE/getFullYear.md) возвращает год
- [`.getHours()`](./DATE/getHours.md) возвращает час (0-23)
- [`.getMilliseconds()`](./DATE/getMilliseconds.md) возвращает миллисекунды (0-999)
- [`.getMinutes()`](./DATE/getMinutes.md) возвращает минуты (0-59)
- [`.getMonth()`](./DATE/getMonth.md) возвращает месяц (0-11)
- [`.getSeconds()`](./DATE/getSeconds.md) возвращает секунды (0-59)
- [`.getTime()`](./DATE/getTime.md) возвращает миллисекунды с 01 января 1970
- [`.getTimezoneOffset()`](./DATE/getTimezoneOffset.md) возвращает разницу в минутах с UTC
- [`new Date()`](<./DATE/new Date.md>) создает объект Date
- [`setDate()`](./DATE/setDate.md) устанавливает день месяца (1-31)
- [`setFullYear()`](./DATE/setFullYear.md) устанавливает год
- [`setHours()`](./DATE/setHours.md) устанавливает час (0-23)
- [`setMilliseconds()`](./DATE/setMilliseconds.md) устанавливает миллисекунды (0-999)
- [`setMinutes()`](./DATE/setMinutes.md) устанавливает минуты (0-59)
- [`setMonth()`](./DATE/setMonth.md) устанавливает месяц (0-11)
- [`setSeconds()`](./DATE/setSeconds.md) устанавливает секунды (0-59)
- [`setTime()`](./DATE/setTime.md) устанавливает миллисекунды с 01 января 1970
- [`.toISOString()`](./DATE/toISOString.md) преобразует объект Date в строку формата iso
- [`.toLocaleDateString()`](./DATE/toLocaleDateString.md) преобразует объект Date в строку различных форматов
- [`.toLocaleTimeString()`](./DATE/toLocaleTimeString.md) преобразует объект Date в строку в формате часы:минуты:секунды
- [`.toUTCString()`](./DATE/toUTCString.md) преобразует объект Date в строку в формате UTC

## [Document](#оглавление)

- [`document.body`](./DOCUMENT/document.body.md) тело страницы
- [`document.cookie`](./DOCUMENT/document.cookie.md) cookie страницы
- [`document.createElement()`](./DOCUMENT/document.createElement.md) создает элемент
- [`document.createTextNode()`](./DOCUMENT/document.createTextNode.md) создает текстовый узел
- [`document.documentElement`](./DOCUMENT/document.documentElement.md) коревой элемент страницы
- [`document.forms`](./DOCUMENT/document.forms.md) коллекция всех форм
- [`document.getElementById()`](./DOCUMENT/document.getElementById.md) поиск элемента по id
- [`document.getElementsByClassName()`](./DOCUMENT/document.getElementsByClassName.md) коллекция элементов по классу
- [`document.getElementsByName()`](./DOCUMENT/document.getElementsByName.md) коллекция элементов по имени
- [`document.getElementsByTagName()`](./DOCUMENT/document.getElementsByTagName.md) коллекция элементов по тегу
- [`document.head`](./DOCUMENT/document.head.md) голова страницы
- [`document.querySelector()`](./DOCUMENT/document.querySelector.md) поиск элемента по селектору
- [`document.querySelectorAll()`](./DOCUMENT/document.querySelectorAll.md) коллекция элементов по селектору
- [`document.title`](./DOCUMENT/document.title.md) заголовок страницы

## [Element](#оглавление)

### Атрибуты

- [`.checked`](./ELEMENT/АТРИБУТЫ/checked.md) атрибут checked
- [`.className`](./ELEMENT/АТРИБУТЫ/className.md) атрибут class
- [`.contentEditable`](./ELEMENT/АТРИБУТЫ/contentEditable.md) атрибут contentEditable
- [`.dataset`](./ELEMENT/АТРИБУТЫ/dataset.md) объект с data-атрибутами
- [`.disabled`](./ELEMENT/АТРИБУТЫ/disabled.md) атрибут disabled
- [`.getAttribute()`](./ELEMENT/АТРИБУТЫ/getAttribute.md) возвращает значение атрибута
- [`.hasAttribute()`](./ELEMENT/АТРИБУТЫ/hasAttribute.md) проверяет наличие атрибута
- [`.hidden`](./ELEMENT/АТРИБУТЫ/hidden.md) атрибут hidden
- [`.id`](./ELEMENT/АТРИБУТЫ/id.md) атрибут id
- [`.removeAttribute()`](./ELEMENT/АТРИБУТЫ/removeAttribute.md) удаляет атрибут
- [`.setAttribute()`](./ELEMENT/АТРИБУТЫ/setAttribute.md) устанавливает атрибут
- [`.style`](./ELEMENT/АТРИБУТЫ/style.md) атрибут style
- [`.type`](./ELEMENT/АТРИБУТЫ/type.md) атрибут type
- [`.value`](./ELEMENT/АТРИБУТЫ/value.md) атрибут value

### Классы

- [`.classList`](./ELEMENT/КЛАССЫ/classList.md) псевдомассив классов
  - [`.classList.add()`](./ELEMENT/КЛАССЫ/classList.add.md) добавляет класс
  - [`.classList.contains()`](./ELEMENT/КЛАССЫ/classList.contains.md) проверяет наличие класса
  - [`.classList.remove()`](./ELEMENT/КЛАССЫ/classList.remove.md) удаляет класс
  - [`.classList.replace()`](./ELEMENT/КЛАССЫ/classList.replace.md) заменяет класс
  - [`.classList.toggle()`](./ELEMENT/КЛАССЫ/classList.toggle.md) переключает класс

### Метрики

- [`.clientHeight`](./ELEMENT/МЕТРИКИ/clientHeight.md) высота (content + padding)
- [`.clientWidth`](./ELEMENT/МЕТРИКИ/clientWidth.md) ширина (content + padding)
- [`.clientLeft`](./ELEMENT/МЕТРИКИ/clientLeft.md) отступ сверху (border)
- [`.clientTop`](./ELEMENT/МЕТРИКИ/clientTop.md) отступ сверху (border)
- [`.scrollHeight`](./ELEMENT/МЕТРИКИ/scrollHeight.md) высота (content + padding + scrollBar)
- [`.scrollWidth`](./ELEMENT/МЕТРИКИ/scrollWidth.md) ширина (content + padding + scrollBar)
- [`.offsetHeight`](./ELEMENT/МЕТРИКИ/offsetHeight.md) высота (content + padding + scrollBar + border)
- [`.offsetWidth`](./ELEMENT/МЕТРИКИ/offsetWidth.md) ширина (content + padding + scrollBar + border)
- [`.scrollLeft`](./ELEMENT/МЕТРИКИ/scrollLeft.md) ширина прокрученной области
- [`.scrollTop`](./ELEMENT/МЕТРИКИ/scrollTop.md) высота прокрученной области
- [`.offsetParent`](./ELEMENT/МЕТРИКИ/offsetParent.md) ближайший родитель-ориентир для рендеринга
- [`.offsetLeft`](./ELEMENT/МЕТРИКИ/offsetLeft.md) отступ слева от offsetParent
- [`.offsetTop`](./ELEMENT/МЕТРИКИ/offsetTop.md) отступ сверху от offsetParent

### Форма

- [`.focus()`](./ELEMENT/ФОРМА/focus.md) фокус на элементе
- [`.reset()`](./ELEMENT/ФОРМА/reset.md) сбрасывает поля формы
- [`.submit()`](./ELEMENT/ФОРМА/submit.md) отправка формы
- [`.validationMessage`](./ELEMENT/ФОРМА/validationMessage.md) текст сообщения об ошибке
- [`.validity`](./ELEMENT/ФОРМА/validity.md) объект проверки ошибок

### DOM Перемещение

- [`.after()`](<./ELEMENT/DOM ПЕРЕМЕЩЕНИЕ/after.md>) добавляет, перемещает ПОСЛЕ узла
- [`.append()`](<./ELEMENT/DOM ПЕРЕМЕЩЕНИЕ/append.md>) добавляет, перемещает в КОНЕЦ узла
- [`.before()`](<./ELEMENT/DOM ПЕРЕМЕЩЕНИЕ/before.md>) добавляет, перемещает ДО узла
- [`.cloneNode()`](<./ELEMENT/DOM ПЕРЕМЕЩЕНИЕ/cloneNode.md>) клонирует элемент
- [`.prepend()`](<./ELEMENT/DOM ПЕРЕМЕЩЕНИЕ/prepend.md>) добавляет, перемещает в НАЧАЛО узла
- [`.remove()`](<./ELEMENT/DOM ПЕРЕМЕЩЕНИЕ/remove.md>) удаляет элемент
- [`.replaceWith()`](<./ELEMENT/DOM ПЕРЕМЕЩЕНИЕ/replaceWith.md>) заменяет элемент

### DOM Поиск

- [`.childNodes`](<./ELEMENT/DOM ПОИСК/childNodes.md>) коллекция дочерних узлов
- [`.children`](<./ELEMENT/DOM ПОИСК/children.md>) коллекция дочерних элементов
- [`.closest()`](<./ELEMENT/DOM ПОИСК/closest.md>) находит ближайщего родителя по селектору
- [`.firstElementChild`](<./ELEMENT/DOM ПОИСК/firstElementChild.md>) первый дочерний элемент
- [`.getElementsByClassName()`](<./ELEMENT/DOM ПОИСК/getElementsByClassName.md>) коллекция элементов по классу
- [`.getElementsByTagName()`](<./ELEMENT/DOM ПОИСК/getElementsByTagName.md>) коллекция элементов по тегу
- [`.lastElementChild`](<./ELEMENT/DOM ПОИСК/lastElementChild.md>) последний дочерний элемент
- [`.nextElementSibling`](<./ELEMENT/DOM ПОИСК/nextElementSibling.md>) следующий соседний элемент
- [`.parentElement`](<./ELEMENT/DOM ПОИСК/parentElement.md>) ближайший родитель
- [`.previousElementSibling`](<./ELEMENT/DOM ПОИСК/previousElementSibling.md>) предыдущий соседний элемент
- [`.querySelector()`](<./ELEMENT/DOM ПОИСК/querySelector.md>) поиск элемента по селектору
- [`.querySelectorAll()`](<./ELEMENT/DOM ПОИСК/querySelectorAll.md>) коллекция элементов по селектору

### DOM События

- [`.addEventListener()`](<./ELEMENT/DOM СОБЫТИЯ/addEventListener.md>) добавление слушателя
- [`.dispatchEvent()`](<./ELEMENT/DOM СОБЫТИЯ/dispatchEvent.md>) запускает кастомное событие
- [`.removeEventListener()`](<./ELEMENT/DOM СОБЫТИЯ/removeEventListener.md>) удаление слушателя

### DOM Содержимое

- [`.content`](<./ELEMENT/DOM СОДЕРЖИМОЕ/content.md>) содержимое template
- [`.innerHTML`](<./ELEMENT/DOM СОДЕРЖИМОЕ/innerHTML.md>) содержимое с разметкой
- [`.innerText`](<./ELEMENT/DOM СОДЕРЖИМОЕ/innerText.md>) видимое текстовое содержимое
- [`.insertAdjacentHTML()`](<./ELEMENT/DOM СОДЕРЖИМОЕ/insertAdjacentHTML.md>) вставляет разметку
- [`.insertAdjacentText()`](<./ELEMENT/DOM СОДЕРЖИМОЕ/insertAdjacentText.md>) вставляет текст
- [`.outerHTML`](<./ELEMENT/DOM СОДЕРЖИМОЕ/outerHTML.md>) видимое содержимое разметки, не изменяет сам элемент
- [`.textContent`](<./ELEMENT/DOM СОДЕРЖИМОЕ/textContent.md>) текстовое содержимое

## [Event](#оглавление)

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

## [Event.type](#оглавление)

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

## [Function](#оглавление)

- [`arguments`](./FUNCTION/arguments.md) псевдомассив всех переданных аргументов

## [Map](#оглавление)

- [`new Map()`](<./MAP/new Map.md>) создает коллекцию для хранения пар ключ-значение
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

## [Number](#оглавление)

- [`Math.abs()`](./NUMBER/Math.abs.md) вычисляет модуль числа
- [`Math.ceil()`](./NUMBER/Math.ceil.md) округление до целого вверх
- [`Math.floor()`](./NUMBER/Math.floor.md) округление до целого вниз
- [`Math.max()`](./NUMBER/Math.max.md) наибольшее из переданных аргументов
- [`Math.min()`](./NUMBER/Math.min.md) наименьшее из переданных аргументов
- [`Math.pow()`](./NUMBER/Math.pow.md) возведение в степень
- [`Math.random()`](./NUMBER/Math.random.md) случайное число
- [`Math.round()`](./NUMBER/Math.round.md) округление до ближайшего целого
- [`Math.trunc()`](./NUMBER/Math.trunc.md) отбрасывает дробную часть
- [`Number()`](./NUMBER/Number.md) преобразует аргумент в число
  - [`.toFixed()`](./NUMBER/toFixed.md) преобразует в строку и округляет
  - [`.toLocaleString()`](./NUMBER/toLocaleString.md) преобразует в строку c учетом языка
  - [`.toString()`](./NUMBER/toString.md) преобразует в строку
- [`new Number()`](<./NUMBER/new Number.md>) создает объект Number
- [`Number.isFinite()`](./NUMBER/Number.isFinite.md) проверяет число на конечность
- [`Number.isInteger()`](./NUMBER/Number.isInteger.md) проверяет число на целое или дробное
- [`Number.isNaN()`](./NUMBER/Number.isNaN.md) проверяет число на NaN

### Преобразование

- [`String()`](./STRING/String.md) преобразует в строку

## [Object](#оглавление)

- [`delete`](./OBJECT/delete.md) оператор удаления свойства
- [`.hasownproperty`](./OBJECT/hasownproperty.md) принадлежность свойства самому объекту
- [`in`](./OBJECT/in.md) оператор проверки наличия ключа
- [`new Object()`](<./OBJECT/new Object.md>) создает новый объект
- [`Object.assign()`](./OBJECT/Object.assign.md) поверхностное копирование, объединение
- [`Object.create()`](./OBJECT/Object.create.md) создает объект с прототипом
- [`Object.entries()`](./OBJECT/Object.entries.md) создает массив из объекта
- [`Object.fromEntries()`](./OBJECT/Object.fromEntries.md) создает объект из массива
- [`Object.getOwnPropertyNames()`](./OBJECT/Object.getOwnPropertyNames.md) создает массив со всеми свойствами
- [`Object.getOwnPropertySymbols()`](./OBJECT/Object.getOwnPropertySymbols.md) создает массив ключей-символов
- [`Object.getPrototypeOf()`](./OBJECT/Object.getPrototypeOf.md) объект прототипа
- [`Object.hasOwn()`](./OBJECT/Object.hasOwn.md) проверяет собственное ли свойство
- [`Object.is()`](./OBJECT/Object.is.md) проверяет равны ли значения
- [`Object.keys()`](./OBJECT/Object.keys.md) создает массив из перечисляемых свойств
- [`Object.values()`](./OBJECT/Object.values.md) создает массив из перечисляемых свойств
- [`.prototype`](./OBJECT/prototype.md) свойство прототип функции-конструктора

## [RegExp](#оглавление)

- [`new RegExp()`](<./REGEXP/new RegExp.md>) создает регулярное выражение
  - [`.exec()`](./REGEXP/exec.md) подробный поиск одного совпадения
  - [`.test()`](./REGEXP/test.md) соответствие

## [Set](#оглавление)

- [`new Set()`](<./SET/new Set.md>) создает коллекцию для хранения уникальных значений
  - [`.add()`](./SET/add.md) добавляет значение в коллекцию
  - [`.clear()`](./SET/clear.md) удаляет все значения
  - [`.delete()`](./SET/delete.md) удаляет значение из коллекции
  - [`.forEach()`](./SET/forEach.md) обход коллекции
  - [`.has()`](./SET/has.md) проверяет наличие значения
  - [`.size`](./SET/size.md) количество значений

## [String](#оглавление)

- [`new String()`](<./STRING/new String.md>) создает объект String
- [`String()`](./STRING/String.md) преобразует в строку
  - [`.charAt()`](./STRING/charAt.md) получение ключа по индексу
  - [`.endsWith()`](./STRING/endsWith.md) сравнивает конец строки с аргументом
  - [`.includes()`](./STRING/includes.md) проверяет наличие в строке аргумента
  - [`.indexOf()`](./STRING/indexOf.md) поиск индекса переданного аргумента
  - [`.length`](./STRING/length.md) длина строки
  - [`.localeCompare()`](./STRING/localeCompare.md) сравнивает две строки
  - [`.match()`](./STRING/match.md) поиск всех совпадений по regexp
  - [`.repeat()`](./STRING/repeat.md) повторяет строку несколько раз
  - [`.replace()`](./STRING/replace.md) замена части строки, можно использовать regexp
  - [`.replaceAll()`](./STRING/replaceAll.md) замена всех частей строки
  - [`.search()`](./STRING/search.md) поиск индекса по regexp
  - [`.slice()`](./STRING/slice.md) копирует часть строки
  - [`.split()`](./STRING/split.md) преобразует в массив, можно использовать regexp
  - [`.startsWith()`](./STRING/startsWith.md) сравнивает начало строки с аргументом
  - [`.substring()`](./STRING/substring.md) копирует часть строки
  - [`.toLowerCase()`](./STRING/toLowerCase.md) приводит к нижнему регистру
  - [`.toUpperCase()`](./STRING/toUpperCase.md) приводит к верхнему регистр
  - [`.trim()`](./STRING/trim.md) очистка от пробелов

### Преобразование

- [`Number()`](./NUMBER/Number.md) преобразует аргумент в число
- [`parseFloat()`](./WINDOW/parseFloat.md) преобразует строку в число c плавающей точкой
- [`parseInt()`](./WINDOW/parseInt.md) преобразует строку в целое число
- [`.split()`](./STRING/split.md) преобразует в массив, можно использовать regexp

## [Window](#оглавление)

- [`alert()`](./WINDOW/alert.md) модальное окно с текстом
- [`clearInterval()`](./WINDOW/clearInterval.md) удаление интервала
- [`clearTimeout()`](./WINDOW/clearTimeout.md) удаление таймера
- [`confirm()`](./WINDOW/confirm.md) модальное окно с вопросом
- [`console.dir()`](./WINDOW/console.dir.md) выведет в консоль содержимое
- [`console.log()`](./WINDOW/console.log.md) выведет в консоль свойства
- [`console.table()`](./WINDOW/console.table.md) выведет в консоль таблицу
- [`getComputedStyle()`](./WINDOW/getComputedStyle.md) объект со стилями
- [`isFinite()`](./WINDOW/isFinite.md) проверяет преобразованное число на конечность
- [`isNaN()`](./WINDOW/isNaN.md) проверяет преобразованное число на NaN
- [`localStorage`](./WINDOW/localStorage.md) локальное хранилище данных
  - [`localStorage.clear()`](./WINDOW/localStorage.clear.md) полная очистка хранилища
  - [`localStorage.getItem()`](./WINDOW/localStorage.getItem.md) получение значения по ключу
  - [`localStorage.key()`](./WINDOW/localStorage.key.md) получение ключа по индексу
  - [`localStorage.length`](./WINDOW/localStorage.length.md) количество записей в хранилище
  - [`localStorage.removeItem()`](./WINDOW/localStorage.removeItem.md) удаление записи из хранилища
  - [`localStorage.setItem()`](./WINDOW/localStorage.setItem.md) сохранение данных в хранилище
- [`navigator`](./WINDOW/navigator.md) объект описания приложения
  - [`navigator.cookieEnabled`](./WINDOW/navigator.cookieEnabled.md) включена ли поддержка cookie
  - [`navigator.geolocation`](./WINDOW/navigator.geolocation.md) объект геолокации
  - [`navigator.language`](./WINDOW/navigator.language.md) предпочтительный язык интерфейса
  - [`navigator.languages`](./WINDOW/navigator.languages.md) массив предпочтительных языков интерфейса
  - [`navigator.onLine`](./WINDOW/navigator.onLine.md) проверяет наличие подключения к сети
  - [`navigator.userAgent`](./WINDOW/navigator.userAgent.md) название браузера пользователя
- [`parseFloat()`](./WINDOW/parseFloat.md) преобразует строку в число c плавающей точкой
- [`parseInt()`](./WINDOW/parseInt.md) преобразует строку в целое число
- [`prompt()`](./WINDOW/prompt.md) модальное окно с вводом
- [`setInterval()`](./WINDOW/setInterval.md) установка интервала
- [`setTimeout()`](./WINDOW/setTimeout.md) установка таймера
- [`typeof`](./WINDOW/typeof.md) оператор проверки типа
- [`window.innerHeight`](./WINDOW/window.innerHeight.md) высота окна браузера
- [`window.innerWidth`](./WINDOW/window.innerWidth.md) ширина окна браузера
- [`window.scroll()`](./WINDOW/window.scroll.md) прокрутит окно браузера
- [`window.scrollTo()`](./WINDOW/window.scrollTo.md) прокрутит окно браузера
- [`window.scrollX`](./WINDOW/window.scrollX.md) прокрутка окна браузера по горизонтали
- [`window.scrollY`](./WINDOW/window.scrollY.md) прокрутка окна браузера по вертикали
