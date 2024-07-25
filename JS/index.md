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
- [`Тип BigInt`](<./Общее/Тип BigInt.md>)
- [`Тип Boolean`](<./Общее/Тип Boolean.md>)
- [`Тип Null`](<./Общее/Тип Null.md>)
- [`Тип Number`](<./Общее/Тип Number.md>)
- [`Тип Object`](<./Общее/Тип Object.md>)
- [`Тип String`](<./Общее/Тип String.md>)
- [`Тип Symbol`](<./Общее/Тип Symbol.md>)
- [`Тип Undefined`](<./Общее/Тип Undefined.md>)
- [`Условные конструкции`](<./Общее/Условные конструкции.md>)
- [`Функции`](./Общее/Функции.md)
- [`Экспорт и импорт CommonJS`](<./Общее/Экспорт и импорт CommonJS.md>)
- [`Экспорт и импорт ES Modules`](<./Общее/Экспорт и импорт ES Modules.md>)

## [Асинхронные действия](#javascript)

- [`async await`](<./Асинхронные действия/async await.md>) асинхронные функции
- [`new XMLHttpRequest()`](<./Асинхронные действия/new XMLHttpRequest.md>) объект legacy-запроса
  - [`request.open()`](<./Асинхронные действия/request.open.md>) создает запрос
  - [`request.response`](<./Асинхронные действия/request.response.md>) объект ответа
  - [`request.responseType`](<./Асинхронные действия/request.responseType.md>) тип ответа
  - [`request.send()`](<./Асинхронные действия/request.send.md>) отправляет запрос

### [Fetch](#javascript)

- [`fetch()`](<./Асинхронные действия/fetch.md>) запрос на сервер
  - [`responce.blob()`](<./Асинхронные действия/responce.blob.md>) преобразует json-ответ в бинарные данные
  - [`responce.headers.get()`](<./Асинхронные действия/responce.headers.get.md>) получает значение заголовка
  - [`responce.json()`](<./Асинхронные действия/responce.json.md>) преобразует json-ответ в объект js
  - [`responce.ok`](<./Асинхронные действия/responce.ok.md>) успешность ответа
  - [`responce.status`](<./Асинхронные действия/responce.status.md>) статус ответа
  - [`responce.statusText`](<./Асинхронные действия/responce.statusText.md>) сообщение статуса ответа
  - [`responce.text()`](<./Асинхронные действия/responce.text.md>) преобразует json-ответ в текст

### [Promise](#javascript)

- [`new Promise()`](<./Асинхронные действия/new Promise.md>) создает promise
  - [`promise.catch()`](<./Асинхронные действия/promise.catch.md>) обработчик отклоненного promise
  - [`promise.finally()`](<./Асинхронные действия/promise.finally.md>) обработчик завершенного promise
  - [`promise.then()`](<./Асинхронные действия/promise.then.md>) обработчик выполненного promise
- [`Promise.all()`](<./Асинхронные действия/Promise.all.md>) все promise выполнены
- [`Promise.allSettled()`](<./Асинхронные действия/Promise.allSettled.md>) все promise завершены
- [`Promise.any()`](<./Асинхронные действия/Promise.any.md>) первый выполненный promise
- [`Promise.race()`](<./Асинхронные действия/Promise.race.md>) первый завершенный promise
- [`Promise.reject()`](<./Асинхронные действия/Promise.reject.md>) создает отклоненный promise
- [`Promise.resolve()`](<./Асинхронные действия/Promise.resolve.md>) создает выполненный promise

### [JSON](#javascript)

- [`JSON`](<./Асинхронные действия/JSON.md>) формат обмена данными
  - [`JSON.parse()`](<./Асинхронные действия/JSON.parse.md>) преобразует JSON в объект
  - [`JSON.stringify()`](<./Асинхронные действия/JSON.stringify.md>) преобразует объект в JSON

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
- [`&& логическое И (4)`](<./Операторы/Логическое И.md>)
- [`|| логическое ИЛИ (3)`](<./Операторы/Логическое ИЛИ.md>)
- [`?? нулевое слияние (3)`](<./Операторы/Нулевое слияние.md>)
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
  - [`array.length`](./Array/array.length.md) размер массива
