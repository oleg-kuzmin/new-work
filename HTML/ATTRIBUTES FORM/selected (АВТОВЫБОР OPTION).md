# `selected` (Автовыбор option)

Атрибут булевого типа. Если он задан, это означает, что пункт списка будет выбран по умолчанию. Если у выпадающего списка `<select>` не задан атрибут `multiple`, то атрибут `selected` может быть задан только одному тегу `<option>` в пределах этого списка. Если тегу `<select>` задан атрибут `multiple`, то атрибут `selected` может быть задан любому количеству тегов `<option>` в пределах списка.

## Применяется к тегам

- [`<option>`](<../TAGS FORM/option (ПУНКТ СПИСКА).md>)

## Пример

```html
<select name="city">
  <option value="">-- Выберите город --</option>
  <option value="petersburg" selected>Санкт-Петербург</option>
  <option value="moscow">Москва</option>
  <option value="kazan">Казань</option>
  <option value="samara">Самара</option>
  <option value="perm">Пермь</option>
  <option value="novosibirsk">Новосибирск</option>
</select>
```
