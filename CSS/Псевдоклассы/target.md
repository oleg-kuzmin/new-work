# [`:target`](../index.md)

Есть ссылки которые ведут не просто на страницу, а на конкретный HTML-элемент внутри. Псевдокласс `:target` управляет стилем этого элемента.

Браузер видит идентификатор в адресной строке — он идёт после символа # — и находит HTML-элемент, у которого такой же `id`. Стилем этого элемента и управляет псевдокласс `:target`.

Когда мы перейдём по другому якорю и ссылка сменится, то и все свойства `:target` перейдут со старого элемента на новый. При этом логика подставления или удаления этого класса скрыта под капотом движка браузера.

## Пример

```scss
// Шрифт у всех title будет черный.
.title {
  color: black;
}

// Но если мы перешли на него по якорной ссылке, то станет розовым.
.title:target {
  color: pink;
}
```
