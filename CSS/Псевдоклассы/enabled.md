# [`:enabled`](../index.md)

Псевдоклассы `:disabled` и `:enabled` помогают стилизовать интерактивные элементы — на которые можно и нельзя нажать.

Легко применяются к любым элементам, которым можно задать атрибут `disabled`: `<button>`, `<command>`, `<fieldset>`, `<keygen>`, `<optgroup>`, `<option>`, `<select>`, `<textarea>` и `<input>`.

Часто требуется, чтобы на кнопку отправки формы нельзя было нажать, пока не заполнены все поля этой формы. Проще всего заблокировать кнопку атрибутом `disabled`. Но недостаточно просто указать его в HTML, нужно ещё и при помощи оформления показать пользователю, что кнопка не активна. Как раз для этого нам пригодится псевдокласс `:disabled`.

Псевдокласс `:enabled`, наоборот, поможет стилизовать все доступные для взаимодействия элементы. По факту его чаще всего не указывают, потому что записи с ним и без него, как правило, равноценны: `.input` === `.input:enabled`.

Браузер ориентируется на атрибут `disabled` и, в зависимости от его наличия или отсутствия, добавляет элементу состояние `:enabled` или `:disabled`.

Даже если дизайнер забыл про неактивное состояние, обязательно прописывайте его в стилях, чуть приглушая фоновый цвет или делая элемент полупрозрачным — чтобы пользователь точно знал, что с этим элементом взаимодействовать нельзя.

`:enabled` чаще всего не используется, потому что все интерактивные элементы по умолчанию доступны (включены). Это значит, что прописав стили для селектора `.input`, вы закрываете сценарий с активным элементом.

## Пример

```css
button:disabled {
  opacity: 0.5;
}

button:enabled {
  opacity: 0.5;
}
```