- [`Array.from()`](./Array/Array.from.md) создает массив из коллекции или итерируемого объекта
- [`Array.isArray()`](./Array/Array.isArray.md) проверка на массив
- [`Array.of()`](./Array/Array.of.md) создает массив из переданных аргументов

### [Иммутабельные методы](#javascript)

- [`array.concat()`](./Array/array.concat.md) объединяет элементы
- [`array.every()`](./Array/array.every.md) проверяет все ли элементы соответствуют условию
- [`array.filter()`](./Array/array.filter.md) оставляет те элементы, которые соответствуют условию
- [`array.find()`](./Array/array.find.md) поиск элемента, который соответствуют условию
- [`array.findindex()`](./Array/array.findindex.md) поиск индекса элемента, который соответствуют условию
- [`array.forEach()`](./Array/array.forEach.md) перебирает элементы массива
- [`array.includes()`](./Array/array.includes.md) проверяет наличие в массиве аргумента
- [`array.indexOf()`](./Array/array.indexOf.md) поиск индекса переданного аргумента
- [`array.join()`](./Array/array.join.md) преобразует массив в строку
- [`array.lastIndexOf()`](./Array/array.lastIndexOf.md) поиск последнего индекса переданного аргумента
- [`array.map()`](./Array/array.map.md) создание массива из другого
- [`array.reduce()`](./Array/array.reduce.md) сведение массива к одному значению
- [`array.slice()`](./Array/array.slice.md) создает копию массива из нужных элементов
- [`array.some()`](./Array/array.some.md) проверяет один элемент соответствуют условию

### [Мутабельные методы](#javascript)

- [`array.fill()`](./Array/array.fill.md) заполняет значениями
- [`array.flat()`](./Array/array.flat.md) разворачивает вложенные массивы
- [`array.pop()`](./Array/array.pop.md) удаляет последний элемент
- [`array.push()`](./Array/array.push.md) добавляет в конец массива
- [`array.reverse()`](./Array/array.reverse.md) инвертирует порядок элементов
- [`array.shift()`](./Array/array.shift.md) удаляет первый элемент
- [`array.sort()`](./Array/array.sort.md) сортирует элементы массива
- [`array.splice()`](./Array/array.splice.md) заменяет часть элементов
- [`array.unshift()`](./Array/array.unshift.md) добавляет в начало массива

### [Array => String](#javascript)

- [`array.join()`](./Array/array.join.md) преобразует массив в строку

### [Array => Object](#javascript)

- [`Object.fromEntries()`](./Object/Object.fromEntries.md) создает объект из массива

## [Date](#javascript)

- [`Date.now()`](./Date/Date.now.md) миллисекунды с 01 января 1970
- [`Date.parse()`](./Date/Date.parse.md) преобразует строку в миллисекунды с 01 января 1970
- [`new Date()`](<./Date/new Date.md>) создает объект Date
  - [`date.getDate()`](./Date/date.getDate.md) возвращает день месяца (1-31)
  - [`date.getDay()`](./Date/date.getDay.md) возвращает день недели (0-6)
  - [`date.getFullYear()`](./Date/date.getFullYear.md) возвращает год
  - [`date.getHours()`](./Date/date.getHours.md) возвращает час (0-23)
  - [`date.getMilliseconds()`](./Date/date.getMilliseconds.md) возвращает миллисекунды (0-999)
  - [`date.getMinutes()`](./Date/date.getMinutes.md) возвращает минуты (0-59)
  - [`date.getMonth()`](./Date/date.getMonth.md) возвращает месяц (0-11)
  - [`date.getSeconds()`](./Date/date.getSeconds.md) возвращает секунды (0-59)
  - [`date.getTime()`](./Date/date.getTime.md) возвращает миллисекунды с 01 января 1970
  - [`date.getTimezoneOffset()`](./Date/date.getTimezoneOffset.md) возвращает разницу в минутах с UTC
  - [`date.setDate()`](./Date/date.setDate.md) устанавливает день месяца (1-31)
  - [`date.setFullYear()`](./Date/date.setFullYear.md) устанавливает год
  - [`date.setHours()`](./Date/date.setHours.md) устанавливает час (0-23)
  - [`date.setMilliseconds()`](./Date/date.setMilliseconds.md) устанавливает миллисекунды (0-999)
  - [`date.setMinutes()`](./Date/date.setMinutes.md) устанавливает минуты (0-59)
  - [`date.setMonth()`](./Date/date.setMonth.md) устанавливает месяц (0-11)TAGS UI
  - [`date.setSeconds()`](./Date/date.setSeconds.md) устанавливает секунды (0-59)
  - [`date.setTime()`](./Date/date.setTime.md) устанавливает миллисекунды с 01 января 1970
  - [`date.toISOString()`](./Date/date.toISOString.md) преобразует объект Date в строку формата iso
  - [`date.toLocaleDateString()`](./Date/date.toLocaleDateString.md) преобразует объект Date в строку различных форматов
  - [`date.toLocaleTimeString()`](./Date/date.toLocaleTimeString.md) преобразует объект Date в строку в формате часы:минуты:секунды
  - [`date.toUTCString()`](./Date/date.toUTCString.md) преобразует объект Date в строку в формате UTC

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

