# [`Импорт картинок в js`](./index.md)

Webpack изменяет имена файлов при сборке, поэтому пути к картинкам будут неправильными.

Вместо названия файла Webpack подставляет хеш—строку, которая рассчитана на основе содержимого файла.

Если содержимое файла меняется, меняется и хеш.

## 1 способ: Импортируем каждое изображение в JS-файл

Webpack добавит в переменные правильные пути

```js
import jordanImage from './images/jordan.jpg';
import jamesImage from './images/james.jpg';
import bryantImage from './images/bryant.jpg';

const whoIsTheGoat = [
  { name: 'Michael Jordan', image: jordanImage },
  { name: 'Lebron James', link: jamesImage },
  { name: 'Kobe Bryant', link: bryantImage },
];
```

## 2 способ: используем конструктор `new URL()`

Этот способ отличается от первого тем, что работает и без запуска Webpack.

`import.meta.url` - служебный параметр, который указывает на адрес файла.

```js
const jordanImage = new URL('./images/jordan.jpg', import.meta.url);
const jamesImage = new URL('./images/james.jpg', import.meta.url);
const bryantImage = new URL('./images/bryant.jpg', import.meta.url);

const whoIsTheGoat = [
  { name: 'Michael Jordan', image: jordanImage },
  { name: 'Lebron James', link: jamesImage },
  { name: 'Kobe Bryant', link: bryantImage },
];
```
