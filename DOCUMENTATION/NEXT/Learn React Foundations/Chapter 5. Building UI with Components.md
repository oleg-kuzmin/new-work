# [Глава 5. Создание UI с использованием компонентов](../index.md)

[⇽ назад](<./Chapter 4. Getting Started with React.md>) | [вперед ⇾](<./Chapter 6. Displaying Data with Props.md>)

- [Основные концепции React](#основные-концепции-react)
- [Компоненты](#компоненты)
- [Создание компонентов](#создание-компонентов)
- [Вложенные компоненты](#вложенные-компоненты)
- [Деревья компонентов](#деревья-компонентов)
- [Дополнительные ресурсы](#дополнительные-ресурсы)
- [Следующие шаги](#следующие-шаги)

## [Основные концепции React](#)

Существует три основные концепции React, с которыми вам необходимо ознакомиться, чтобы приступить к созданию приложений React. Это:

- Компоненты
- Реквизиты
- Состояние

В следующих главах мы рассмотрим эти концепции и предоставим ресурсы, с помощью которых вы сможете продолжить их изучение. После того, как вы ознакомитесь с этими концепциями, мы покажем вам, как установить Next.js и использовать новые функции React, такие как серверные и клиентские компоненты.

## [Компоненты](#)

Пользовательские интерфейсы можно разбить на более мелкие строительные блоки, называемые **компонентами**.

Компоненты позволяют создавать автономные фрагменты кода, которые можно использовать повторно. Представьте компоненты как **кирпичики LEGO**, вы можете взять эти отдельные кирпичики и объединить их вместе, чтобы сформировать более крупные структуры. Если вам нужно обновить часть пользовательского интерфейса, вы можете обновить конкретный компонент или кирпичик.

![image](<./Chapter 5.1. Building UI with Components.avif>)

Такая модульность делает ваш код более удобным в обслуживании по мере его роста, поскольку вы можете добавлять, обновлять и удалять компоненты, не затрагивая остальную часть нашего приложения.

Самое приятное в компонентах React то, что они представляют собой всего лишь JavaScript. Давайте посмотрим, как вы можете написать компонент React с точки зрения JavaScript:

## [Создание компонентов](#)

В React компоненты являются **функциями**. Внутри тега `script` создайте новую функцию с именем `header`:

```html
<!-- index.html -->
<script type="text/jsx">
  const app = document.getElementById("app")

  function header() {
  }

  const root = ReactDOM.createRoot(app);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

Компонент - это функция, которая возвращает **элементы UI**. Внутри `return` функции вы можете написать JSX:

```html
<!-- index.html -->
<script type="text/jsx">
  const app = document.getElementById("app")

  function header() {
     return (<h1>Develop. Preview. Ship.</h1>)
   }

  const root = ReactDOM.createRoot(app);
  root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

Чтобы отобразить этот компонент в DOM, передайте его в качестве первого аргумента в методе `root.render()`:

```html
<!-- index.html -->
<script type="text/jsx">
  const app = document.getElementById("app")

  function header() {
    return (<h1>Develop. Preview. Ship.</h1>)
  }

  const root = ReactDOM.createRoot(app);
  root.render(header);
</script>
```

Но подождите секунду. Если вы попытаетесь запустить приведенный выше код в своем браузере, вы получите сообщение об ошибке. Чтобы это заработало, вам нужно сделать две вещи:

Во-первых, компоненты React должны быть написаны с заглавной буквы, чтобы отличать их от обычного HTML и JavaScript:

```js
// index.html
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

const root = ReactDOM.createRoot(app);
// Используйте заглавные буквы в компоненте React
root.render(Header);
```

Во-вторых, вы используете компоненты React так же, как и обычные HTML-теги, с угловыми скобками `<>`:

```jsx
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

const root = ReactDOM.createRoot(app);
root.render(<Header />);
```

Если вы попытаетесь снова запустить код в своем браузере, то увидите внесенные изменения.

## [Вложенные компоненты](#)

Приложения обычно содержат больше контента, чем один компонент. Компоненты React можно вставлять друг в друга, как обычные HTML-элементы.

В вашем примере создайте новый компонент под названием `HomePage`:

```js
// index.html
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
  return <div></div>;
}

const root = ReactDOM.createRoot(app);
root.render(<Header />);
```

Затем вставьте компонент `<Header>` в новый компонент `<HomePage>`:

```js
// index.html
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
  return (
    <div>
      {/* Вложение компонента Header */}
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<Header />);
```

## [Деревья компонентов](#)

Вы можете продолжать вкладывать компоненты React таким образом, чтобы формировать деревья компонентов.

![image](<./Chapter 5.2. Building UI with Components.avif>)

Например, ваш компонент верхнего уровня `HomePage` может содержать компоненты `Header`, `Article` и `Footer`. И каждый из этих компонентов, в свою очередь, может иметь свои дочерние компоненты и т.д. Например, компонент `Header` может содержать компоненты `Logo`, `Title` и `Navigation`.

Этот модульный формат позволяет повторно использовать компоненты в разных местах вашего приложения.

В вашем проекте, поскольку `<HomePage>` теперь является вашим компонентом верхнего уровня, вы можете передать его методу `root.render()`:

```js
// index.html
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);
```

## [Дополнительные ресурсы](#)

- [Ваш первый компонент](https://react.dev/learn/your-first-component)
- [Импорт и экспорт компонентов](https://react.dev/learn/importing-and-exporting-components)

Вы завершили Главу 5.

Вы создали свои первые компоненты React.

## [Следующие шаги](#)

Узнайте, что такое реквизиты и как их можно использовать для отображения данных.

- [Глава 6. Отображение данных с помощью реквизитов](<./Chapter 6. Displaying Data with Props.md>)
