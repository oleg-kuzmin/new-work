# [`enctype`](../index.md)

Определяет, какой вид кодирования будет применён к данным из формы. Этот атрибут обязательно надо ставить, если через форму отправляются файлы, в остальных случаях — не обязательно.

## Применяется к тегам

- [`<form>`](../Tags/form.md) форма

## Пример

```html
<form enctype="application/x-www-form-urlencoded"></form>
```

## Значения

### `enctype="application/x-www-form-urlencoded"` (по умолчанию)

Данные будут кодироваться так, что пробелы превратятся в знак +, а символы вроде кириллицы будут представлены в шестнадцатеричном значении. Например, так будет выглядеть имя Степан: `%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD`.

### `enctype="multipart/form-data"`

Вариант, который надо указать, если через форму отправляются файлы. В этом случае данные не кодируются.

### `enctype="text/plain"`

В этом случае пробелы меняются на +, а остальные символы передаются без изменений.
