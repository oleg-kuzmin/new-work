# Описание файла `postcss.config.js`

```js
// подключаем плагин autoprefixer в файл
const autoprefixer = require('autoprefixer');

// подключаем плагин cssnano в файл
const cssnano = require('cssnano');

module.exports = {
  // подключаем плагины к PostCSS
  plugins: [
    // подключаем autoprefixer
    autoprefixer,
    // cssnano при подключении нужно передать объект опций
    // { preset: default } говорит о том, что нужно использовать стандартные настройки минификации
    cssnano({ preset: 'default' }),
  ],
};
```