- [`element.checked`](./Element/element.checked.md) атрибут checked
- [`element.className`](./Element/element.className.md) атрибут class
- [`element.contentEditable`](./Element/element.contentEditable.md) атрибут contentEditable
- [`element.dataset`](./Element/element.dataset.md) объект с data-атрибутами
- [`element.disabled`](./Element/element.disabled.md) атрибут disabled
- [`element.getAttribute()`](./Element/element.getAttribute.md) возвращает значение атрибута
- [`element.hasAttribute()`](./Element/element.hasAttribute.md) проверяет наличие атрибута
- [`element.hidden`](./Element/element.hidden.md) атрибут hidden
- [`element.href`](./Element/element.href.md) атрибут href
- [`element.htmlFor`](./Element/element.htmlFor.md) атрибут for
- [`element.id`](./Element/element.id.md) атрибут id
- [`element.removeAttribute()`](./Element/element.removeAttribute.md) удаляет атрибут
- [`element.setAttribute()`](./Element/element.setAttribute.md) устанавливает атрибут
- [`element.style`](./Element/element.style.md) объект с атрибутом style
  - [`element.style.setProperty()`](./Element/element.style.setProperty.md) устанавливает стиль
- [`element.type`](./Element/element.type.md) атрибут type
- [`element.value`](./Element/element.value.md) атрибут value

### [Классы](#javascript)

- [`element.classList`](./Element/element.classList.md) псевдомассив классов
  - [`element.classList.add()`](./Element/element.classList.add.md) добавляет класс
  - [`element.classList.contains()`](./Element/element.classList.contains.md) проверяет наличие класса
  - [`element.classList.remove()`](./Element/element.classList.remove.md) удаляет класс
  - [`element.classList.replace()`](./Element/element.classList.replace.md) заменяет класс
  - [`element.classList.toggle()`](./Element/element.classList.toggle.md) переключает класс

### [Метрики](#javascript)

- [`element.clientHeight`](./Element/element.clientHeight.md) высота (content + padding)
- [`element.clientLeft`](./Element/element.clientLeft.md) отступ сверху (border)
- [`element.clientTop`](./Element/element.clientTop.md) отступ сверху (border)
- [`element.clientWidth`](./Element/element.clientWidth.md) ширина (content + padding)
- [`element.getBoundingClientRect()`](./Element/element.getBoundingClientRect.md) объект с координатами
- [`element.offsetHeight`](./Element/element.offsetHeight.md) высота (content + padding + scrollBar + border)
- [`element.offsetLeft`](./Element/element.offsetLeft.md) отступ слева от offsetParent
- [`element.offsetParent`](./Element/element.offsetParent.md) ближайший родитель-ориентир для рендеринга
- [`element.offsetTop`](./Element/element.offsetTop.md) отступ сверху от offsetParent
- [`element.offsetWidth`](./Element/element.offsetWidth.md) ширина (content + padding + scrollBar + border)
- [`element.scrollHeight`](./Element/element.scrollHeight.md) высота (content + padding + scrollBar)
- [`element.scrollLeft`](./Element/element.scrollLeft.md) ширина прокрученной области
- [`element.scrollTop`](./Element/element.scrollTop.md) высота прокрученной области
- [`element.scrollWidth`](./Element/element.scrollWidth.md) ширина (content + padding + scrollBar)

