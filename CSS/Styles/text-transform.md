# [`text-transform`](../index.md)

Свойство `text-transform` позволяет трансформировать буквы в тексте. С помощью этого свойства можно сделать текст из одних заглавных или наоборот, из одних маленьких букв вне зависимости от формата исходного текста.

Это свойство важно. Вместо того, чтобы набирать текст одними заглавными буквами, лучше применить его. Поскольку в процессе жизни сайта тексты могут меняться, но их формат должен оставаться одинаковым. Нельзя гарантировать что контент-менеджер вставит текст, написанный заглавными, в нужное место.

Свойство трансформации нельзя анимировать при помощи свойства `transition`.

При применении свойства `text-transform` меняется регистр текста. Это означает, что при копировании текст будет именно таким, как
отображается на экране.

## Пример

```css
.element {
  text-transform: uppercase;
}
```

## Значения

### `text-transform: none` (по умолчанию)

Неизмененное состояние.

### `text-transform: uppercase`

ЗАГЛАВНЫЕ БУКВЫ.

### `text-transform: lowercase`

строчные маленькие буквы.

### `text-transform: capitalize`

Каждое Слово Начинается С Заглавной Буквы.