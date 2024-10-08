# [`datetime`](../index.md)

Позволяет указать дату и время записи.

## Применяется к тегам

- [`<del>`](../Tags/del.md) удаленный контент
- [`<ins>`](../Tags/ins.md) добавленный контент
- [`<time>`](../Tags/time.md) дата, время

## Значения

### `datetime="2014-06"`

Год и месяц (год перед месяцем).

### `datetime="1969-07-16"`

Дата (год, месяц, потом день).

### `datetime="12-31"`

Дата без года (месяц перед днём).

### `datetime="14:54:39.929"`

Только время (час, минуты, потом секунды). Секунды не обязательно. Доли можно указать тремя цифрами после точки.

### `datetime="2013-11-20T14:54"`

Дата и время (комбинация даты и времени, разделяется заглавной T).

### `datetime="+06:00"`

Временная зона (начинается с плюса или минуса. Двоеточие не обязательно).

### `datetime="2019-12-31T23:59:59-02:00"`

Локальное время (То же самое, что дата и время, только с временной зоной).

### `datetime="2010-W21"`

Год и неделя (сначала год, потом количество недель после большой W).

### `datetime="1776"`

Только год (4 цифры или больше, работает и так 0001, и так 12345).

### `datetime="P2DT2H30M10.501S"`

Длительность (способ 1). Заглавная P, день (необязательно), заглавная T, дальше необязательные часы, минуты и секунды. Все буквы должны быть заглавными.

### `datetime="1w 2d 2h 30m 10.501s"`

Длительность (способ 2). Неделя (w), день (d), час (h), минута (m) и секунда (s). Буквы могут быть маленькими и большими. Пробелы не обязательны.

## Пример

### `<del>`

```html
<h4>Сдача проекта</h4>
<ul>
  <li>
    <del datetime="2021-12-21T15:00Z">Созвониться с подрядчиком по поводу актов</del>
  </li>
  <li>Согласовать новую форму оплаты с юристами</li>
</ul>
```

### `<ins>`

```html
<h4>Сдача проекта</h4>
<ul>
  <li>
    <ins datetime="2021-12-21T15:00Z">Созвониться с подрядчиком по поводу актов</ins>
  </li>
  <li>Согласовать новую форму оплаты с юристами</li>
</ul>
```

### `<time>`

```html
<p>Дока вышла в релиз <time datetime="2021-10-12">12 октября 2021</time></p>
```