### [Форма](#javascript)

- [`element.focus()`](./Element/element.focus.md) фокус на элементе
- [`element.reset()`](./Element/element.reset.md) сбрасывает поля формы
- [`element.submit()`](./Element/element.submit.md) отправка формы
- [`element.validationMessage`](./Element/element.validationMessage.md) текст сообщения об ошибке
- [`element.validity`](./Element/element.validity.md) объект проверки ошибок

### [DOM Добавление, перемещение, удаление](#javascript)

- [`element.after()`](./Element/element.after.md) добавляет, перемещает ПОСЛЕ узла
- [`element.append()`](./Element/element.append.md) добавляет, перемещает в КОНЕЦ узла
- [`element.before()`](./Element/element.before.md) добавляет, перемещает ДО узла
- [`element.cloneNode()`](./Element/element.cloneNode.md) клонирует элемент
- [`element.prepend()`](./Element/element.prepend.md) добавляет, перемещает в НАЧАЛО узла
- [`element.remove()`](./Element/element.remove.md) удаляет элемент
- [`element.replaceWith()`](./Element/element.replaceWith.md) заменяет элемент

### [DOM Поиск](#javascript)

- [`element.childNodes`](./Element/element.childNodes.md) NodeList дочерних узлов (динамическая)
- [`element.children`](./Element/element.children.md) HTMLCollection дочерних элементов (динамическая)
- [`element.closest()`](./Element/element.closest.md) находит ближайщего родителя по селектору
- [`element.firstElementChild`](./Element/element.firstElementChild.md) первый дочерний элемент
- [`element.getElementsByClassName()`](./Element/element.getElementsByClassName.md) HTMLCollection по классу (динамическая)
- [`element.getElementsByTagName()`](./Element/element.getElementsByTagName.md) HTMLCollection по тегу (динамическая)
- [`element.lastElementChild`](./Element/element.lastElementChild.md) последний дочерний элемент
- [`element.matches()`](./Element/element.matches.md) проверяет элемент на соответствие селектору
- [`element.nextElementSibling`](./Element/element.nextElementSibling.md) следующий соседний элемент
- [`element.parentElement`](./Element/element.parentElement.md) ближайший родитель
- [`element.previousElementSibling`](./Element/element.previousElementSibling.md) предыдущий соседний элемент
- [`element.querySelector()`](./Element/element.querySelector.md) поиск элемента по селектору
- [`element.querySelectorAll()`](./Element/element.querySelectorAll.md) NodeList по селектору (статическая)

### [DOM События](#javascript)

- [`element.addEventListener()`](./Element/element.addEventListener.md) добавление слушателя
- [`element.dispatchEvent()`](./Element/element.dispatchEvent.md) запускает кастомное событие
- [`element.removeEventListener()`](./Element/element.removeEventListener.md) удаление слушателя

### [DOM Содержимое](#javascript)

