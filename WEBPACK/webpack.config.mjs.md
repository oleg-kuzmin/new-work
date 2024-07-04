# [`webpack.config.mjs`](./index.md)

Все плагины нужно импортировать, лоадеры - нет.

```js
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve('./build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext]',
        },
      },
    ],
  },
  devServer: {
    watchFiles: path.resolve('./src'),
    compress: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
};
```

### `import path from 'path'`

Модуль из Node.js для создания абсолютного пути.

```js
path: path.resolve('./dist'),
```

### `import HtmlWebpackPlugin from 'html-webpack-plugin'`

Модуль (плагин) для работы с html.

```js
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
],
```

### `mode`

Определяет режим оптимизации сборки.

- `production` - режим продакшн
- `development` - режим разработки
- `none` - отключает любые параметры оптимизации по умолчанию

```js
mode: 'development';
```

### `entry`

Отправная точка, от которой будут отслеживаться и попадать в сборку все зависимости. Может быть одна или несколько. Если мы ничего не настраиваем, то по умолчанию используется адрес `./src/index.js`. Хорошей практикой считается явное указание точки входа. В качестве значения используется строка или объект с разными точками входа.

```js
entry: './src/index.js',
entry: { main: './src/index.js' },
```

### `output`

Точка выхода. Папка для сохранения результатов сборки. Имя собираемого js-файла. В качестве значения указывается объект. Для удобства обычно используется утилита из `Node.js`, а именно метод `path.resolve()`. Тогда полный адрес для webpack будет правильным.

```js
output: {
  filename: 'main.js',
  path: path.resolve('./dist'),
}
```

### `output.filename`

Имя выходного файла.

### `output.path`

Абсолютный путь выходного файла. `path.resolve` - метод Node.js, который создает абсолютный путь. Метод принимает в качестве аргументов строки с сегментами пути, которые обрабатывает справо налево.

### `module`

Основная конфигурация, где мы указываем к какому файлу какой применить плагин. В качестве значения указывается объект с ключем `rules` - массив объектов с настройками.

```js
use: [
  /* 1 вариант - просто строка 'имя лоадера' */
  /* 2 вариант - или более подробный {объект лоадера} */
  {
    loader: /* имя лоадера */,
    options: /* объект дополнительных опций */
  }
]
```

### `module.rules`

Массив объектов с настройками.

### `module.rules.test`

Регулярное выражение для поиска файлов.

### `module.rules.use`

Строка или массив строк - лоадеров, которые будут использоваться для найденных файлов. Обработка будет идти справо налево (с конца массива).

### `module.rules.exclude`

Добавляет папку в исключения.

### `Обработка файлов .js`

Файлы обрабатываются через `babel-loader`. Можно создать файл конфигурации отдельно.

```js
// С файлом конфига
module: {
  rules: [
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/',
    },
  ],
},
```

```js
// Конфиг внутри
module: {
  rules: [
    {
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
      exclude: '/node_modules/',
    },
  ],
},
```

### `Обработка файлов .css/.scss`

```js
module: {
  rules: [
    {
      test: /\.s?css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
  ],
},
```

### `Обработка изображений`

```js
module: {
  rules: [
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'images/[hash][ext]',
      },
    },
  ],
},
```

### `devServer`

Содержит объект с настройками для виртуального сервера `webpack-dev-server`.

```js
devServer: {
  watchFiles: path.resolve('./src'),
  hot: true,
  compress: true,
  open: true,
  port: 8080,
  static: path.resolve('./build'),
},
```

### `devServer.watchFiles`

Отслеживает изменения файлов в папке.

### `devServer.hot`

Горячая перезагрузка при изменении файлов. По умолчанию включена.

### `devServer.compress`

Сжатие файлов, ускорит загрузку в режиме разработки.

### `devServer.port`

Порт, чтобы открывать сайт по адресу localhost:8080.

### `devServer.open`

Сайт будет открываться в браузере автоматически.

### `devServer.static`

Где собирается проект.

### `plugins`

Добавление дополнительных возможностей для обработки зависимостей. Плагины подключаются и вызываются. В качестве значения указывается массив.

```js
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'index.css',
  }),
],
```

### `devtool`

Эта опция определяет, будут ли и каким образом генерироваться исходные карты.

```js
devtool: 'source-map';
```

### Не устанавливать `cross-env`

Позволяет добавить переменную окружения, чтобы использовать далее по коду.

```json
// package.json
{
  "build": "cross-env NODE_ENV=production webpack"
}
```

```js
// Объявление
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const target = process.env.NODE_ENV === 'production' ? 'web' : 'browserslist';

// Использование
mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
```

### Не устанавливать `npm i style-loader -D`

Лоадер для обработки css, импортирует стили через тег style. Можно сделать проверку на то, в каком режиме сборки запущен webpack и в зависимости от режима запускать: в режиме development - `style-loader`, а в режиме production - как обычно MiniCssExtractPlugin.loader.

### Не устанавливать `npm i clean-webpack-plugin -D`

Плагин для очистки папки перед сборкой. Выдает ошибку при установке.

```js
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

plugins: [
  new CleanWebpackPlugin(),
],
```
