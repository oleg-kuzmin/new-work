# [`JavaScript`](../index.md)

- [Общее](#общее)
- [Асинхронные действия](#асинхронные-действия)
- [ООП](#ооп)
- [Операторы](#операторы)
- [Циклы](#циклы)
- [Array](#array)
- [Date](#date)
- [Document](#document)
- [Element](#element)
- [Event.type](#eventtype)
- [Event](#event)
- [Function](#function)
- [Map](#map)
- [Number](#number)
- [Object](#object)
- [RegExp](#regexp)
- [Set](#set)
- [String](#string)
- [Window](#window)

## [Общее](#javascript)

- [`Деструктуризация`](./Общее/Деструктуризация.md)
- [`Замыкания`](./Общее/Замыкания.md)
- [`Определение типа`](<./Общее/Определение типа.md>)
- [`Ошибки`](./Общее/Ошибки.md)
- [`Переменные const, let и var`](<./Общее/Переменные const, let и var.md>)
- [`Преобразование (логическое)`](<./Общее/Преобразование (логическое).md>)
- [`Преобразование (строковое)`](<./Общее/Преобразование (строковое).md>)
- [`Преобразование (численное)`](<./Общее/Преобразование (численное).md>)
- [`Словарь`](./Общее/Словарь.md)
- [`Условные конструкции`](<./Общее/Условные конструкции.md>)
- [`Функции`](./Общее/Функции.md)
- [`Экспорт и импорт CommonJS`](<./Общее/Экспорт и импорт CommonJS.md>)
- [`Экспорт и импорт ES Modules`](<./Общее/Экспорт и импорт ES Modules.md>)
- [`type bigInt`](<./Общее/type bigInt.md>)
- [`type boolean`](<./Общее/type boolean.md>)
- [`type null`](<./Общее/type null.md>)
- [`type symbol`](<./Общее/type symbol.md>)
- [`type undefined`](<./Общее/type undefined.md>)

## [Асинхронные действия](#javascript)

- [`async await`](<./Асинхронные действия/async await.md>) асинхронные функции

### [XMLHttpRequest](#javascript)

- [`new XMLHttpRequest()`](<./Асинхронные действия/XMLHttpRequest/new XMLHttpRequest.md>) объект legacy-запроса
  - [`.open()`](<./Асинхронные действия/XMLHttpRequest/open.md>) создает запрос
  - [`.response`](<./Асинхронные действия/XMLHttpRequest/response.md>) объект ответа
  - [`.responseType`](<./Асинхронные действия/XMLHttpRequest/responseType.md>) тип ответа
  - [`.send()`](<./Асинхронные действия/XMLHttpRequest/send.md>) отправляет запрос

### [Fetch](#javascript)

- [`fetch()`](<./Асинхронные действия/Fetch/fetch.md>) запрос на сервер
  - [`.blob()`](<./Асинхронные действия/Fetch/.blob.md>) преобразует json-ответ в бинарные данные
  - [`.headers.get()`](<./Асинхронные действия/Fetch/.headers.get.md>) получает значение заголовка
  - [`.json()`](<./Асинхронные действия/Fetch/.json.md>) преобразует json-ответ в объект js
  - [`.ok`](<./Асинхронные действия/Fetch/.ok.md>) успешность ответа
  - [`.status`](<./Асинхронные действия/Fetch/.status.md>) статус ответа
  - [`.statusText`](<./Асинхронные действия/Fetch/.statusText.md>) сообщение статуса ответа
  - [`.text()`](<./Асинхронные действия/Fetch/.text.md>) преобразует json-ответ в текст

### [Promise](#javascript)

- [`new Promise()`](<./Асинхронные действия/Promise/new Promise.md>) создает promise
  - [`.catch()`](<./Асинхронные действия/Promise/.catch.md>) обработчик отклоненного promise
  - [`.finally()`](<./Асинхронные действия/Promise/.finally.md>) обработчик завершенного promise
  - [`.then()`](<./Асинхронные действия/Promise/.then.md>) обработчик выполненного promise
- [`Promise.all()`](<./Асинхронные действия/Promise/Promise.all.md>) все promise выполнены
- [`Promise.allSettled()`](<./Асинхронные действия/Promise/Promise.allSettled.md>) все promise завершены
- [`Promise.any()`](<./Асинхронные действия/Promise/Promise.any.md>) первый выполненный promise
- [`Promise.race()`](<./Асинхронные действия/Promise/Promise.race.md>) первый завершенный promise
- [`Promise.reject()`](<./Асинхронные действия/Promise/Promise.reject.md>) создает отклоненный promise
- [`Promise.resolve()`](<./Асинхронные действия/Promise/Promise.resolve.md>) создает выполненный promise

### [JSON](#javascript)

- [`JSON`](<./Асинхронные действия/JSON/JSON.md>) формат обмена данными
- [`JSON.parse()`](<./Асинхронные действия/JSON/JSON.parse.md>) преобразует JSON в объект
- [`JSON.stringify()`](<./Асинхронные действия/JSON/JSON.stringify.md>) преобразует объект в JSON

## [ООП](#javascript)

- [`Наследование`](./ООП/Наследование.md)
- [`Полиморфизм`](./ООП/Полиморфизм.md)
- [`Приватные поля`](<./ООП/Приватные поля.md>)
- [`Принципы ООП`](<./ООП/Принципы ООП.md>)
- [`Создание класса`](<./ООП/Создание класса.md>)
- [`Создание экземпляра класса`](<./ООП/Создание экземпляра класса.md>)
- [`Статические свойства и методы`](<./ООП/Статические свойства и методы.md>)
- [`Теория ООП`](<./ООП/Теория ООП.md>)
- [`Что такое this`](<./ООП/Что такое this.md>)
- [`Get и Set`](<./ООП/Get и Set.md>)

## [Операторы](#javascript)

- [`...`](<./Операторы/Spread, Rest.md>) spread и rest оператор

### [Операторы группировки](#javascript)

- [`(..)`](./Операторы/Скобки.md) скобки (18)

### [Унарные операторы](#javascript)

- [`..++ постфиксный инкремент (15)`](<./Операторы/Постфиксный инкремент.md>)
- [`..-- постфиксный декремент (15)`](<./Операторы/Постфиксный декремент.md>)
- [`++.. префиксный инкремент (14)`](<./Операторы/Префиксный инкремент.md>)
- [`--.. префиксный декремент (14)`](<./Операторы/Префиксный декремент.md>)
- [`+ унарный плюс (14)`](<./Операторы/Унарный плюс.md>)
- [`- унарный минус (14)`](<./Операторы/Унарный минус.md>)
- [`! логическое НЕ (14)`](<./Операторы/Логическое НЕ.md>)

### [Бинарные операторы](#javascript)

- [`** возведение в степень (13)`](<./Операторы/Возведение в степень.md>)
- [`* умножение (12)`](./Операторы/Умножение.md)
- [`/ деление (12)`](./Операторы/Деление.md)
- [`% остаток от целочисленного деления (12)`](<./Операторы/Остаток от целочисленного деления.md>)
- [`+ бинарный плюс (11)`](<./Операторы/Бинарный плюс.md>)
- [`- бинарный минус (11)`](<./Операторы/Бинарный минус.md>)
- [`< меньше (9)`](./Операторы/Меньше.md)
- [`<= меньше или равно (9)`](<./Операторы/Меньше или равно.md>)
- [`> больше (9)`](./Операторы/Больше.md)
- [`>= больше или равно (9)`](<./Операторы/Больше или равно.md>)
- [`== нестрогое равенство (8)`](<./Операторы/Нестрогое равенство.md>)
- [`!= нестрогое неравенство (8)`](<./Операторы/Нестрогое неравенство.md>)
- [`=== строгое равенство (8)`](<./Операторы/Строгое равенство.md>)
- [`!== строгое неравенство (8)`](<./Операторы/Строгое неравенство.md>)
- [`&& логическое И (4)`](<./Операторы/Логическое И.md>) first == false ? first : second
- [`|| логическое ИЛИ (3)`](<./Операторы/Логическое ИЛИ.md>) first == true ? first : second
- [`?? нулевое слияние (3)`](<./Операторы/Нулевое слияние.md>) first !== null/undefined ? first : second
- [`= присваивание (2)`](./Операторы/Присваивание.md)
- [`+= присваивание со сложением (2)`](<./Операторы/Присваивание со сложением.md>)
- [`-= присваивание с вычитанием (2)`](<./Операторы/Присваивание с вычитанием.md>)
- [`*= присваивание с умножением(2)`](<./Операторы/Присваивание с умножением.md>)
- [`/= присваивание с делением (2)`](<./Операторы/Присваивание с делением.md>)
- [`**= присваивание с возведением в степень (2)`](<./Операторы/Присваивание с возведением в степень.md>)
- [`&&= присваивание с логическим И (2)`](<./Операторы/Присваивание с логическим И.md>)
- [`||= присваивание с логическим ИЛИ (2)`](<./Операторы/Присваивание с логическим ИЛИ.md>)
- [`??= присваивание с нулевым слиянием (2)`](<./Операторы/Присваивание c нулевым слиянием.md>)
- [`, запятая (1)`](./Операторы/Запятая.md)

### [Тернарный оператор](#javascript)

- [`.. ? .. : .. тернарный оператор (2)`](<./Операторы/Тернарный оператор.md>)

## [Циклы](#javascript)

- [`while`](./Циклы/while.md) проверка условия до первой итерации
- [`do while`](<./Циклы/do while.md>) проверка условия после первой итерации
- [`for`](./Циклы/for.md) цикл со счетчиком
- [`for in`](<./Циклы/for in.md>) обход свойств объекта
- [`for of`](<./Циклы/for of.md>) обход свойств массива, итерируемого объекта, коллекции

## [Array](#javascript)

- [`Array()`](./Array/Array.md) создает массив
- [`Array.from()`](./Array/Array.from.md) создает массив из коллекции или итерируемого объекта
- [`Array.isArray()`](./Array/Array.isArray.md) проверка на массив
- [`Array.of()`](./Array/Array.of.md) создает массив из переданных аргументов

### [Иммутабельные методы](#javascript)

- [`.length`](./Array/.length.md) размер массива
- [`.concat()`](./Array/.concat.md) объединяет элементы
- [`.every()`](./Array/.every.md) проверяет все ли элементы соответствуют условию
- [`.filter()`](./Array/.filter.md) оставляет те элементы, которые соответствуют условию
- [`.find()`](./Array/.find.md) поиск элемента, который соответствуют условию
- [`.findindex()`](./Array/.findindex.md) поиск индекса элемента, который соответствуют условию
- [`.forEach()`](./Array/.forEach.md) перебирает элементы массива
- [`.includes()`](./Array/.includes.md) проверяет наличие в массиве аргумента
- [`.indexOf()`](./Array/.indexOf.md) поиск индекса переданного аргумента
- [`.join()`](./Array/.join.md) преобразует массив в строку
- [`.lastIndexOf()`](./Array/.lastIndexOf.md) поиск последнего индекса переданного аргумента
- [`.map()`](./Array/.map.md) создание массива из другого
- [`.reduce()`](./Array/.reduce.md) сведение массива к одному значению
- [`.slice()`](./Array/.slice.md) создает копию массива из нужных элементов
- [`.some()`](./Array/.some.md) проверяет соответствует ли условию хотя бы один элемент

### [Мутабельные методы](#javascript)

- [`.fill()`](./Array/.fill.md) заполняет значениями
- [`.flat()`](./Array/.flat.md) разворачивает вложенные массивы
- [`.pop()`](./Array/.pop.md) удаляет последний элемент
- [`.push()`](./Array/.push.md) добавляет в конец массива
- [`.reverse()`](./Array/.reverse.md) инвертирует порядок элементов
- [`.shift()`](./Array/.shift.md) удаляет первый элемент
- [`.sort()`](./Array/.sort.md) сортирует элементы массива
- [`.splice()`](./Array/.splice.md) заменяет часть элементов, добавляет новые
- [`.unshift()`](./Array/.unshift.md) добавляет в начало массива

### [Преобразование](#javascript)

- [`Array => String: (.join)`](./Array/.join.md) преобразует массив в строку
- [`Array => Object: (Object.fromEntries)`](./Object/Object.fromEntries.md) создает объект из массива

## [Date](#javascript)

- [`Date.now()`](./Date/Date.now.md) миллисекунды с 01 января 1970
- [`Date.parse()`](./Date/Date.parse.md) преобразует строку в миллисекунды с 01 января 1970
- [`new Date()`](<./Date/new Date.md>) создает объект Date
  - [`.getDate()`](./Date/getDate.md) возвращает день месяца (1-31)
  - [`.getDay()`](./Date/getDay.md) возвращает день недели (0-6)
  - [`.getFullYear()`](./Date/getFullYear.md) возвращает год
  - [`.getHours()`](./Date/getHours.md) возвращает час (0-23)
  - [`.getMilliseconds()`](./Date/getMilliseconds.md) возвращает миллисекунды (0-999)
  - [`.getMinutes()`](./Date/getMinutes.md) возвращает минуты (0-59)
  - [`.getMonth()`](./Date/getMonth.md) возвращает месяц (0-11)
  - [`.getSeconds()`](./Date/getSeconds.md) возвращает секунды (0-59)
  - [`.getTime()`](./Date/getTime.md) возвращает миллисекунды с 01 января 1970
  - [`.getTimezoneOffset()`](./Date/getTimezoneOffset.md) возвращает разницу в минутах с UTC
  - [`.setDate()`](./Date/setDate.md) устанавливает день месяца (1-31)
  - [`.setFullYear()`](./Date/setFullYear.md) устанавливает год
  - [`.setHours()`](./Date/setHours.md) устанавливает час (0-23)
  - [`.setMilliseconds()`](./Date/setMilliseconds.md) устанавливает миллисекунды (0-999)
  - [`.setMinutes()`](./Date/setMinutes.md) устанавливает минуты (0-59)
  - [`.setMonth()`](./Date/setMonth.md) устанавливает месяц (0-11)TAGS UI
  - [`.setSeconds()`](./Date/setSeconds.md) устанавливает секунды (0-59)
  - [`.setTime()`](./Date/setTime.md) устанавливает миллисекунды с 01 января 1970
  - [`.toISOString()`](./Date/toISOString.md) преобразует объект Date в строку формата iso
  - [`.toLocaleDateString()`](./Date/toLocaleDateString.md) преобразует объект Date в строку различных форматов
  - [`.toLocaleTimeString()`](./Date/toLocaleTimeString.md) преобразует объект Date в строку в формате часы:минуты:секунды
  - [`.toUTCString()`](./Date/toUTCString.md) преобразует объект Date в строку в формате UTC

## [Document](#javascript)

- [`document.body`](./Document/document.body.md) тело страницы
- [`document.cookie`](./Document/document.cookie.md) cookie страницы
- [`document.createElement()`](./Document/document.createElement.md) создает элемент
- [`document.createTextNode()`](./Document/document.createTextNode.md) создает текстовый узел
- [`document.documentElement`](./Document/document.documentElement.md) коревой элемент страницы
- [`document.forms`](./Document/document.forms.md) HTMLCollection всех форм (динамическая)
- [`document.getElementById()`](./Document/document.getElementById.md) поиск элемента по id
- [`document.getElementsByClassName()`](./Document/document.getElementsByClassName.md) HTMLCollection по классу (динамическая)
- [`document.getElementsByName()`](./Document/document.getElementsByName.md) NodeList по имени (динамическая)
- [`document.getElementsByTagName()`](./Document/document.getElementsByTagName.md) HTMLCollection по тегу (динамическая)
- [`document.head`](./Document/document.head.md) голова страницы
- [`document.querySelector()`](./Document/document.querySelector.md) поиск элемента по селектору
- [`document.querySelectorAll()`](./Document/document.querySelectorAll.md) NodeList по селектору (статическая)
- [`document.title`](./Document/document.title.md) заголовок страницы

## [Element](#javascript)

### [Атрибуты](#javascript)

- [`.checked`](./Element/.checked.md) атрибут checked
- [`.className`](./Element/.className.md) атрибут class
- [`.contentEditable`](./Element/.contentEditable.md) атрибут contentEditable
- [`.dataset`](./Element/.dataset.md) объект с data-атрибутами
- [`.disabled`](./Element/.disabled.md) атрибут disabled
- [`.getAttribute()`](./Element/.getAttribute.md) возвращает значение атрибута
- [`.hasAttribute()`](./Element/.hasAttribute.md) проверяет наличие атрибута
- [`.hidden`](./Element/.hidden.md) атрибут hidden
- [`.href`](./Element/.href.md) атрибут href
- [`.htmlFor`](./Element/.htmlFor.md) атрибут for
- [`.id`](./Element/.id.md) атрибут id
- [`.removeAttribute()`](./Element/elment.removeAttribute.md) удаляет атрибут
- [`.setAttribute()`](./Element/.setAttribute.md) устанавливает атрибут
- [`.style`](./Element/.style.md) объект с атрибутом style
  - [`.style.setProperty()`](./Element/.style.setProperty.md) устанавливает стиль
- [`.type`](./Element/.type.md) атрибут type
- [`.value`](./Element/.value.md) атрибут value

### [Классы](#javascript)

- [`.classList`](./Element/.classList.md) псевдомассив классов
  - [`.classList.add()`](./Element/.classList.add.md) добавляет класс
  - [`.classList.contains()`](./Element/.classList.contains.md) проверяет наличие класса
  - [`.classList.remove()`](./Element/.classList.remove.md) удаляет класс
  - [`.classList.replace()`](./Element/.classList.replace.md) заменяет класс
  - [`.classList.toggle()`](./Element/.classList.toggle.md) переключает класс

### [Метрики](#javascript)

- [`.clientHeight`](./Element/.clientHeight.md) высота (content + padding)
- [`.clientLeft`](./Element/.clientLeft.md) отступ сверху (border)
- [`.clientTop`](./Element/.clientTop.md) отступ сверху (border)
- [`.clientWidth`](./Element/.clientWidth.md) ширина (content + padding)
- [`.getBoundingClientRect()`](./Element/.getBoundingClientRect.md) объект с координатами
- [`.offsetHeight`](./Element/elment.offsetHeight.md) высота (content + padding + scrollBar + border)
- [`.offsetLeft`](./Element/.offsetLeft.md) отступ слева от offsetParent
- [`.offsetParent`](./Element/.offsetParent.md) ближайший родитель-ориентир для рендеринга
- [`.offsetTop`](./Element/.offsetTop.md) отступ сверху от offsetParent
- [`.offsetWidth`](./Element/.offsetWidth.md) ширина (content + padding + scrollBar + border)
- [`.scrollHeight`](./Element/.scrollHeight.md) высота (content + padding + scrollBar)
- [`.scrollLeft`](./Element/.scrollLeft.md) ширина прокрученной области
- [`.scrollTop`](./Element/.scrollTop.md) высота прокрученной области
- [`.scrollWidth`](./Element/.scrollWidth.md) ширина (content + padding + scrollBar)

### [Форма](#javascript)

- [`.focus()`](./Element/.focus.md) фокус на элементе
- [`.reset()`](./Element/.reset.md) сбрасывает поля формы
- [`.submit()`](./Element/.submit.md) отправка формы
- [`.validationMessage`](./Element/.validationMessage.md) текст сообщения об ошибке
- [`.validity`](./Element/.validity.md) объект проверки ошибок

### [DOM Добавление, перемещение, удаление](#javascript)

- [`.after()`](./Element/.after.md) добавляет, перемещает ПОСЛЕ узла
- [`.append()`](./Element/.append.md) добавляет, перемещает в КОНЕЦ узла
- [`.before()`](./Element/.before.md) добавляет, перемещает ДО узла
- [`.cloneNode()`](./Element/.cloneNode.md) клонирует элемент
- [`.prepend()`](./Element/.prepend.md) добавляет, перемещает в НАЧАЛО узла
- [`.remove()`](./Element/.remove.md) удаляет элемент
- [`.replaceWith()`](./Element/.replaceWith.md) заменяет элемент

### [DOM Поиск](#javascript)

- [`.childNodes`](./Element/.childNodes.md) NodeList дочерних узлов (динамическая)
- [`.children`](./Element/.children.md) HTMLCollection дочерних элементов (динамическая)
- [`.closest()`](./Element/.closest.md) находит ближайщего родителя по селектору
- [`.firstElementChild`](./Element/.firstElementChild.md) первый дочерний элемент
- [`.getElementsByClassName()`](./Element/.getElementsByClassName.md) HTMLCollection по классу (динамическая)
- [`.getElementsByTagName()`](./Element/.getElementsByTagName.md) HTMLCollection по тегу (динамическая)
- [`.lastElementChild`](./Element/.lastElementChild.md) последний дочерний элемент
- [`.matches()`](./Element/.matches.md) проверяет элемент на соответствие селектору
- [`.nextElementSibling`](./Element/.nextElementSibling.md) следующий соседний элемент
- [`.parentElement`](./Element/.parentElement.md) ближайший родитель
- [`.previousElementSibling`](./Element/.previousElementSibling.md) предыдущий соседний элемент
- [`.querySelector()`](./Element/.querySelector.md) поиск элемента по селектору
- [`.querySelectorAll()`](./Element/.querySelectorAll.md) NodeList по селектору (статическая)

### [DOM События](#javascript)

- [`.addEventListener()`](./Element/.addEventListener.md) добавление слушателя
- [`.dispatchEvent()`](./Element/.dispatchEvent.md) запускает кастомное событие
- [`.removeEventListener()`](./Element/.removeEventListener.md) удаление слушателя

### [DOM Содержимое](#javascript)

- [`.content`](./Element/.content.md) содержимое template
- [`.innerHTML`](./Element/.innerHTML.md) содержимое с разметкой
- [`.innerText`](./Element/.innerText.md) текстовое содержимое (видимое)
- [`.insertAdjacentHTML()`](./Element/.insertAdjacentHTML.md) вставляет разметку
- [`.insertAdjacentText()`](./Element/.insertAdjacentText.md) вставляет текст
- [`.outerHTML`](./Element/.outerHTML.md) содержимое с разметкой + сам элемент
- [`.textContent`](./Element/.textContent.md) текстовое содержимое (видимое и скрытое)

## [Event.type](#javascript)

- [`blur`](<./Event Type/blur.md>) снятие фокуса
- [`change`](<./Event Type/change.md>) изменение и фиксирование значения
- [`click`](<./Event Type/click.md>) левая кнопка мыши нажата и отпущена
- [`contextmenu`](<./Event Type/contextmenu.md>) нажатие правой кнопки мыши
- [`dblclick`](<./Event Type/dblclick.md>) два события click подряд
- [`DOMContentLoaded`](<./Event Type/DOMContentLoaded.md>) dom подготовлен
- [`focus`](<./Event Type/focus.md>) установление фокуса
- [`input`](<./Event Type/input.md>) изменение значения
- [`keydown`](<./Event Type/keydown.md>) нажатие на любую клавишу
- [`keypress`](<./Event Type/keypress.md>) нажатие на клавишу не-модификатор
- [`keyup`](<./Event Type/keyup.md>) отпускание любой клавиши
- [`load`](<./Event Type/load.md>) html и ресурсы заружены
- [`mousedown`](<./Event Type/mousedown.md>) нажатие любой кнопки мыши
- [`mousemove`](<./Event Type/mousemove.md>) движение мыши над элементом
- [`mouseout`](<./Event Type/mouseout.md>) убирание курсора мыши
- [`mouseover`](<./Event Type/mouseover.md>) наведение курсора мыши
- [`mouseup`](<./Event Type/mouseup.md>) отпускание любой кнопки мыши
- [`offline`](<./Event Type/offline.md>) отключение интернета
- [`onresize`](<./Event Type/resize.md>) изменение окна браузера
- [`orientationchange`](<./Event Type/orientationchange.md>) изменение ориентации экрана
- [`pointermove`](<./Event Type/pointermove.md>) движение мыши в любом месте
- [`scroll`](<./Event Type/scroll.md>) прокрутка страницы
- [`storage`](<./Event Type/storage.md>) обновление local или session storage
- [`submit`](<./Event Type/submit.md>) отправка формы
- [`unhandledrejection`](<./Event Type/unhandledrejection.md>) отсутствует обработчик ошибки promise
- [`wheel`](<./Event Type/wheel.md>) прокрутка колеса мыши

## [Event](#javascript)

- [`.new Event()`](<./Event/new Event.md>) создает кастомное событие
- [`.new CustomEvent()`](<./Event/new CustomEvent.md>) создает кастомное событие с данными
- [`evt`](./Event/Evt.md) объект события
  - [`.bubbles`](./Event/.bubbles.md) всплывающее событие
  - [`.cancelable`](./Event/.cancelable.md) отменяемое событие
  - [`.clientX`](./Event/.clientX.md) координаты X от окна просмотра
  - [`.clientY`](./Event/.clientY.md) координаты Y от окна просмотра
  - [`.composedPath()`](./Event/.composedPath.md) элементы где сработало событие
  - [`.currentTarget`](./Event/.currentTarget.md) элемент на котором висит обработчик
  - [`.defaultPrevented`](./Event/.defaultPrevented.md) отменено ли событие по умолчанию
  - [`.eventPhase`](./Event/.eventPhase.md) фаза события
  - [`.isTrusted`](./Event/.isTrusted.md) пользовательское ли это событие
  - [`.key`](./Event/.key.md) название нажатой клавиши
  - [`.pageX`](./Event/.pageX.md) координаты X от угла страницы
  - [`.pageY`](./Event/.pageY.md) координаты Y от угла страницы
  - [`.preventDefault()`](./Event/.preventDefault.md) отменяет поведение по умолчанию
  - [`.screenX`](./Event/.screenX.md) координаты X от угла монитора
  - [`.screenY`](./Event/.screenY.md) координаты Y от угла монитора
  - [`.stopImmediatePropagation()`](./Event/.stopImmediatePropagation.md) остановка всплытия и обработчиков
  - [`.stopPropagation()`](./Event/.stopPropagation.md) остановка всплытия события
  - [`.target`](./Event/.target.md) элемент где произошло событие
  - [`.timeStamp`](./Event/.timeStamp.md) время возникновения события
  - [`.type`](./Event/.type.md) тип события
  - [`.view`](./Event/.view.md) объект window где произошло событие

## [Function](#javascript)

- [`.apply()`](./Function/.apply.md) вызывает метод объекта с конкретными контекстом и значением
- [`.bind()`](./Function/.bind.md) привязывает конкретный контекст к методу объекта
- [`.call()`](./Function/.call.md) вызывает метод объекта с конкретными контекстом и значением
- [`arguments`](./Function/arguments.md) псевдомассив всех переданных аргументов

## [Map](#javascript)

- [`new Map()`](<./Map/new Map.md>) создает коллекцию для хранения пар ключ-значение
  - [`.clear()`](./Map/.clear.md) удаляет все значения
  - [`.delete()`](./Map/.delete.md) удаляет значение из коллекции
  - [`.entries()`](./Map/.entries.md) возвращает итератор пар ключ-значение
  - [`.forEach()`](./Map/.forEach.md) обход коллекции
  - [`.get()`](./Map/.get.md) получает значение
  - [`.has()`](./Map/.has.md) проверяет наличие значения
  - [`.keys()`](./Map/.keys.md) возвращает итератор ключей
  - [`.set()`](./Map/.set.md) сохраняет значение в коллекцию
  - [`.size`](./Map/.size.md) количество значений
  - [`.values()`](./Map/.values.md) возвращает итератор значений

## [Number](#javascript)

- [`type number`](<./Number/type number.md>) тип number
- [`new Number()`](<./Number/new Number.md>) создает объект Number
- [`Number()`](./Number/Number.md) преобразует аргумент в число
- [`Number.isFinite()`](./Number/Number.isFinite.md) проверяет число на конечность
- [`Number.isInteger()`](./Number/Number.isInteger.md) проверяет число на целое или дробное
- [`Number.isNaN()`](./Number/Number.isNaN.md) проверяет число на NaN

### [Методы](#javascript)

- [`.toFixed()`](./Number/.toFixed.md) преобразует в строку и округляет
- [`.toLocaleString()`](./Number/.toLocaleString.md) преобразует в строку c учетом языка
- [`.toString()`](./Number/.toString.md) преобразует в строку

### [Math](#javascript)

- [`Math.abs()`](./Number/Math.abs.md) вычисляет модуль числа
- [`Math.ceil()`](./Number/Math.ceil.md) округление до целого вверх
- [`Math.floor()`](./Number/Math.floor.md) округление до целого вниз
- [`Math.max()`](./Number/Math.max.md) наибольшее из переданных аргументов
- [`Math.min()`](./Number/Math.min.md) наименьшее из переданных аргументов
- [`Math.pow()`](./Number/Math.pow.md) возведение в степень
- [`Math.random()`](./Number/Math.random.md) случайное число
- [`Math.round()`](./Number/Math.round.md) округление до ближайшего целого
- [`Math.sqrt()`](./Number/Math.sqrt.md) вычисляет квадратный корень числа
- [`Math.trunc()`](./Number/Math.trunc.md) отбрасывает дробную часть

### [Преобразование](#javascript)

- [`Number => String (.toFixed)`](./Number/number.toFixed.md) преобразует в строку и округляет
- [`Number => String (.toLocaleString)`](./Number/number.toLocaleString.md) преобразует в строку c учетом языка
- [`Number => String (.toString)`](./Number/number.toString.md) преобразует в строку
- [`Number => String (String)`](./String/String.md) преобразует в строку

## [Object](#javascript)

- [`type object`](<./Object/type object.md>) тип object
- [`new Object()`](<./Object/new Object.md>) создает новый объект
- [`Object.assign()`](./Object/Object.assign.md) поверхностное копирование, объединение
- [`Object.create()`](./Object/Object.create.md) создает объект с прототипом
- [`Object.entries()`](./Object/Object.entries.md) создает массив массивов пар ключ-значение из объекта
- [`Object.fromEntries()`](./Object/Object.fromEntries.md) создает объект из массива
- [`Object.getOwnPropertyNames()`](./Object/Object.getOwnPropertyNames.md) создает массив всех собственных свойств
- [`Object.getOwnPropertySymbols()`](./Object/Object.getOwnPropertySymbols.md) создает массив всех ключей-символов
- [`Object.getPrototypeOf()`](./Object/Object.getPrototypeOf.md) объект прототипа
- [`Object.hasOwn()`](./Object/Object.hasOwn.md) проверяет собственное ли свойство
- [`Object.is()`](./Object/Object.is.md) самый строгий способ проверки равенства значений
- [`Object.keys()`](./Object/Object.keys.md) создает массив ключей
- [`Object.values()`](./Object/Object.values.md) создает массив значений

### [Операторы](#javascript)

- [`delete`](./Object/delete.md) оператор удаления свойства
- [`in`](./Object/in.md) оператор проверки наличия свойства
- [`instanceof`](./Object/instanceof.md) оператор проверки принадлежности объекта классу

### [Методы](#javascript)

- [`.hasOwnProperty()`](./Object/.hasownproperty.md) проверяет принадлежность свойства самому объекту
- [`.prototype`](./Object/.prototype.md) свойства и методы функции-конструктора
- [`.__proto__`](./Object/.__proto__.md) ссылка на прототип объекта

### [Преобразование](#javascript)

- [`Object => Array (Object.entries)`](./Object/Object.entries.md) создает массив массивов пар ключ-значение из объекта

## [RegExp](#javascript)

- [`new RegExp()`](<./RegExp/new RegExp.md>) создает регулярное выражение
  - [`.exec()`](./RegExp/.exec.md) подробный поиск одного совпадения
  - [`.test()`](./RegExp/.test.md) соответствие выражению

## [Set](#javascript)

- [`new Set()`](<./Set/new Set.md>) создает коллекцию для хранения уникальных значений
  - [`.add()`](./Set/.add.md) добавляет значение в коллекцию
  - [`.clear()`](./Set/.clear.md) удаляет все значения
  - [`.delete()`](./Set/.delete.md) удаляет значение из коллекции
  - [`.forEach()`](./Set/.forEach.md) обход коллекции
  - [`.has()`](./Set/.has.md) проверяет наличие значения
  - [`.size`](./Set/.size.md) количество значений

## [String](#javascript)

- [`type string`](<./String/type string.md>) тип string
- [`new String()`](<./String/new String.md>) создает объект String
- [`String()`](./String/String.md) преобразует в строку

### [Методы](#javascript)

- [`.charAt()`](./String/.charAt.md) получение ключа по индексу
- [`.endsWith()`](./String/.endsWith.md) сравнивает конец строки с аргументом
- [`.includes()`](./String/.includes.md) проверяет наличие в строке аргумента
- [`.indexOf()`](./String/.indexOf.md) поиск индекса переданного аргумента
- [`.length`](./String/.length.md) длина строки
- [`.localeCompare()`](./String/.localeCompare.md) сравнивает две строки
- [`.match()`](./String/.match.md) поиск всех совпадений по regexp
- [`.repeat()`](./String/.repeat.md) повторяет строку несколько раз
- [`.replace()`](./String/.replace.md) замена части строки, можно использовать regexp
- [`.replaceAll()`](./String/.replaceAll.md) замена всех частей строки
- [`.search()`](./String/.search.md) поиск индекса по regexp
- [`.slice()`](./String/.slice.md) копирует часть строки
- [`.split()`](./String/.split.md) преобразует в массив, можно использовать regexp
- [`.startsWith()`](./String/.startsWith.md) сравнивает начало строки с аргументом
- [`.substring()`](./String/.substring.md) копирует часть строки
- [`.toLowerCase()`](./String/.toLowerCase.md) приводит к нижнему регистру
- [`.toUpperCase()`](./String/.toUpperCase.md) приводит к верхнему регистр
- [`.trim()`](./String/.trim.md) очистка от пробелов

### [Преобразование](#javascript)

- [`String => Number (Number)`](./Number/Number.md) преобразует аргумент в число
- [`String => Number (parseFloat)`](./Window/parseFloat.md) преобразует строку в число c плавающей точкой
- [`String => Number (parseInt)`](./Window/parseInt.md) преобразует строку в целое число
- [`String => Array (.split)`](./String/.split.md) преобразует в массив, можно использовать regexp

## [Window](#javascript)

- [`alert()`](./Window/alert.md) модальное окно с текстом
- [`clearInterval()`](./Window/clearInterval.md) удаление интервала
- [`clearTimeout()`](./Window/clearTimeout.md) удаление таймера
- [`confirm()`](./Window/confirm.md) модальное окно с вопросом
- [`console.dir()`](./Window/console.dir.md) выведет в консоль содержимое
- [`console.log()`](./Window/console.log.md) выведет в консоль свойства
- [`console.table()`](./Window/console.table.md) выведет в консоль таблицу
- [`getComputedStyle()`](./Window/getComputedStyle.md) объект со стилями
- [`isFinite()`](./Window/isFinite.md) проверяет преобразованное число на конечность
- [`isNaN()`](./Window/isNaN.md) проверяет преобразованное число на NaN
- [`localStorage`](./Window/localStorage.md) локальное хранилище данных
  - [`localStorage.clear()`](./Window/localStorage.clear.md) полная очистка хранилища
  - [`localStorage.getItem()`](./Window/localStorage.getItem.md) получение значения по ключу
  - [`localStorage.key()`](./Window/localStorage.key.md) получение ключа по индексу
  - [`localStorage.length`](./Window/localStorage.length.md) количество записей в хранилище
  - [`localStorage.removeItem()`](./Window/localStorage.removeItem.md) удаление записи из хранилища
  - [`localStorage.setItem()`](./Window/localStorage.setItem.md) сохранение данных в хранилище
- [`matchMedia()`](./Window/matchMedia.md) возвращает медиа-объект
- [`navigator`](./Window/navigator.md) объект описания приложения
  - [`navigator.cookieEnabled`](./Window/navigator.cookieEnabled.md) включена ли поддержка cookie
  - [`navigator.geolocation`](./Window/navigator.geolocation.md) объект геолокации
  - [`navigator.language`](./Window/navigator.language.md) предпочтительный язык интерфейса
  - [`navigator.languages`](./Window/navigator.languages.md) массив предпочтительных языков интерфейса
  - [`navigator.onLine`](./Window/navigator.onLine.md) проверяет наличие подключения к сети
  - [`navigator.userAgent`](./Window/navigator.userAgent.md) название браузера пользователя
- [`innerHeight`](./Window/innerHeight.md) высота окна браузера
- [`innerWidth`](./Window/innerWidth.md) ширина окна браузера
- [`parseFloat()`](./Window/parseFloat.md) преобразует строку в число c плавающей точкой
- [`parseInt()`](./Window/parseInt.md) преобразует строку в целое число
- [`prompt()`](./Window/prompt.md) модальное окно с вводом
- [`scroll()`](./Window/scroll.md) прокрутит окно браузера
- [`scrollTo()`](./Window/scrollTo.md) прокрутит окно браузера
- [`scrollX`](./Window/scrollX.md) прокрутка окна браузера по горизонтали
- [`scrollY`](./Window/scrollY.md) прокрутка окна браузера по вертикали
- [`setInterval()`](./Window/setInterval.md) установка интервала
- [`setTimeout()`](./Window/setTimeout.md) установка таймера
- [`typeof`](./Window/typeof.md) оператор проверки типа