- [`element.content`](./Element/element.content.md) содержимое template
- [`element.innerHTML`](./Element/element.innerHTML.md) содержимое с разметкой
- [`element.innerText`](./Element/element.innerText.md) текстовое содержимое (видимое)
- [`element.insertAdjacentHTML()`](./Element/element.insertAdjacentHTML.md) вставляет разметку
- [`element.insertAdjacentText()`](./Element/element.insertAdjacentText.md) вставляет текст
- [`element.outerHTML`](./Element/element.outerHTML.md) содержимое с разметкой + сам элемент
- [`element.textContent`](./Element/element.textContent.md) текстовое содержимое (видимое и скрытое)

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
  - [`evt.bubbles`](./Event/evt.bubbles.md) всплывающее событие
  - [`evt.cancelable`](./Event/evt.cancelable.md) отменяемое событие
  - [`evt.clientX`](./Event/evt.clientX.md) координаты X от окна просмотра
  - [`evt.clientY`](./Event/evt.clientY.md) координаты Y от окна просмотра
  - [`evt.composedPath()`](./Event/evt.composedPath.md) элементы где сработало событие
  - [`evt.currentTarget`](./Event/evt.currentTarget.md) элемент на котором висит обработчик
  - [`evt.defaultPrevented`](./Event/evt.defaultPrevented.md) отменено ли событие по умолчанию
  - [`evt.eventPhase`](./Event/evt.eventPhase.md) фаза события
  - [`evt.isTrusted`](./Event/evt.isTrusted.md) пользовательское ли это событие
  - [`evt.key`](./Event/evt.key.md) название нажатой клавиши
  - [`evt.pageX`](./Event/evt.pageX.md) координаты X от угла страницы
  - [`evt.pageY`](./Event/evt.pageY.md) координаты Y от угла страницы
  - [`evt.preventDefault()`](./Event/evt.preventDefault.md) отменяет поведение по умолчанию
  - [`evt.screenX`](./Event/evt.screenX.md) координаты X от угла монитора
  - [`evt.screenY`](./Event/evt.screenY.md) координаты Y от угла монитора
  - [`evt.stopImmediatePropagation()`](./Event/evt.stopImmediatePropagation.md) остановка всплытия и обработчиков
  - [`evt.stopPropagation()`](./Event/evt.stopPropagation.md) остановка всплытия события
  - [`evt.target`](./Event/evt.target.md) элемент где произошло событие
  - [`evt.timeStamp`](./Event/evt.timeStamp.md) время возникновения события
  - [`evt.type`](./Event/evt.type.md) тип события
  - [`evt.view`](./Event/evt.view.md) объект window где произошло событие

## [Function](#javascript)

- [`arguments`](./Function/arguments.md) псевдомассив всех переданных аргументов
- [`function.apply()`](./Function/function.apply.md) вызывает метод объекта с конкретными контекстом и значением
- [`function.bind()`](./Function/function.bind.md) привязывает конкретный контекст к методу объекта
- [`function.call()`](./Function/function.call.md) вызывает метод объекта с конкретными контекстом и значением

## [Map](#javascript)

- [`new Map()`](<./Map/new Map.md>) создает коллекцию для хранения пар ключ-значение
  - [`map.clear()`](./Map/map.clear.md) удаляет все значения
  - [`map.delete()`](./Map/map.delete.md) удаляет значение из коллекции
  - [`map.entries()`](./Map/map.entries.md) возвращает итератор пар ключ-значение
  - [`map.forEach()`](./Map/map.forEach.md) обход коллекции
  - [`map.get()`](./Map/map.get.md) получает значение
  - [`map.has()`](./Map/map.has.md) проверяет наличие значения
  - [`map.keys()`](./Map/map.keys.md) возвращает итератор ключей
  - [`map.set()`](./Map/map.set.md) сохраняет значение в коллекцию
  - [`map.size`](./Map/map.size.md) количество значений
  - [`map.values()`](./Map/map.values.md) возвращает итератор значений

## [Number](#javascript)

- [`Number()`](./Number/Number.md) преобразует аргумент в число
  - [`number.toFixed()`](./Number/number.toFixed.md) преобразует в строку и округляет
  - [`number.toLocaleString()`](./Number/number.toLocaleString.md) преобразует в строку c учетом языка
  - [`number.toString()`](./Number/number.toString.md) преобразует в строку
- [`new Number()`](<./Number/new Number.md>) создает объект Number
- [`Number.isFinite()`](./Number/Number.isFinite.md) проверяет число на конечность
- [`Number.isInteger()`](./Number/Number.isInteger.md) проверяет число на целое или дробное
- [`Number.isNaN()`](./Number/Number.isNaN.md) проверяет число на NaN

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

### [Number => String](#javascript)

- [`number.toFixed()`](./Number/number.toFixed.md) преобразует в строку и округляет
- [`number.toLocaleString()`](./Number/number.toLocaleString.md) преобразует в строку c учетом языка
- [`number.toString()`](./Number/number.toString.md) преобразует в строку
- [`String()`](./String/String.md) преобразует в строку

