# `<legend>`

Добавляет заголовок в `<fieldset>`, который по умолчанию оформляется браузером как текст, органично вписанный в рамку.

`<legend>` позволяет описать содержимое `<fieldset>`, но семантически он не является «представителем» заголовков, хотя выполняет схожую функцию. Он не задаёт иерархию, а лишь характеризует контент внутри «своей» группы — как `<label>` для соответствующего контрола.

Важно, чтобы `<legend>` был первым дочерним элементом внутри `<fieldset>`. Если внутри `<fieldset>` будет больше одного `<legend>`, отобразится только первый, все остальные отобразятся как обычные блочные элементы:

У `<legend>` нет никаких своих атрибутов, ему доступны все глобальные атрибуты.

Внешний вид оформления рамки по умолчанию у `<legend>` немного отличается в зависимости от браузера и операционной системы.

## Пример

```html
<fieldset>
  <legend>Заголовок для группы контролов</legend>
</fieldset>
```