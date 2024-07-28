# [`fetch()`](../../index.md)

С помощью функции `fetch()` можно отправлять сетевые запросы на сервер — как получать, так и отправлять данные. Метод возвращает промис с объектом ответа, где находится дополнительная информация (статус ответа, заголовки) и ответ на запрос.

Браузер предоставляет глобальный API для работы с запросами и ответами HTTP. Раньше для подобной работы использовался `XMLHttpRequest`, однако `fetch()` более гибкая и мощная альтернатива, он понятнее и проще в использовании из-за того, что использует `Promise`.

Метод `fetch()` асинхронный. Когда вы его вызываете, он создаёт промис, а когда получает ответ — переводит промис в нужный статус. Ответ от сервера при этом записывается в промис, так что его можно использовать через `then()` и `catch()`.

- `POST` - создать новый элемент
- `GET` - получить элемент
- `PUT` - обновить полностью элемент
- `PATCH` - обновить частично элемент
- `DELETE` - удалить элемент

## Синтаксис

```js
fetch('url', options);
```

### `url`

Строка - Адрес, по которому нужно сделать запрос. По умолчанию вызов `fetch()` делает `GET-запрос` по указанному адресу.

### `options` / опционально

Объект - объект конфигурации, в котором можно настроить метод запроса, тело запроса, заголовки и многое другое.

```js
const options = {
  // Метод запроса
  method: 'POST', // GET, PUT, DELETE

  // Тело запроса в JSON-формате
  body: JSON.stringify(newPost),

  // Заголовки
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },

  // для включения cookies в запрос
  credentials: 'include',

  // для включения cookies в запрос (в пределах домена)
  credentials: 'same-origin',
};
```

## Возвращает

### `object promise`

`.state` - `fulfilled` || `rejected`

`.result` - `объект responce с собственными методами`

#### Объект responce

```js
{
  // Код статуса ответа от сервера.
  status: "200",

  // Сообщение статуса ответа от сервера - оно объясняет, что произошло.
  statusText: "OK",

  // Свойство принимает состояние и сообщает об успешности запроса:
  // - true (если ответ успешный: начинается с 200)
  // - false (в любом другом случае)
  ok: true;
}
```

## Функция для проверки ответа

Если будет ошибка, то просто указать `response.json()` недостаточно, вернется пустой объект, поэтому дополнительно проверяем через `response.ok`.

```js
function checkResponse(response) {
  return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}
```

## Пример

### `GET`

`GET` — самый распространённый метод. Данные обычно получают именно этим методом. Если метод не прописать явно, `fetch()` будет отправлять запросы методом `GET`.

```js
fetch('http://jsonplaceholder.typicode.com/posts').then(response => response.json());
```

```js
fetch('https://example.com')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data.user.name);
  })
  .catch(err => {
    console.log('Ошибка. Запрос не выполнен: ', err);
  });
```

### `POST`

`POST` — второй по распространённости метод. Его используют для отправки данных на сервер. Чтобы послать запрос методом `POST`, нужно указать этот метод в объекте опций — втором аргументе метода `fetch()`. Поскольку метод `POST` отправляет данные, эти данные нужно как-то хранить в запросе. Для этого их нужно перевести в формат `JSON` и записать в свойство `body` объекта опций.

```js
const newPost = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(newPost),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data); // {title: "foo", body: "bar", userId: 1, id: 101}
  });
```

```js
fetch('https://example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'ivan',
  }),
})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(`Ошибка ${err}. Запрос не выполнен`);
  });
```

### `PUT`

Предназначен для полного обновления указанного ресурса. Например, если в каталоге книг вы решили заменить одну книгу другой.

```js
fetch(`${this.baseUrl}/cards/likes/${idCard}`, {
  method: 'PUT',
  headers: this.headers,
}).then(this.checkResponse);
```

### `PATCH`

Для частичного обновления ресурса. Например, при обновлении профиля пользователя

```js
fetch(`${this.baseUrl}/users/me/avatar`, {
  method: 'PATCH',
  headers: this.headers,
  body: JSON.stringify({
    avatar: objectInputValues.avatarUrl,
  }),
}).then(this.checkResponse);
```

### `DELETE`

Для удаления ресурса с сервера

```js
fetch(`${this.baseUrl}/cards/${idCard}`, {
  method: 'DELETE',
  headers: this.headers,
}).then(this.checkResponse);
```

### Обработка ошибок

```js
fetch('https://jsonplaceholder.typicode.com/there-is-no-such-route')
  .then(response => {
    // Проверяем успешность запроса и выкидываем ошибку
    if (!response.ok) {
      throw new Error('Error occurred!');
    }

    return response.json();
  })
  // Теперь попадём сюда, т.к выбросили ошибку
  .catch(err => {
    console.log(err);
  }); // Error: Error occurred!
```

### Как еще передать данные

```js
// В параметрах запроса
fetch('https://example.com/images/random?type=portrait&name=DorianGrey');

// Прямо в URL
fetch('https://example.com/images/ewfh23d832jnf2903');
```