## [Object](#javascript)

- [`delete`](./Object/delete.md) оператор удаления свойства
- [`in`](./Object/in.md) оператор проверки наличия ключа
- [`new Object()`](<./Object/new Object.md>) создает новый объект
  - [`object.hasOwnProperty()`](./Object/object.hasownproperty.md) принадлежность свойства самому объекту
  - [`object.prototype`](./Object/object.prototype.md) свойство прототип функции-конструктора
- [`Object.assign()`](./Object/Object.assign.md) поверхностное копирование, объединение
- [`Object.create()`](./Object/Object.create.md) создает объект с прототипом
- [`Object.entries()`](./Object/Object.entries.md) создает массив из объекта
- [`Object.fromEntries()`](./Object/Object.fromEntries.md) создает объект из массива
- [`Object.getOwnPropertyNames()`](./Object/Object.getOwnPropertyNames.md) создает массив со всеми свойствами
- [`Object.getOwnPropertySymbols()`](./Object/Object.getOwnPropertySymbols.md) создает массив ключей-символов
- [`Object.getPrototypeOf()`](./Object/Object.getPrototypeOf.md) объект прототипа
- [`Object.hasOwn()`](./Object/Object.hasOwn.md) проверяет собственное ли свойство
- [`Object.is()`](./Object/Object.is.md) самый строгий способ проверки равенства значений
- [`Object.keys()`](./Object/Object.keys.md) создает массив из перечисляемых свойств
- [`Object.values()`](./Object/Object.values.md) создает массив из перечисляемых свойств

### [Object => Array](#javascript)

- [`Object.entries()`](./Object/Object.entries.md) создает массив из объекта

## [RegExp](#javascript)

- [`new RegExp()`](<./RegExp/new RegExp.md>) создает регулярное выражение
  - [`regexp.exec()`](./RegExp/regexp.exec.md) подробный поиск одного совпадения
  - [`regexp.test()`](./RegExp/regexp.test.md) соответствие

## [Set](#javascript)

- [`new Set()`](<./Set/new Set.md>) создает коллекцию для хранения уникальных значений
  - [`set.add()`](./Set/set.add.md) добавляет значение в коллекцию
  - [`set.clear()`](./Set/set.clear.md) удаляет все значения
  - [`set.delete()`](./Set/set.delete.md) удаляет значение из коллекции
  - [`set.forEach()`](./Set/set.forEach.md) обход коллекции
  - [`set.has()`](./Set/set.has.md) проверяет наличие значения
  - [`set.size`](./Set/set.size.md) количество значений

## [String](#javascript)

- [`new String()`](<./String/new String.md>) создает объект String
- [`String()`](./String/String.md) преобразует в строку
  - [`string.charAt()`](./String/string.charAt.md) получение ключа по индексу
  - [`string.endsWith()`](./String/string.endsWith.md) сравнивает конец строки с аргументом
  - [`string.includes()`](./String/string.includes.md) проверяет наличие в строке аргумента
  - [`string.indexOf()`](./String/string.indexOf.md) поиск индекса переданного аргумента
  - [`string.length`](./String/string.length.md) длина строки
  - [`string.localeCompare()`](./String/string.localeCompare.md) сравнивает две строки
  - [`string.match()`](./String/string.match.md) поиск всех совпадений по regexp
  - [`string.repeat()`](./String/string.repeat.md) повторяет строку несколько раз
  - [`string.replace()`](./String/string.replace.md) замена части строки, можно использовать regexp
  - [`string.replaceAll()`](./String/string.replaceAll.md) замена всех частей строки
  - [`string.search()`](./String/string.search.md) поиск индекса по regexp
  - [`string.slice()`](./String/string.slice.md) копирует часть строки
  - [`string.split()`](./String/string.split.md) преобразует в массив, можно использовать regexp
  - [`string.startsWith()`](./String/string.startsWith.md) сравнивает начало строки с аргументом
  - [`string.substring()`](./String/string.substring.md) копирует часть строки
  - [`string.toLowerCase()`](./String/string.toLowerCase.md) приводит к нижнему регистру
  - [`string.toUpperCase()`](./String/string.toUpperCase.md) приводит к верхнему регистр
  - [`string.trim()`](./String/string.trim.md) очистка от пробелов

