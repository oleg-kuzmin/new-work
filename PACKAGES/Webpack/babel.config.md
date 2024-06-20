# Описание файла `babel.config.js`

```js
const presets = [
  [
    // пресет
    '@babel/preset-env',
    {
      targets: {
        // поддержка версий браузеров
        edge: '17',
        ie: '11',
        firefox: '50',
        chrome: '64',
        safari: '11.1',
      },

      // полифилы для браузеров из targets
      // по умолчанию babel использует полифилы библиотеки core-js
      useBuiltIns: 'entry',
      corejs: '3.30.1',
    },
  ],
];

module.exports = { presets };
```
