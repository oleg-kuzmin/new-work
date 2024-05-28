<style>
  * {
    user-select: none;    
  }
</style>

## Window

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
- [`prompt()`](./WINDOW/prompt.md) модальное окно с вводом
- [`setInterval()`](./WINDOW/setInterval.md) установка интервала
- [`setTimeout()`](./WINDOW/setTimeout.md) установка таймера
- [`typeof`](./WINDOW/typeof.md) оператор проверки типа
- [`window.innerHeight`](./WINDOW/innerHeight.md) высота окна браузера
- [`window.innerWidth`](./WINDOW/innerWidth.md) ширина окна браузера
- [`window.scroll()`](./WINDOW/window.scroll.md) прокрутит окно браузера
- [`window.scrollTo()`](./WINDOW/window.scrollTo.md) прокрутит окно браузера
- [`window.scrollX`](./WINDOW/window.scrollX.md) прокрутка окна браузера по горизонтали
- [`window.scrollY`](./WINDOW/window.scrollY.md) прокрутка окна браузера по вертикали

## Object

- [`delete`](./OBJECT/delete.md) оператор удаления свойства
- [`.hasownproperty`](./OBJECT/hasownproperty.md) принадлежность свойства самому объекту
- [`in`](./OBJECT/in.md) оператор проверки наличия ключа
- [`new Object()`](<./OBJECT/new Object.md>) создает новый объект
- [`Object.assign()`](./OBJECT/Object.assign.md) поверхностное копирование, объединение
- [`Object.create()`](./OBJECT/Object.create.md) создает объект с прототипом
- [`Object.entries()`](./OBJECT/Object.entries.md) создает массив из объекта
- [`Object.getOwnPropertyNames()`](./OBJECT/Object.getOwnPropertyNames.md) создает массив со всеми свойствами
- [`Object.getOwnPropertySymbols()`](./OBJECT/Object.getOwnPropertySymbols.md) создает массив ключей-символов
- [`Object.getPrototypeOf()`](./OBJECT/Object.getPrototypeOf.md) объект прототипа
- [`Object.hasOwn()`](./OBJECT/Object.hasOwn.md) проверяет собственное ли свойство
- [`Object.is()`](./OBJECT/Object.is.md) проверяет равны ли значения
- [`Object.keys()`](./OBJECT/Object.keys.md) создает массив из перечисляемых свойств
- [`Object.values()`](./OBJECT/Object.values.md) создает массив из перечисляемых свойств
- [`.prototype`](./OBJECT/prototype.md) свойство прототип функции-конструктора

## Function

- [`arguments`](./FUNCTION/arguments.md) псевдомассив всех переданных аргументов

## Async

- [`async await`](<./ASYNC/async await.md>) асинхронные функции
- [`fetch()`](./ASYNC/FETCH/fetch.md) запрос на сервер
  - [`responce.ok`](./ASYNC/FETCH/responce.ok.md) успешность ответа
  - [`responce.status`](./ASYNC/FETCH/responce.status.md) статус ответа
  - [`responce.statusText`](./ASYNC/FETCH/responce.statusText.md) сообщение статуса ответа
  - [`responce.json()`](./ASYNC/FETCH/responce.json.md) преобразует json-ответ в объект js
  - [`responce.text()`](./ASYNC/FETCH/responce.text.md) преобразует json-ответ в текст
  - [`responce.blob()`](./ASYNC/FETCH/responce.blob.md) преобразует json-ответ в бинарные данные
  - [`responce.headers.get()`](./ASYNC/FETCH/responce.headers.get.md) получает значение заголовка
- [`new Promise()`](<./ASYNC/PROMISE/new Promise.md>) создает promise
  - [`.then()`](./ASYNC/PROMISE/then.md) обработчик выполненного promise
  - [`.catch()`](./ASYNC/PROMISE/catch.md) обработчик отклоненного promise
  - [`.finally()`](./ASYNC/PROMISE/finally.md) обработчик завершенного promise
