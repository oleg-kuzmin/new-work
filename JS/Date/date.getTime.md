# `date.getTime()`

Возвращает значение в миллисекундах, прошедших с 1 января 1970 года, соответствующее указанной дате по UTC.

# Синтаксис

```js
const currentDate = new Date(2022, 11);
currentDate.getTime();
```

## Возвращает

### `number`

Число - количество миллисекунд от начала эпохи (`1 января 1970 00:00:00 UTC`) для полученного значения объекта.