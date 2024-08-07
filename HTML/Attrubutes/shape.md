# [`shape`](../index.md)

Обязательный атрибут. Определяет форму области.

## Применяется к тегам

- [`<area>`](../Tags/area.md) ссылки на области карты

## Пример

```html
<map name="doka">
  <area shape="rect" coords="47,4,319,64" href="/html/" target="_blank" alt="HTML" />
  <area shape="rect" coords="46,69,318,129" href="/css/" target="_blank" alt="CSS" />
  <area shape="rect" coords="46,133,318,193" href="/js/" target="_blank" alt="JS" />
</map>
```

## Значения

### `shape="rect"` (по умолчанию)

Форма области в виде прямоугольника.

### `shape="circle"`

Форма области в виде круга.

### `shape="poly"`

Форма области произвольной формы.