### [String => Number](#javascript)

- [`Number()`](./Number/Number.md) преобразует аргумент в число
- [`window.parseFloat()`](./Window/window.parseFloat.md) преобразует строку в число c плавающей точкой
- [`window.parseInt()`](./Window/window.parseInt.md) преобразует строку в целое число

### [String => Array](#javascript)

- [`string.split()`](./String/string.split.md) преобразует в массив, можно использовать regexp

## [Window](#javascript)

- [`window.alert()`](./Window/window.alert.md) модальное окно с текстом
- [`window.clearInterval()`](./Window/window.clearInterval.md) удаление интервала
- [`window.clearTimeout()`](./Window/window.clearTimeout.md) удаление таймера
- [`window.confirm()`](./Window/window.confirm.md) модальное окно с вопросом
- [`window.console.dir()`](./Window/window.console.dir.md) выведет в консоль содержимое
- [`window.console.log()`](./Window/window.console.log.md) выведет в консоль свойства
- [`window.console.table()`](./Window/window.console.table.md) выведет в консоль таблицу
- [`window.getComputedStyle()`](./Window/window.getComputedStyle.md) объект со стилями
- [`window.isFinite()`](./Window/window.isFinite.md) проверяет преобразованное число на конечность
- [`window.isNaN()`](./Window/window.isNaN.md) проверяет преобразованное число на NaN
- [`window.localStorage`](./Window/window.localStorage.md) локальное хранилище данных
  - [`window.localStorage.clear()`](./Window/window.localStorage.clear.md) полная очистка хранилища
  - [`window.localStorage.getItem()`](./Window/window.localStorage.getItem.md) получение значения по ключу
  - [`window.localStorage.key()`](./Window/window.localStorage.key.md) получение ключа по индексу
  - [`window.localStorage.length`](./Window/window.localStorage.length.md) количество записей в хранилище
  - [`window.localStorage.removeItem()`](./Window/window.localStorage.removeItem.md) удаление записи из хранилища
  - [`window.localStorage.setItem()`](./Window/window.localStorage.setItem.md) сохранение данных в хранилище
- [`window.matchMedia()`](./Window/window.matchMedia.md) возвращает медиа-объект
- [`window.navigator`](./Window/window.navigator.md) объект описания приложения
  - [`window.navigator.cookieEnabled`](./Window/window.navigator.cookieEnabled.md) включена ли поддержка cookie
  - [`window.navigator.geolocation`](./Window/window.navigator.geolocation.md) объект геолокации
  - [`window.navigator.language`](./Window/window.navigator.language.md) предпочтительный язык интерфейса
  - [`window.navigator.languages`](./Window/window.navigator.languages.md) массив предпочтительных языков интерфейса
  - [`window.navigator.onLine`](./Window/window.navigator.onLine.md) проверяет наличие подключения к сети
  - [`window.navigator.userAgent`](./Window/window.navigator.userAgent.md) название браузера пользователя
- [`window.innerHeight`](./Window/window.innerHeight.md) высота окна браузера
- [`window.innerWidth`](./Window/window.innerWidth.md) ширина окна браузера
- [`window.parseFloat()`](./Window/window.parseFloat.md) преобразует строку в число c плавающей точкой
- [`window.parseInt()`](./Window/window.parseInt.md) преобразует строку в целое число
- [`window.prompt()`](./Window/window.prompt.md) модальное окно с вводом
- [`window.scroll()`](./Window/window.scroll.md) прокрутит окно браузера
- [`window.scrollTo()`](./Window/window.scrollTo.md) прокрутит окно браузера
- [`window.scrollX`](./Window/window.scrollX.md) прокрутка окна браузера по горизонтали
- [`window.scrollY`](./Window/window.scrollY.md) прокрутка окна браузера по вертикали
- [`window.setInterval()`](./Window/window.setInterval.md) установка интервала
- [`window.setTimeout()`](./Window/window.setTimeout.md) установка таймера
- [`window.typeof`](./Window/window.typeof.md) оператор проверки типа
