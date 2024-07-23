# Руководство

Добро пожаловать на урок! Мы создадим небольшое, но многофункциональное приложение, которое позволит вам отслеживать ваши контакты. Мы ожидаем, что это займет от 30 до 60 минут, если вы пойдете по плану.

Каждый раз, когда вы видите 👉, это означает, что вам нужно что-то сделать в приложении!

Остальное просто для вашей информации и более глубокого понимания. Давайте перейдем к делу.

## Настройка

Если вы не собираетесь следовать инструкциям в своем приложении, вы можете пропустить этот раздел.

В этом уроке мы будем использовать `Vite` в качестве нашего сборщика и сервера разработки. Вам понадобится установленный `Node.js` для инструмента командной строки `npm`.

👉 Откройте свой терминал и загрузите новое приложение `React` с помощью `Vite`:

```bash
npm create vite@latest name-of-your-project -- --template react
# cледуйте подсказкам
cd <your new project directory>
npm install
npm install react-router-dom # всегда нужно!
npm install localforage match-sorter sort-by # только для этого урока.
npm run dev
```

Вы сможете открыть URL-адрес, напечатанный в терминале:

```bash
VITE v3.0.7  ready in 175 ms
  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

Для этого урока у нас есть предварительно написанный CSS, поэтому мы можем сосредоточиться на `React Router`. Не стесняйтесь судить строго или писать свои собственные стили 😅 (Мы сделали вещи, которые обычно не делаем в CSS, чтобы разметка в этом уроке оставалась минимально возможной.)

👉 Скопируйте/вставьте CSS из файла `index.css` в `src/index.css`.

В этом руководстве будут описаны создание, чтение, поиск, обновление и удаление данных. Типичное веб-приложение, вероятно, будет взаимодействовать с API на вашем веб-сервере, но мы собираемся использовать хранилище браузера и имитировать некоторую задержку в сети, чтобы сосредоточиться на этом. Ни один из этих кодов не имеет отношения к `React Router`, поэтому просто скопируйте/вставьте все это.

👉 Скопируйте/вставьте модуль из файла `contacts.js` в `src/contacts.js`.

Все, что вам нужно в папке `src` — это `contacts.js`, `main.jsx` и `index.css`. Вы можете удалить все остальное (например, `App.js`, `assets` и т.д.).

👉 Удалите неиспользуемые файлы в `src/`, чтобы у вас остались только эти:

```bash
src
├── contacts.js
├── index.css
└── main.jsx
```

Если ваше приложение запущено, оно может на мгновение взорваться, просто продолжайте работу 😋. И вот мы готовы начать!

## Добавление роутера

Первое, что нужно сделать, это создать `Browser Router` и настроить наш первый маршрут. Это позволит включить маршрутизацию на стороне клиента для нашего веб-приложения.

👉 Создайте и отрендерите `Browser Router` в `main.jsx`.

### src/main.jsx

```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

Этот первый маршрут мы часто называем «корневым маршрутом», поскольку остальные наши маршруты будут отображаться внутри него. Он будет служить корневым макетом пользовательского интерфейса, по мере продвижения у нас будут вложенные макеты.

## Корневой роут

Давайте добавим глобальный макет для этого приложения.

👉 Создайте `src/routes` и `src/routes/root.jsx`

```bash
mkdir src/routes
touch src/routes/root.jsx
```

(Если вы не хотите быть занудой командной строки, используйте свой редактор вместо этих команд 🤓)

👉 Создайте компонент корневого макета

### src/routes/root.jsx

```jsx
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input id="q" aria-label="Search contacts" placeholder="Search" type="search" name="q" />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
```

Пока ничего особенного для `React Router`, так что не стесняйтесь копировать/вставлять все это.

👉 Установите `<Root>` в качестве элемента корневого маршрута.

### src/main.jsx

```jsx
/* существующий импорт */
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

Приложение теперь должно выглядеть примерно так. Конечно, здорово иметь дизайнера, который еще и умеет писать CSS, не так ли? (Спасибо, Джим 🙏).

![image](./images/01.webp)

## Обработка ошибок `Not Found`

Всегда полезно знать, как ваше приложение реагирует на ошибки на ранних этапах проекта, потому что при создании нового приложения мы все пишем гораздо больше ошибок, чем функций! Когда это произойдет, ваши пользователи не только получат приятные впечатления, но и помогут вам во время разработки.

Мы добавили в это приложение несколько ссылок. Давайте посмотрим, что произойдет, если мы нажмем на них?

👉 Нажмите одно из названий боковой панели.

![image](./images/02.webp)

Класс! Это экран ошибок по умолчанию в `React Router`, который вдобавок усугубляется нашими стилями `flex` в корневом элементе этого приложения 😂.

Каждый раз, когда ваше приложение выдает ошибку при рендеринге, загрузке данных или выполнении изменения данных, `React Router` улавливает ее и отображает экран ошибки. Давайте создадим собственную страницу ошибок.

👉 Создайте компонент `error-page`

```bash
touch src/error-page.jsx
```

### src/error-page.jsx

```jsx
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
```

👉 Установите `<ErrorPage>` в качестве `errorElement` корневого маршрута.

### src/main.jsx

```jsx
/* Предыдущий импорт */
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

