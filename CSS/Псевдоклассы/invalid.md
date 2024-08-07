# [`:invalid`](../index.md)

Псевдоклассы используются для стилизации полей формы, филдсетов, либо самой формы:

- `:invalid` - для заполненных с ошибкой
- `:valid` - для верно заполненых
- `:user-invalid` - для заполненных с ошибкой, будет применяться, только после того, как пользователь начал там что-то писать

К любому селектору добавляем двоеточие и ключевое слово invalid или valid. Селектор должен указывать на интерактивный элемент ввода, у которого предусмотрены правила проверки, на форму или на филдсет. Например, абзац браузер не умеет проверять на правильность, а значит, селектор `p:invalid` будет бесполезен.

Если в форме есть группа связанных радиокнопок `<input type="radio">`, то если хотя бы у одной есть атрибут `required`, псевдокласс `:invalid` будет применён ко всем радиокнопкам сразу.

Псевдоклассы `:invalid` или `:valid` применяются и к самой форме, и к тегу `<fieldset>`, в зависимости от того, есть ли внутри ошибки, или все инпуты заполнены верно.

В отличие от комплексной валидации формы, которая происходит при попытке её отправить, эти псевдоклассы работают в реальном времени и сохраняют свою актуальность даже во время ввода.

В настоящий момент стили для псевдокласса `:invalid` применяются к невалидному полю сразу же, что не всегда удобно.

Псевдокласс `:user-invalid` будет применяться, например, к полю ввода только после того, как пользователь начал там что-то писать.

## Пример

```css
input:invalid {
  border: 2px solid red;
}

input:invalid + .validity-icon::before {
  content: '✖';
  color: red;
}

input:valid + .validity-icon::before {
  content: '✓';
  color: green;
}

[type='checkbox']:invalid {
  outline: 2px solid red;
  outline-offset: 2px;
}
```
