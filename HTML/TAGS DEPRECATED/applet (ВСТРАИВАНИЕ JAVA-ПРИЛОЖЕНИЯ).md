# applet (Встраивание JAVA-приложения)

_(application let: приложение)_

До заката эпохи Adobe Flash возможности динамического контента в браузере были весьма ограничены. Тег `<applet>` позволял встроить в страницу целую программу со своим интерфейсом, написанную на Java.

## Пример

```html
<applet code="game.class" archive="game.zip" height="250" width="350">
  <param name="difficulty" value="easy" />
  <p>Извините, у вас не установлена Java, или ваш браузер не поддерживает встраиваемые Java-апплеты.</p>
</applet>
```

## Чем заменить

Современные браузеры поддерживают «встраиваемое содержимое» с помощью тега `<object>`

```html
<object type="application/pdf" data="/media/examples/In-CC0.pdf" width="250" height="200"></object>
```