- [`Promise.resolve()`](./ASYNC/PROMISE/Promise.resolve.md) создает выполненный promise
- [`Promise.reject()`](./ASYNC/PROMISE/Promise.reject.md) создает отклоненный promise
- [`Promise.all()`](./ASYNC/PROMISE/Promise.all.md) все promise выполнены
- [`Promise.allSettled()`](./ASYNC/PROMISE/Promise.allSettled.md) все promise завершены
- [`Promise.any()`](./ASYNC/PROMISE/Promise.any.md) первый выполненный promise
- [`Promise.race()`](./ASYNC/PROMISE/Promise.race.md) первый завершенный promise

## ООП

- [`Наследование`](./ООП/Наследование.md)
- [`Полиморфизм`](./ООП/Полиморфизм.md)
- [`Приватные поля`](<./ООП/Приватные поля.md>)
- [`Принципы ООП`](<./ООП/Принципы ООП.md>)
- [`Создание класса`](<./ООП/Создание класса.md>)
- [`Создание экземпляра класса`](<./ООП/Создание экземпляра класса.md>)
- [`Теория ООП`](<./ООП/Теория ООП.md>)
- [`Что такое this`](<./ООП/Что такое this.md>)

## Теория

- [`Деструктуризация`](./ТЕОРИЯ/Деструктуризация.md)
- [`Замыкания`](./ТЕОРИЯ/Замыкания.md)
- [`Операторы`](./ТЕОРИЯ/Операторы.md)
- [`Определение типа`](<./ТЕОРИЯ/Определение типа.md>)
- [`Ошибки`](./ТЕОРИЯ/Ошибки.md)
- [`Переменные const, let и var`](<./ТЕОРИЯ/Переменные const, let и var.md>)
- [`Преобразование (логическое)`](<./ТЕОРИЯ/Преобразование (логическое).md>)
- [`Преобразование (строковое)`](<./ТЕОРИЯ/Преобразование (строковое).md>)
- [`Преобразование (численное)`](<./ТЕОРИЯ/Преобразование (численное).md>)
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

## Циклы

- [`while`](./ЦИКЛЫ/while.md) проверка условия до первой итерации
- [`do while`](<./ЦИКЛЫ/do while.md>) проверка условия после первой итерации
- [`for`](./ЦИКЛЫ/for.md) цикл со счетчиком
- [`for of`](<./ЦИКЛЫ/for of.md>) обход свойств итерируемого объекта, не включая пользовательские прототипы
- [`for in`](<./ЦИКЛЫ/for in.md>) обход свойств объекта, включая пользовательские прототипы

## Set

- [`new Set()`](<./SET/new Set.md>) создает коллекцию для хранения уникальных значений
  - [`.add()`](./SET/add.md) добавляет значение в коллекцию
  - [`.clear()`](./SET/clear.md) удаляет все значения
  - [`.delete()`](./SET/delete.md) удаляет значение из коллекции
  - [`.forEach()`](./SET/forEach.md) обход коллекции
  - [`.has()`](./SET/has.md) проверяет наличие значения
  - [`.size`](./SET/size.md) количество значений

## Map

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

## RegExp

- [`new RegExp()`](<./REGEXP/new RegExp.md>) создает регулярное выражение
  - [`.exec()`](./REGEXP/exec.md) подробный поиск одного совпадения
  - [`.test()`](./REGEXP/test.md) соответствие

## Array

- [`.includes()`](./ARRAY/includes.md) проверяет наличие в массиве аргумента
- [`.indexOf()`](./STRING/indexOf.md) поиск индекса переданного аргумента

## String

- [`new String()`](<./STRING/new String.md>) создает объект String
  - [`.charAt()`](./STRING/charAt.md) получение ключа по индексу
  - [`.endsWith()`](./STRING/endsWith.md) сравнивает конец строки с аргументом
  - [`.includes()`](./STRING/includes.md) проверяет наличие в строке аргумента
  - [`.indexOf()`](./STRING/indexOf.md) поиск индекса переданного аргумента
  - [`.length`](./STRING/length.md) длина строки
  - [`.localeCompare()`](./STRING/localeCompare.md) сравнивает две строки
  - [`.match()`](./STRING/match.md) поиск всех совпадений по regexp
  - [`.replace()`](./STRING/replace.md) замена совпадения по regexp
  - [`.search()`](./STRING/search.md) поиск индекса по regexp
  - [`.split()`](./STRING/split.md) разделение на массив по regexp
  - [`.endsWith()`](./STRING/endsWith.md) сравнивает начало строки с аргументом

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
