# [`@font-face`](../index.md)

Встроенных в операционные системы шрифтов часто не хватает для создания уникального дизайна сайта. Для подключения нестандартных шрифтов существует директива `@font-face`. С её помощью можно подключить и использовать на странице любой шрифт из файла.

`@font-face` нужно объявлять до того, как вы обратитесь в CSS к этому шрифту. Принято подключать шрифты в самом начале файла стилей (но после всех `@import`).

## Пример

```css
@font-face {
  font-family: 'Gilroy';
  font-weight: 400;
  font-style: normal;
  src: local('Gilroy'), url('Gilroy-Regular.woff2') format('woff2'), 
}

body {
  font-family: 'Gilroy', sans-serif;
}

@font-face {
  font-family: 'Lexend Peta';
  font-weight: 400;
  font-style: normal;
  src: local('Lexend Peta Regular'),
    url('Lexend_Peta-webfont.woff2') format('woff2'), 
    url('Lexend_Peta-webfont.woff') format('woff'), 
    url('Lexend_Peta-webfont.svg') format('svg'), 
    url('Lexend_Peta-webfont.ttf') format('truetype'),
    url('Lexend_Peta-webfont.eot') format('eot');
}
```
