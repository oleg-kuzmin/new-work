# [`word-spacing`](../index.md)

Свойство `word-wrap` управляет переносом длинных слов, если они не помещаются в родительский блок.

По умолчанию длинное слово без пробела между ними будет выходить за ширину контейнера, если оно не разорвано.

```css
.element {
  word-wrap: normal;
}
```

## Значения

### `word-wrap: normal` (по умолчанию)

При этом значении текст будет переноситься по пробелам, специальным символам и тегу `<br>`.

### `word-wrap: break-word`

Cлово переносится на любой букве при достижении края родительской области.