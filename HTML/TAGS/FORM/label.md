# `<label>`

Элемент `<label>` используется для создания подписи к элементу формы:

На многих веб-страницах есть формы — группы интерактивных элементов (полей ввода, выпадающих списков, чекбоксов и т.п.), связанных общим функциональным назначением. Яркие примеры форм — форма регистрации, форма входа, фильтры в каталогах. Формами удобно пользоваться, когда мы понимаем назначение каждого элемента. Для этого необходимо подписывать каждый элемент. И вот как раз для этих целей служит элемент `<label>`.

Помимо текстовой подписи создаётся программная связь между подписью и элементом формы. Это сильно облегчает взаимодействие с формами незрячим или слабовидящим пользователям, использующим скринридеры. Когда фокус попадает на элемент формы, с которым связан `<label>`, скринридер автоматически зачитывает текст подписи, и пользователь понимает, какие данные необходимо ввести или какие данные представлены в текущем элементе формы.

Если элемент с нужным id не является связываемым, то связь не создаётся, и даже если дальше по документу найдётся связываемый элемент с таким же id, то он уже не будет учитываться.

При клике на `<label>` событие клика вызывается также и на связанном элементе формы.

По умолчанию `<label>` является строчным элементом и стилизуется аналогично `<span>` или `<a>`.

Обязательно связывайте `<label>` с чекбоксами и радиокнопками. Это небольшие элементы интерфейса, в которые довольно сложно попасть курсором мыши или пальцем на мобильных устройствах. Если у них есть связанный `<label>`, то пользователь может кликать по тексту подписи, а не целиться в сам чекбокс. Любите своих пользователей!

Даже если дизайнер нарисовал форму, в которой не предусмотрены явные лейблы для элементов, то вам нужно всё равно прописать их в разметке и скрыть через стили. В этом случае их будет не видно, но скринридер их прочитает.

При нажатии на лейбл, связанный с полем ввода или другим элементом формы, фокус будет перемещён на этот элемент.

## Пример

### Прямая связь с элементом формы (элемент формы внутри `<label>`)

```html
<label> Click me <input type="text" /> </label>
```

### Связь с элементом формы через атрибут `for`

```html
<label for="username">Click me</label> <input type="text" id="username" />
```

## Атрибуты

- [`for`](<../ATTRIBUTES FORM/for.md>) связь с элементом формы