Страница ошибки теперь должна выглядеть так:

![image](./images/03.webp)

(Ну, это не намного лучше. Может быть, кто-то забыл попросить дизайнера создать страницу с ошибкой. Может быть, все забывают попросить дизайнера создать страницу с ошибкой, а затем обвиняют дизайнера в том, что он не подумал об этом 😆)

Обратите внимание, что `useRouteError` предоставляет возникшую ошибку. Когда пользователь переходит к несуществующим маршрутам, вы получите ответ в `error` в поле `statusText` сообщение `Not Found`. Позже в этом руководстве мы увидим некоторые другие ошибки и обсудим их подробнее.

На данный момент достаточно знать, что почти все ваши ошибки теперь будут обрабатываться этой страницей, а не бесконечно крутящимися прелоадерами, неотвечающими страницами или пустыми экранами 🙌.

## Маршурт contacts

Вместо страницы `404 "Not Found"` мы хотим отображать что-то по URL-адресам, на которые мы ссылаемся. Для этого нам нужно проложить новый маршрут.

👉 Создайте модуль маршрута `contact`

```bash
touch src/routes/contact.jsx
```

👉 Добавьте туда код компонента `Сontact`

### src/routes/contact.jsx

```jsx
import { Form } from 'react-router-dom';

export default function Contact() {
  const contact = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://robohash.org/you.png?size=200x200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || `https://robohash.org/${contact.id}.png?size=200x200`} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={event => {
              if (!confirm('Please confirm you want to delete this record.')) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}
```

Теперь, когда у нас есть компонент, давайте подключим его к новому маршруту.

👉 Импортируйте компонент `Contact` и создайте новый маршрут.

### src/main.jsx

```jsx
/* существующий импорт */
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />,
  },
]);

/* существующий код */
```

Теперь, если мы кликнем на одну из ссылок или посетим `/contacts/1`, мы получим наш новый компонент!

![image](./images/04.webp)

Однако его нет внутри нашего корневого макета 😠.

## Вложенные маршруты

Мы хотим, чтобы компонент `Contact` отображался внутри макета `<Root>` следующим образом.

![image](./images/05.webp)

Мы получим это, сделав маршрут `contact` дочерним по отношению к корневому маршруту.

👉 Переместите маршрут `contacts`, чтобы он был дочерним по отношению к корневому маршруту.

### src/main.jsx

```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);
```

Теперь вы снова увидите корневой макет, но пустую страницу справа. Нам нужно указать корневому маршруту, где мы хотим, чтобы он отображал свои дочерние маршруты. Мы делаем это с помощью `<Outlet>`.

Найдите `<div id="detail">` и поместите внутри `<Outlet>`.

👉 Отрендерите `<Outlet>`

### src/routes/root.jsx

```jsx
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      {/* все остальные элементы */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
```

## Маршрутизация на стороне клиента

Возможно, вы заметили, а могли и не заметить, но когда мы нажимаем ссылки на боковой панели, браузер выполняет полный запрос документа для следующего URL-адреса вместо использования `React Router`.

Маршрутизация на стороне клиента позволяет нашему приложению обновлять URL-адрес, не запрашивая другой документ с сервера. Вместо этого приложение может немедленно отобразить новый пользовательский интерфейс. Давайте сделаем это с помощью `<Link>`.

👉 Измените боковую панель `<a href>` на `<Link to>`.

### src/routes/root.jsx

```jsx
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        {/* другие элементы */}

        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>

        {/* другие элементы */}
      </div>
    </>
  );
}
```

Вы можете открыть вкладку сети в инструментах разработчика браузера и убедиться, что он больше не запрашивает документы.

## Загрузка данных

Сегменты URL, макеты и данные чаще всего связаны вместе. Мы уже видим это в этом приложении:

```bash
URL Segment	        Component	       Data
/	                  <Root>	         cписок контактов
contacts/:id	      <Contact>	       индивидуальный контакт
```

Из-за этой естественной связи в `React Router` есть соглашения о данных, позволяющие легко вносить данные в компоненты вашего маршрута.

Для загрузки данных мы будем использовать два API: `loader` и `useLoaderData`. Сначала мы создадим и экспортируем функцию `loader` в корневой модуль, затем подключим ее к маршруту. Наконец, мы получим доступ к данным и отобразим их.

👉 Экспортируйте `loader` из `root.jsx`

### src/routes/root.jsx

```jsx
import { Outlet, Link } from 'react-router-dom';
import { getContacts } from '../contacts';

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
```

👉 Настройте `loader` на маршруте

### src/main.jsx

```jsx
/* Другой импорт */
import Root, { loader as rootLoader } from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);
```

👉 Создайте доступ и отрендерите данные

### src/routes/root.jsx

```jsx
import { Outlet, Link, useLoaderData } from 'react-router-dom';
import { getContacts } from '../contacts';

