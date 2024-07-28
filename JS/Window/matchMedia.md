# [`matchMedia()`](../index.md)

Интерфейс в глобальной области видимости `window.matchMedia`, который позволяет получить доступ к медиавыражениям из JavaScript и подписываться на их срабатывание. Медиавыражения активно используются в CSS с помощью директивы @media.

## Синтаксис

```js
const mediaQueryList = matchMedia('(Медиавыражение)');
```

Для создания медиа-объекта нужно вызвать функцию matchMedia() и передать ей медиавыражение. Синтаксис медиавыражений и их варианты полностью совпадают с выражениями, которые используются в CSS.

## Возвращает

### `object`

Возвращает медиа-объект - mediaQueryList.

### `object.matches`

- `true` - если window соответствует медиавыражению
- `false` - если нет

## Пример

```js
const mobileWidthMediaQuery = matchMedia('(max-width: 420px)');

function printLog(isMobileSize) {
  const size = isMobileSize ? 'уже или равен' : 'шире';
  console.log(`Размер экрана ${size} 420px`);
}

printLog(mobileWidthMediaQuery.matches);

mobileWidthMediaQuery.addEventListener('change', function (event) {
  printLog(event.matches);
});
```
