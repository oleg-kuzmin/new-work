# Описание файла `webpack.config.js`

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Точка входа
  entry: { main: './src/index.js' },

  // Точка выхода
  output: {
    // абсолютный путь к точке выхода
    path: path.resolve(__dirname, 'dist'),

    // имя файла, куда webpack положит код
    filename: 'main.js',

    // свойство для обновления путей внутри CSS- и HTML-файлов
    publicPath: '',
  },

  // Режим разработки
  mode: 'development',

  // Настройки локального сервера
  devServer: {
    // отслеживает изменения файлов в папке
    watchFiles: path.join(__dirname, 'src'),

    // сжатие файлов, ускорит загрузку в режиме разработки
    compress: true,

    // порт, чтобы открывать сайт по адресу localhost:8080
    port: 8080,

    // сайт будет открываться сам при запуске npm run dev
    open: true,

    // устаревшая настройка (не использовать)
    static: path.resolve(__dirname, './dist'),
  },

  // Настройка модулей
  module: {
    // Массив правил
    rules: [
      // BABEL
      {
        // регулярное выражение, которое ищет файлы
        test: /\.js$/,
        // при обработке этих файлов использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/',
      },

      // ОБРАБОТКА ФАЙЛОВ
      {
        // регулярное выражение, которое ищет все файлы с расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        // значение позволяет переносить исходные файлы в конечную сборку в том же формате
        type: 'asset/resource',
      },

      // ОБРАБОТКА CSS
      {
        // регулярное выражение, которое ищет файлы
        test: /\.css$/,
        // при обработке этих файлов использовать MiniCssExtractPlugin, css-loader, postcss-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // Значение 1 говорит о том, что некоторые трансформации PostCSS нужно применить до css-loader.
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },

      // ОБРАБОТКА SCSS, SASS
      {
        // регулярное выражение, которое ищет файлы
        test: /\.s[ac]ss$/i,
        // при обработке этих файлов использовать MiniCssExtractPlugin, css-loader, postcss-loader, sass-loader
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  // Настройка плагинов
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};
```
