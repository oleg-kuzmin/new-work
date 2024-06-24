# `@forward`

Позволяет объединить несколько модулей (миксинов) в один.

## Пример

Создаст объект forwarded-styles с ключами записанных свойств.

```scss
// _vars.scss
$bgLight: #f4b770;

// _mixins.scss
@mixin largeText {
  size: 50px;
}

// _forwarded-styles.scss
@forward '../utils/vars';
@forward '../utils/mixins';

// index.scss
@use '../utils/forwarded-styles';

body {
  background-color: forwarded-styles.$bgLight;
  @include forwarded-styles.largeText;
}
```

Создаст объект в глобальной области с переменными в виде ключей записанных свойств. Можно присвоить любое имя вместо `*`.

```scss
// _vars.scss
$bgLight: #f4b770;

// _mixins.scss
@mixin largeText {
  size: 50px;
}

// _forwarded-styles.scss
@forward '../utils/vars';
@forward '../utils/mixins';

// index.scss
@use '../utils/forwarded-styles' as *;

body {
  background-color: $bgLight;
  @include largeText;
}
```
