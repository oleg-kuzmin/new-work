# [Инструменты TypeScript за 5 минут](../index.md)

Давайте начнем с создания простого веб-приложения с использованием TypeScript.

- [Установка TypeScript](#установка-typescript)
- [Создание вашего первого файла TypeScript](#создание-вашего-первого-файла-typescript)
- [Компиляция вашего кода](#компиляция-вашего-кода)
- [Аннотация типа](#аннотация-типа)
- [Интерфейсы](#интерфейсы)
- [Классы](#классы)
- [Запуск веб-приложения TypeScript](#запуск-веб-приложения-typescript)

## [Установка TypeScript](#инструменты-typescript-за-5-минут)

Есть два основных способа добавить TypeScript в ваш проект:

- Через npm (менеджер пакетов Node.js)
- Установив плагины TypeScript для Visual Studio.

Visual Studio 2017 и Visual Studio 2015 с обновлением 3 по умолчанию включают поддержку языка TypeScript, но не включают компилятор TypeScript `tsc`. Если вы не установили TypeScript вместе с Visual Studio, вы все равно можете его [загрузить](https://www.typescriptlang.org/download).

Для пользователей npm:

```bash
npm install -g typescript
```

## [Создание вашего первого файла TypeScript](#инструменты-typescript-за-5-минут)

В вашем редакторе введите следующий код JavaScript в файле `greeter.ts`:

##### greeter.ts

```ts
function greeter(person) {
  return 'Hello, ' + person;
}

let user = 'Jane User';

document.body.textContent = greeter(user);
```

## [Компиляция вашего кода](#инструменты-typescript-за-5-минут)

Мы использовали расширение `.ts`, но этот код представляет собой всего лишь JavaScript. Вы могли бы скопировать/вставить это прямо из существующего приложения JavaScript.

В командной строке запустите компилятор TypeScript:

```bash
tsc greeter.ts
```

Результатом будет файл `greeter.js`, содержащий тот же код JavaScript, который вы ввели. Мы уже работаем с TypeScript в нашем приложении JavaScript!

Теперь мы можем начать пользоваться преимуществами некоторых новых инструментов, предлагаемых TypeScript. Добавьте аннотацию типа `: string` к параметру функции `person`, как показано здесь:

##### greeter.ts

```ts
function greeter(person: string) {
  return 'Hello, ' + person;
}

let user = 'Jane User';

document.body.textContent = greeter(user);
```

## [Аннотация типа](#инструменты-typescript-за-5-минут)

Аннотации типов в TypeScript — это легкие способы записи предполагаемого контракта функции или переменной. В этом случае мы хотим, чтобы функция `greeter` вызывалась с одним строковым параметром. Мы можем попробовать изменить вызов `greeter`, чтобы вместо этого передавать массив:

##### greeter.ts

```ts
function greeter(person: string) {
  return 'Hello, ' + person;
}

let user = [0, 1, 2];

document.body.textContent = greeter(user);
// Аргумент типа "number[]" нельзя назначить параметру типа "string"
```

При повторной компиляции вы увидите ошибку:

```bash
error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

Аналогично попробуйте удалить все аргументы вызова `greeter`. TypeScript сообщит вам, что вы вызвали эту функцию с неожиданным количеством аргументов. В обоих случаях TypeScript может предложить статический анализ на основе как структуры вашего кода, так и предоставленных вами аннотаций типов.

Обратите внимание: несмотря на наличие ошибок, файл `greeter.js` все равно создается. Вы можете использовать TypeScript, даже если в вашем коде есть ошибки. Но в этом случае TypeScript предупреждает, что ваш код, скорее всего, не будет работать должным образом.

## [Интерфейсы](#инструменты-typescript-за-5-минут)

Давайте разовьем наш пример дальше. Здесь мы используем интерфейс, который описывает объекты, имеющие поля `firstName` и `lastName`. В TypeScript два типа совместимы, если их внутренняя структура совместима. Это позволяет нам реализовать интерфейс, просто имея форму, требуемую интерфейсом, без явного предложения `implements`.

##### greeter.ts

```ts
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = { firstName: 'Jane', lastName: 'User' };

document.body.textContent = greeter(user);
```

## [Классы](#инструменты-typescript-за-5-минут)

Наконец, давайте в последний раз расширим пример классами. TypeScript поддерживает новые функции JavaScript, такие как поддержка объектно-ориентированного программирования на основе классов.

Здесь мы собираемся создать класс `Student` с конструктором и несколькими общедоступными полями. Обратите внимание, что классы и интерфейсы хорошо взаимодействуют друг с другом, позволяя программисту выбрать правильный уровень абстракции.

Также следует отметить, что использование `public` параметров в конструкторе — это сокращение, которое позволяет нам автоматически создавать свойства с таким именем.

```ts
class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = new Student('Jane', 'M.', 'User');

document.body.textContent = greeter(user);
```

Перезапустите `tsc greeter.ts`, и вы увидите, что сгенерированный код JavaScript такой же, как и предыдущий код. Классы в TypeScript — это всего лишь сокращение того же объектно-ориентированного подхода на основе прототипов, который часто используется в JavaScript.

## [Запуск веб-приложения TypeScript](#инструменты-typescript-за-5-минут)

Теперь введите следующее в greeter.html:

##### greeter.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TypeScript Greeter</title>
  </head>
  <body>
    <script src="greeter.js"></script>
  </body>
</html>
```

Откройте `greeter.html` в браузере, чтобы запустить свое первое простое веб-приложение TypeScript!

Необязательно: Откройте `greeter.ts` в Visual Studio или скопируйте код в площадку TypeScript. Вы можете навести курсор на идентификаторы, чтобы увидеть их типы. Обратите внимание, что в некоторых случаях эти типы выводятся автоматически. Повторно введите последнюю строку и просмотрите списки завершения и справку по параметрам на основе типов элементов DOM. Наведите курсор на ссылку на функцию `greeter` и нажмите F12, чтобы перейти к ее определению. Обратите внимание также, что вы можете щелкнуть правой кнопкой мыши по символу и использовать рефакторинг, чтобы переименовать его.

Предоставленная информация о типе работает вместе с инструментами для работы с JavaScript в масштабе приложения. Дополнительные примеры того, что возможно в TypeScript, см. в разделе «Примеры» на веб-сайте.
