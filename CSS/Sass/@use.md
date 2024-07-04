# [`@use`](../index.md)

Новый способ импорт модулей в файлы scss. @import больше не использовать, будет считаться устаревшим.

## Пример

Создаст объект vars с ключами записанных свойств.

```scss
// _vars.scss
$bgLight: #f4b770;

// index.scss
@use '../utils/vars';

body {
  background-color: vars.$bgLight;
}
```

Создаст объект в глобальной области с переменными в виде ключей записанных свойств. Можно присвоить любое имя вместо `*`.

```scss
// _vars.scss
$bgLight: #f4b770;

// index.scss
@use '../utils/vars' as *;

body {
  background-color: $bgLight;
}
```
