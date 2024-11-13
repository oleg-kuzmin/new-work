# [Глава 4. Начало работы с React](../index.md)

[⇽ назад](<./Chapter 3. Updating UI with Javascript.md>) | [вперед ⇾](<./Chapter 5. Building UI with Components.md>)

- [Что такое JSX?](#что-такое-jsx)
- [Добавление Babel в ваш проект](#добавление-babel-в-ваш-проект)
- [Дополнительные ресурсы](#дополнительные-ресурсы)
- [Необходимый JavaScript для React](#необходимый-javascript-для-react)
- [Следующие шаги](#следующие-шаги)

Чтобы использовать React в вашем недавно созданном проекте, загрузите два скрипта React с внешнего веб-сайта под названием [unpkg.com](https://unpkg.com/):

- **react** - это основная библиотека React.
- **react-dom** предоставляет специфичные для DOM методы, которые позволяют вам использовать React с DOM.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script type="text/javascript">
      const app = document.getElementById('app');
      const header = document.createElement('h1');
      const text = 'Develop. Preview. Ship.';
      const headerContent = document.createTextNode(text);
      header.appendChild(headerContent);
      app.appendChild(header);
    </script>
  </body>
</html>
```

Вместо того чтобы напрямую манипулировать DOM с помощью обычного JavaScript, удалите ранее добавленные методы DOM и добавьте метод [`ReactDOM.createRoot()`](https://react.dev/reference/react-dom/client/createRoot), который нацелен на определенный элемент DOM, и создайте root для отображения ваших компонентов React. Затем добавьте метод [`root.render()`](https://react.dev/reference/react-dom/client/hydrateRoot#root-render) для рендеринга вашего кода React в DOM.

Это позволит React отобразить наш заголовок `<h1>` внутри нашего элемента `#app`.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
      const app = document.getElementById('app');
      const root = ReactDOM.createRoot(app);
      root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
  </body>
</html>
```

Если вы попытаетесь запустить этот код в браузере, то получите синтаксическую ошибку:

```bash
Uncaught SyntaxError: expected expression, got '<'
# Неперехваченная синтаксическая ошибка: ожидаемое выражение, получено '<'
```

Это потому, что `<h1>...</h1>` недопустимо в Javascript. Этот фрагмент кода написан в формате JSX.

## [Что такое JSX?](#)

JSX - это синтаксическое расширение для JavaScript, которое позволяет вам описывать свой UI в привычном HTML-подобном синтаксисе. Самое приятное в JSX то, что, помимо соблюдения [трех правил JSX](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx), вам не нужно изучать какие-либо новые символы или синтаксис за пределами HTML и JavaScript.

Но браузеры не понимают JSX "из коробки", поэтому вам понадобится компилятор JavaScript, такой как [Babel](https://babeljs.io/), чтобы преобразовать ваш JSX-код в обычный JavaScript.

## [Добавление Babel в ваш проект](#)

Чтобы добавить Babel в проект, скопируйте и вставьте следующий `script` в ваш `index.html` файл:

```html
<!-- index.html -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Кроме того, вам нужно будет сообщить Babel, какой код преобразовать, изменив `type` в `script` на `type=text/jsx`.

```html
<!-- index.html -->
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Babel Script -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx">
      const domNode = document.getElementById('app');
      const root = ReactDOM.createRoot(domNode);
      root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
  </body>
</html>
```

Чтобы убедиться, что он работает правильно, откройте свой HTML-файл в браузере.

Сравните **декларативный** код React, который вы только что написали:

```html
<!-- index.html -->
<script type="text/jsx">
  const domNode = document.getElementById("app")
  const root = ReactDOM.createRoot(domNode);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

с **императивным** кодом JavaScript, который вы написали в предыдущем разделе:

```html
<!-- index.html -->
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const text = 'Develop. Preview. Ship.';
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```

Вы можете начать понимать, как использование React позволяет сократить количество повторяющегося кода.

И это именно то, что делает React, это библиотека, содержащая повторно используемые фрагменты кода, которые выполняют задачи от вашего имени - в данном случае обновление UI.

## [Дополнительные ресурсы](#)

Вам не нужно точно знать, как React обновляет UI, чтобы начать его использовать, но если вы хотите узнать больше, вот несколько дополнительных ресурсов:

- [UI деревья](https://react.dev/learn/preserving-and-resetting-state#the-ui-tree)
- [Написание разметки с использованием JSX](https://react.dev/learn/writing-markup-with-jsx)
- [react-dom/server в документации React](https://react.dev/reference/react-dom/server)

## [Необходимый JavaScript для React](#)

Хотя вы можете изучать JavaScript и React одновременно, знакомство с JavaScript может упростить процесс изучения React.

В следующих разделах вы познакомитесь с некоторыми основными концепциями React с точки зрения JavaScript. Вот краткое описание тем JavaScript, которые будут упомянуты:

- [Функции](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions) и [Стрелочные функции](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Объекты](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Массивы и методы массивов](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Деструктуризация](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Шаблонные строки](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals)
- [Тернарные операторы](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [Модули ES и синтаксис импорт/экспорт](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules)

Хотя этот курс не посвящен JavaScript, полезно быть в курсе последних версий JavaScript. Но если вы еще не чувствуете себя специалистом в JavaScript, не позволяйте этому помешать вам начать создавать с помощью React!

Вы завершили главу 4.

Хорошо, теперь вы используете React. Но вам предстоит узнать гораздо больше.

## [Следующие шаги](#)

Изучите, что вам нужно знать о JavaScript, чтобы начать создавать приложения React.

- [Глава 5. Создание UI с использованием компонентов](<./Chapter 5. Building UI with Components.md>)