/* другой код */
export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        {/* другой код */}
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map(contact => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{' '}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
        {/* другой код */}
      </div>
    </>
  );
}
```

Вот и все! `React Router` теперь будет автоматически синхронизировать эти данные с вашим пользовательским интерфейсом. У нас пока нет данных, поэтому вы, вероятно, получите такой пустой список:

![image](./images/06.webp)

## Запись данных + HTML-формы

Через секунду мы создадим наш первый контакт, но сначала давайте поговорим о HTML.

`React Router` эмулирует навигацию по HTML-формам в качестве примитива изменения данных, согласно веб-разработкам до кембрийского взрыва JavaScript. Он дает вам UX-возможности клиентских приложений с простой веб-моделью «старой школы».

HTML-формы, хотя и незнакомы некоторым веб-разработчикам, на самом деле вызывают навигацию в браузере, точно так же, как щелчок по ссылке. Единственное отличие заключается в запросе: ссылки могут изменять только URL-адрес, а формы также могут изменять метод запроса (`GET` или `POST`) и тело запроса (данные формы `POST`).

Без маршрутизации на стороне клиента браузер автоматически сериализует данные формы и отправляет их на сервер в качестве тела запроса для `POST` и как `URLSearchParams` для `GET`. `React Router` делает то же самое, за исключением того, что вместо отправки запроса на сервер он использует маршрутизацию на стороне клиента и отправляет его в `action` маршрута.

Мы можем проверить это, нажав кнопку `New` в нашем приложении. Приложение должно взорваться, потому что сервер `Vite` не настроен для обработки запроса `POST` (он отправляет `404`, хотя, вероятно, это должен быть `405` 🤷).

![image](./images/07.webp)

Вместо того, чтобы отправлять этот `POST` на сервер `Vite` для создания нового контакта, давайте вместо этого будем использовать маршрутизацию на стороне клиента.

## Создание Contacts

Мы создадим новые контакты, экспортировав `action` в наш корневой маршрут, подключив его к конфигурации маршрута и изменив нашу `<form>` на `<Form>` из `React Router`.

👉 Создайте action и измените `<form>` на `<Form>`

### src/routes/root.jsx

```jsx
import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import { getContacts, createContact } from '../contacts';

export async function action() {
  const contact = await createContact();
  return { contact };
}

/* другой код */

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          {/* другой код */}
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>

        {/* другой код */}
      </div>
    </>
  );
}
```

👉 Импортируйте и установите action на маршруте

### src/main.jsx

```jsx
/* другие импорты */
import Root, { loader as rootLoader, action as rootAction } from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
]);
```

Вот и все! Нажмите кнопку `New`, и вы увидите новую запись в списке 🥳.

![image](./images/08.webp)

Метод `createContact` просто создает пустой контакт без имени, данных или чего-либо еще. Но запись все же создается, обещаем!

🧐 Подождите... Как обновилась боковая панель? Где мы вызвали `action`? Где код для получения данных? Где `useState`, `onSubmit` и `useEffect`?!

Именно здесь проявляется модель программирования «старой школы веба». Как мы обсуждали ранее, `<Form>` не позволяет браузеру отправлять запрос на сервер и вместо этого отправляет его в `action` вашего маршрута. В веб-семантике `POST` обычно означает, что некоторые данные изменяются. По соглашению `React Router` использует это как подсказку для автоматической повторной проверки данных на странице после завершения `action`. Это означает, что все ваши перехватчики `useLoaderData` обновляются, и пользовательский интерфейс автоматически синхронизируется с вашими данными! Довольно круто.

## URL-параметры в loader

👉 Нажмите на запись `No Name`.

Мы должны снова увидеть нашу старую статическую страницу contact, с одним отличием: URL-адрес теперь имеет реальный идентификатор записи.

![image](./images/09.webp)

Просматривая конфигурацию маршрута, маршрут выглядит следующим образом:

```jsx
[
  {
    path: 'contacts/:contactId',
    element: <Contact />,
  },
];
```

Обратите внимание на сегмент URL `:contactId`. Двоеточие (`:`) имеет особое значение, превращая его в «динамический сегмент». Динамические сегменты будут соответствовать динамическим (меняющимся) значениям в этой позиции URL-адреса, например ID контакта. Мы называем эти значения в URL-адресе «URL Params (Параметры URL)» или для краткости просто «params (параметры)».

Эти `params` передаются `loader` с ключами, соответствующими динамическому сегменту. Например, наш сегмент называется `:contactId`, поэтому значение будет передано как `params.contactId`.

Эти параметры чаще всего используются для поиска записи по id. Давайте попробуем.

👉 Добавьте `loader` на страницу `contact` и получите доступ к данным с помощью `useLoaderData`.

### src/routes/contact.jsx

```jsx
import { Form, useLoaderData } from 'react-router-dom';
import { getContact } from '../contacts';

export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export default function Contact() {
  const { contact } = useLoaderData();
  // существующий код
}
```

👉 Настройте `loader` на маршруте

### src/main.jsx

```jsx
/* существующий код */
import Contact, { loader as contactLoader } from './routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);
/* существующий код */
```

![image](./images/10.webp)

## Updating Data
