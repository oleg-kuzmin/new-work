# [Глава 6. Отображение данных с помощью реквизитов](../index.md)

[⇽ назад](<./Chapter 5. Building UI with Components.md>) | [вперед ⇾](<./Chapter 7. Adding Interactivity with State.md>)

- [Использование реквизитов](#использование-реквизитов)
- [Использование переменных в JSX](#использование-переменных-в-jsx)
- [Перебор списков](#перебор-списков)
- [Дополнительные ресурсы](#дополнительные-ресурсы)
- [Следующие шаги](#следующие-шаги)

До сих пор, если бы вы повторно использовали свой компонент `<Header />`, он оба раза отображал бы одно и то же содержимое.

```js
// index.html
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
      <Header />
    </div>
  );
}
```

Но что, если вы хотите передать другой текст или вам неизвестна информация заранее, потому что вы извлекаете данные из внешнего источника?

Обычные HTML-элементы имеют атрибуты, которые вы можете использовать для передачи фрагментов информации, изменяющих поведение этих элементов. Например, изменение атрибута `src` элемента `<img>` изменяет отображаемое изображение. Изменение атрибута `href` тега `<a>` изменяет назначение ссылки.

Таким же образом вы можете передавать фрагменты информации в качестве свойств компонентам React. Они называются реквизитами. Возьмем, к примеру, возможные варианты кнопки:

![image](<./Chapter 6.1. Displaying Data with Props.avif>)

Подобно функции JavaScript, вы можете создавать компоненты, которые принимают пользовательские аргументы (или реквизиты), которые изменяют поведение компонента или то, что отображается на экране. Затем вы можете передавать эти реквизиты из родительских компонентов в дочерние компоненты.

> **Примечание:** В React данные передаются вниз по дереву компонентов. Это называется односторонним потоком данных. Состояние, которое будет рассмотрено в следующей главе, может передаваться от родительского компонента к дочернему в качестве реквизита.

## [Использование реквизитов](#)

В вашем компоненте `HomePage` вы можете передать пользовательский реквизит `title` компоненту `Header` точно так же, как вы бы передали атрибуты HTML:

```jsx
// index.html
function HomePage() {
  return (
    <div>
      <Header title="React" />
    </div>
  );
}
```

И `Header`, дочерний компонент, может принимать эти реквизиты в качестве своего первого **функционального параметра**:

```jsx
// index.html
function Header(props) {
  return <h1>Develop. Preview. Ship.</h1>;
}
```

Если вы используете `console.log(props)`, вы можете увидеть, что это **объект** со свойством `title`.

```jsx
// index.html
function Header(props) {
  console.log(props); // { title: "React" }
  return <h1>Develop. Preview. Ship.</h1>;
}
```

Поскольку `props` - это объект, вы можете использовать [деструктуризацию объекта](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), чтобы явно присвоить значения параметрам `props` в вашей функции:

```jsx
// index.html
function Header({ title }) {
  console.log(title); // "React"
  return <h1>Develop. Preview. Ship.</h1>;
}
```

Затем вы можете заменить содержимое тега `<h1>` своей переменной `title`.

```jsx
// index.html
function Header({ title }) {
  console.log(title);
  return <h1>title</h1>;
}
```

Если вы откроете свой файл в браузере, то увидите, что в нем отображается фактическое слово "title". Это связано с тем, что React считает, что вы собираетесь отобразить простую текстовую строку в DOM.

Вам нужен способ сообщить React, что это переменная JavaScript.

## [Использование переменных в JSX](#)

Чтобы использовать реквизит `title`, добавьте **фигурные скобки** `{}`. Это специальный синтаксис JSX, который позволяет вам писать обычный JavaScript непосредственно внутри вашей разметки JSX.

```jsx
// index.html
function Header({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}
```

Вы можете думать о фигурных скобках как о способе ввода языка "JavaScript", когда вы находитесь в языке "JSX". Вы можете добавить любое **выражение JavaScript** (то, что вычисляется как одно значение) внутри фигурных скобок. Например:

1. **Свойство объекта** с точечной нотацией:

```jsx
// example.js
function Header(props) {
  return <h1>{props.title}</h1>;
}
```

2. **Шаблонную строку**:

```jsx
// example.js
function Header({ title }) {
  return <h1>{`Cool ${title}`}</h1>;
}
```

3. **Возвращаемое значение функции**:

```jsx
// example.js
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}

function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
  return <h1>{createTitle(title)}</h1>;
  return <h1>{createTitle(title)}</h1>;
}
```

4. Или **тернарый оператор**:

```jsx
// example.js
function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
```

Теперь вы можете передавать любую строку в свой реквизит `title`, или, если вы использовали тернарый оператор, вы могли бы вообще не передавать реквизит `title`, поскольку вы учли значение по умолчанию в вашем компоненте:

```jsx
// example.js
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

Теперь ваш компонент принимает реквизит `title`, который вы можете повторно использовать в разных частях вашего приложения. Все, что вам нужно сделать, это изменить текст в `title`:

```jsx
// index.html
function HomePage() {
  return (
    <div>
      <Header title="React" />
      <Header title="A new title" />
    </div>
  );
}
```

## [Перебор списков](#)

Обычно данные нужно отображать в виде списка. Вы можете использовать методы массивов для манипулирования данными и создания элементов UI, которые идентичны по стилю, но содержат различную информацию.

Добавьте следующий массив имен в свой компонент `HomePage`:

```jsx
// index.html
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

Затем вы можете использовать метод `array.map()` для выполнения итерации по массиву и использовать **стрелочную функцию** для вставки имени в элемент списка:

```jsx
// index.html
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

Обратите внимание, как вы использовали фигурные скобки, чтобы переплетать понятия "JavaScript" и "JSX".

Если вы запустите этот код, React выдаст нам предупреждение о пропущенном реквизите `key`. Это потому, что React нужно что-то для уникальной идентификации элементов в массиве, чтобы он знал, какие элементы нужно обновить в DOM.

Пока вы можете использовать имена, поскольку в настоящее время они уникальны, но рекомендуется использовать что-то гарантированно уникальное, например ID товара.

```jsx
// index.html
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## [Дополнительные ресурсы](#)

- [Передача реквизитов в компонент](https://react.dev/learn/passing-props-to-a-component)
- [Рендеринг списков](https://react.dev/learn/rendering-lists)
- [Условный рендеринг](https://react.dev/learn/conditional-rendering)

Вы завершили Главу 6.

Вы узнали, как использовать реквизиты для отображения данных.

## [Следующие шаги](#)

Узнайте, как можно добавить интерактивности с помощью состояния React и слушателей событий.

- [Глава 7. Добавление интерактивности с состоянием](<./Chapter 7. Adding Interactivity with State.md>)
